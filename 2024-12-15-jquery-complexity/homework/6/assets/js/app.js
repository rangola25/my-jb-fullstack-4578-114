$(function () {

  function randomNumAndColor() {
    for(i=1; i<=15; i++) {
    $('#allDivs').append(`<div class="div${Math.floor((Math.random()) * (2 - 1 + 1) + 1)}">${i}</div>`)
  }
}

  randomNumAndColor()

  $("#button1").click(function () {
    if ($(this).hasClass('fade-out')) {
      $(".div1").fadeIn(2000);
      $(this).text('Fade Out Red Squares');
      $(this).removeClass('fade-out'); 
    } else {
      $(".div1").fadeOut(2000); 
      $(this).text('Fade In Red Squares'); 
      $(this).addClass('fade-out'); 
    }
  });

  $("#button2").click(function () {
    if ($(this).hasClass('fade-out')) {
      $(".div2").fadeIn(2000);
      $(this).text('Fade Out Blue Squares'); 
      $(this).removeClass('fade-out'); 
    } else {
      $(".div2").fadeOut(2000); 
      $(this).text('Fade In Blue Squares');
      $(this).addClass('fade-out'); 
    }
  });
});
