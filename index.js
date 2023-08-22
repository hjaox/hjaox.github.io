document.getSelection.onmousemove = function(event) {myFunction(event)};

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  document.getElementById("flashlight").style.setProperty('mouse-x', `${x}px`);
  document.getElementById("flashlight").style.setProperty('mouse-y', `${y}px`);
}

