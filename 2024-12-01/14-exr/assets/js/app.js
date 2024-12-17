setInterval(() => {
    const now = new Date();
    document.getElementById('timeDisplay').innerHTML = now.toLocaleTimeString(); 
}, 1000);


