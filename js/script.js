$(function() {
  // ********* DOM ELEMENTS *********
  var $domElements = {
    leftArrow: $('.fa-angle-left').eq(0),
    rightArrow: $('.fa-angle-right').eq(0),
    img: $('#img'),
    imgLink: $('#img-link'),
  }

  // ********* ACTIONS *********

  var $next = function() {
    console.log('next');
  };

  var $previous = function() {
    console.log('previous');
  };

  // ********* EVENT LISTENERS *********
  $domElements.leftArrow.on('click', $next);
  $domElements.rightArrow.on('click', $previous);

});
