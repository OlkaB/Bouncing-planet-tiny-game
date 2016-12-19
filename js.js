var score = 0;
var animTempo = 11;

function play() {
  document.getElementById("planet").style.display = "inherit";
  document.getElementById("feedback").style.display = "none";
  //play and speed up animation;
  if (animTempo > 2) {
    animTempo -= 2;
    document.getElementById("planet").style.animationDuration = animTempo + "s";
  } else {
    animTempo -= 1;
    document.getElementById("planet").style.animationDuration = animTempo + "s";
  }
}

function catchedPlanet() {
  document.getElementById("planet").style.display = "none";
  document.getElementById("feedback").style.display = "inherit";
  score++;
  document.getElementById("gameScore").innerHTML = score;
  document.getElementById("action").innerHTML = "Play next level";

  if (animTempo <= 1) {
    document.getElementById("action").style.display = "none";
    document.getElementById("planet").style.display = "none";
    document.getElementById("feedback").style.fontSize = "35px";
    document.getElementById("feedback").innerHTML = "You won the game!!!";
    document.getElementById("feedback").style.display = "inherit";
  }
}