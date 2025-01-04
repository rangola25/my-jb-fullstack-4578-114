$(function () {
  // Initially hide all <li> items inside <ul>
  $("ul > li").hide();

  // Show and hide the first <ul> (News) when hovering over the first <h3>
  $("h3:first").mouseenter(function() {
    $("ul:first > li").fadeIn();  // Show items inside the first <ul> (News)
  }).mouseleave(function() {
    $("ul:first > li").fadeOut();  // Hide items inside the first <ul> (News)
  });

  // Show and hide the second <ul> (Articles) when hovering over the second <h3>
  $("h3:nth-of-type(2)").mouseenter(function() {
    $(this).next("ul").children("li").fadeIn();  // Show items inside the second <ul> (Articles)
  }).mouseleave(function() {
    $(this).next("ul").children("li").fadeOut();  // Hide items inside the second <ul> (Articles)
  });

  // Show and hide the third <ul> (Blog Posts) when hovering over the third <h3>
  $("h3:nth-of-type(3)").mouseenter(function() {
    $(this).next("ul").children("li").fadeIn();  // Show items inside the third <ul> (Blog Posts)
  }).mouseleave(function() {
    $(this).next("ul").children("li").fadeOut();  // Hide items inside the third <ul> (Blog Posts)
  });
});
