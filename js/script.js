$(function() {
  // ********* DOM ELEMENTS *********
  var $domElements = {
    leftArrow: $('.fa-angle-left').eq(0),
    rightArrow: $('.fa-angle-right').eq(0),
    projectContainer: $('#project-container'),
    img: $('.project-img')
  };

  // ********* PROJECT NAVIGATION *********

var $projects = [
  {
    img: $('<img class="project-img" src="img/project1.png" alt="">'),
    link: $('<a href="https://github.com/j-hha/egg_hunt">browser game: Egg Hunt</a>'),
    visible: true
  },
  {
    img: $('<img class="project-img" src="img/project2.png" alt="">'),
    link: $('<a href="https://github.com/j-hha/study_tool">full stack study app: Crammer </a>'),
    visible: false
  },
  {
    img: $('<img class="project-img" src="img/project3.png" alt="">'),
    link: $('<a href="http://fitkids.herokuapp.com/">full stack app: Fit Kids</a>'),
    visible: false
  },
  {
    img: $('<img class="project-img" src="img/project4.png" alt="">'),
    link: $('<a href="https://find-the-perfect-excuse.herokuapp.com/">full stack app: The Perfect Excuse</a>'),
    visible: false
  },
  {
    img: $('<img class="project-img" src="img/project5.png" alt="">'),
    link: $('<a href="https://github.com/j-hha/final_project">full stack app: Coffee Compass</a>'),
    visible: false
  }
];

  // ********* ACTIONS *********

  $domElements.projectContainer.append($projects[0].img).append($projects[0].link);
  $domElements.leftArrow.css('visibility', 'hidden');

  var $next = function() {
    console.log('starting next');
    console.log($domElements.rightArrow.css('visibility'));

    for (var i = 0; i < $projects.length; i++) {
      if (i >= $projects.length-2) {
        $domElements.rightArrow.css('visibility', 'hidden');
        console.log($projects);
      }

      if (i < $projects.length-1 && $projects[i].visible === true) {
        $domElements.leftArrow.css('visibility', 'visible');
        $projects[i + 1].visible = true;
        $projects[i].visible = false;
        console.log(i , $projects[i].visible, i+1, $projects[i + 1].visible);
        $domElements.projectContainer.empty();
        $domElements.projectContainer.append($projects[i + 1].img).append($projects[i + 1].link);
        break
      }
    }
  };

  var $previous = function() {
    console.log('previous');
    for (var i = $projects.length-1; i >= 0; i--) {

      if (i <= 1) {
        $domElements.leftArrow.css('visibility', 'hidden');
      }

      if (i > 0 && $projects[i].visible === true) {
        $domElements.rightArrow.css('visibility', 'visible');
        $projects[i - 1].visible = true;
        $projects[i].visible = false;
        console.log(i , $projects[i].visible, i-1, $projects[i - 1].visible);
        $domElements.projectContainer.empty();
        $domElements.projectContainer.append($projects[i - 1].img).append($projects[i - 1].link);
        break
      }
    }
  };

  // ********* EVENT LISTENERS *********
  $domElements.leftArrow.on('click', $previous);
  $domElements.rightArrow.on('click', $next);

});
