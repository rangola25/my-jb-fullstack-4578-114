$(function () {
  // For the first button and div1 (red squares)
  $("#button1").click(function () {
    if ($(this).hasClass('fade-out')) { // Check if div is already faded out
      $(".div1").fadeIn(2000); // Fade in div1
      $(this).text('Fade Out Red Squares'); // Update button text
      $(this).removeClass('fade-out'); // Remove the fade-out class
    } else {
      $(".div1").fadeOut(2000); // Fade out div1
      $(this).text('Fade In Red Squares'); // Update button text
      $(this).addClass('fade-out'); // Add the fade-out class
    }
  });

  // For the second button and div2 (blue squares)
  $("#button2").click(function () {
    if ($(this).hasClass('fade-out')) { // Check if div is already faded out
      $(".div2").fadeIn(2000); // Fade in div2
      $(this).text('Fade Out Blue Squares'); // Update button text
      $(this).removeClass('fade-out'); // Remove the fade-out class
    } else {
      $(".div2").fadeOut(2000); // Fade out div2
      $(this).text('Fade In Blue Squares'); // Update button text
      $(this).addClass('fade-out'); // Add the fade-out class
    }
  });
});
