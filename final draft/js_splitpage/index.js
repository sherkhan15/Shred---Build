var $bigBall = document.querySelector('.cursor__ball--big');
var $smallBall = document.querySelector('.cursor__ball--small');
var $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (var i = 0; i < $hoverables.length; i++) {if (window.CP.shouldStopExecution(1)){break;}
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
window.CP.exitedLoop(1);


// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  });
  document.getElementById('small__ball').style.display = 'none'
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  });
  document.getElementById('small__ball').style.display = 'block'
}