import { useEffect, useState, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import * as XLSX from 'xlsx';
import User from '../../../services/auth-aware/vacation';
import useService from '../../../hooks/useService';

export default function GraphReport() {
  const [destinations, setDestinations] = useState<string[]>([]);
  const [likes, setLikes] = useState<number[]>([]);

  // Create a ref to the div where Plotly will render the graph
  const plotDivRef = useRef<HTMLDivElement | null>(null);

  // Use the custom hook to instantiate the User service
  const userService = useService(User);

  useEffect(() => {
    const fetchVacationData = async () => {
      try {
        // Fetch all vacations
        const vacations = await userService.getAllVacations();
        const vacationDestinations = vacations.map((vacation) => vacation.destination);
        const vacationIds = vacations.map((vacation) => vacation.id);

        console.log("Fetched vacations:", vacations);
        console.log("Vacation destinations:", vacationDestinations);
        console.log("Vacation IDs:", vacationIds);

        // Fetch likes data from the backend, which returns likes count per vacationId
        const likesData = await userService.getAllLikes();  // This now returns likes in the format { vacationId, number }
        console.log("Fetched likes data:", likesData);

        // Map likes data to the correct vacation IDs
        const vacationLikes = vacationIds.map(id => {
          // Find the number of likes for the current vacation ID
          const like = likesData.find(like => like.vacationId === id);
          return like ? like.number : 0;  // If no like data found, default to 0
        });
        console.log("Mapped likes data:", vacationLikes);

        // Set the state with destinations and likes
        setDestinations(vacationDestinations);
        setLikes(vacationLikes);
      } catch (error) {
        console.error('Error fetching vacation data:', error);
      }
    };

    fetchVacationData();
  }, [userService]); // Add `userService` to dependencies to avoid unnecessary calls

  useEffect(() => {
    if (destinations.length > 0 && likes.length > 0 && plotDivRef.current) {
      const trace1: Partial<Plotly.Data> = {
        type: 'bar',
        x: destinations,  // Vacation destinations as X axis
        y: likes,          // Number of likes/followers as Y axis
        marker: {
          color: '#C8A2C8',
          line: {
            width: 2.5,
          },
        },
      };

      const data: Partial<Plotly.Data>[] = [trace1];

      const layout = {
        title: {
          text: 'Vacation Likes per Destination',
        },
        font: { size: 18 },
        xaxis: { title: 'Vacation Destination' },
        yaxis: {
          title: 'Number of Likes',
          tick0: 0,  // Start the y-axis from 0
          dtick: 1,  // Increment y-axis by 1
          showgrid: true, // Optionally, you can show grid lines on the y-axis
          range: [0, Math.max(...likes, 0) + 1], // Ensure the y-axis range starts from 0 and goes above the highest value
        },
      };

      const config = { responsive: true };

      // Only attempt to create the plot if the div element is available
      if (plotDivRef.current) {
        Plotly.newPlot(plotDivRef.current, data, layout, config);
      }

      // Cleanup Plotly instance on component unmount
      return () => {
        if (plotDivRef.current) {
          Plotly.purge(plotDivRef.current);
        }
      };
    }
  }, [destinations, likes]); // Trigger the plot update when data changes

  const exportToExcel = () => {
    // Combine destinations and likes into a single array of objects
    const data = destinations.map((destination, index) => ({
      Destination: destination,
      Likes: likes[index]
    }));

    // Create a new workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Vacation Likes");

    // Write the workbook to a file
    XLSX.writeFile(workbook, "Vacation_Likes.xlsx");
  };

  return (
    <div>
      {/* Use the ref to attach the Plotly chart to this div */}
      <div ref={plotDivRef} style={{ width: '100%', height: '500px' }}></div>
      {/* Add a button to export the data to Excel */}
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
}