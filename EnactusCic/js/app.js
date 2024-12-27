
var i = 0;
var txt = 'Welcome to Enactus cic!'; /* The text */
var speed = 5; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".wel").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onbeforeunload(typeWriter())