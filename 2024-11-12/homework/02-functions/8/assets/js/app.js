function printTime() {
    const currentDate = new Date(); 
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
  
    // Add leading zeros if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.write(timeString);
  }
  
  printTime();
  

