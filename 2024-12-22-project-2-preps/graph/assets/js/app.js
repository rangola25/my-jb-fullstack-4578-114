var trace1 = {
    x: [1, 2, 3, 4],
    y: setInterval(() => {
        [infoGraph[0].USD]
    }, 5000),
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: setInterval(() => {
        [infoGraph[1].USD]
    }, 5000),
    type: 'scatter'
  };

  var trace3 = {
    x: [1, 2, 3, 4],
    y: setInterval(() => {
        [infoGraph[2].USD]
    }, 5000),
    type: 'scatter'
  };

  var trace4 = {
    x: [1, 2, 3, 4],
    y: setInterval(() => {
        [infoGraph[3].USD]
    }, 5000),
    type: 'scatter'
  };

  var trace5 = {
    x: [1, 2, 3, 4],
    y: setInterval(() => {
        [infoGraph[4].USD]
    }, 5000),
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3, trace4, trace5];
  
  Plotly.newPlot('profile-tab', data);