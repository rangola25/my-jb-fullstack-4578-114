$(function () {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $("#button1").click(function () {
    // Function to generate and append random numbers to divs
    function appendRandomNumbers(divId) {
      for (let i = 1; i <= 5; i++) {
        const randomColor = getRandomColor();
        $(`#${divId} > .div${i}`).css("background-color", randomColor);
        const randomNumber = Math.floor(Math.random() * 101); // Random number between 0 and 100
        $(`#${divId} > .div${i}`).text(randomNumber); // Append random number to the correct div
      }
    }

    // Call the function for each div container
    appendRandomNumbers("div1");
    appendRandomNumbers("div2");
    appendRandomNumbers("div3");
  });
});
