'use strict';



/**
 * navbar toggle
 */



// window.onload = function() {
//   var audio = document.getElementById('hiddenAudio');
//   // audio.style.display = 'none';  // Alternatively, you can use visibility: hidden;
//   audio.play();
// };
/**
 * header
 */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlides();



const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
function toggleVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".card-link");

  projectLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const projectId = link.getAttribute("data-project-id");
      const additionalContent = document.querySelector(`.additional-content.${projectId}`);

      if (additionalContent) {
        additionalContent.classList.toggle("show");
      }
    });
  });
});
function toggleReadMore() {
  var moreText = document.getElementById("read-more-content");
  var btnText = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less";
    document.querySelector('.hero-text').style.maxHeight = moreText.offsetHeight + 'px';
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
    document.querySelector('.hero-text').style.maxHeight = "200px"; // Adjust the max-height based on your design
  }
}

showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;

//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }

//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 6000); // Change slide every 2 seconds
// }
function expandImage(image) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const expandedImage = new Image();
  expandedImage.src = image.src;
  expandedImage.classList.add('expanded-image');

  overlay.appendChild(expandedImage);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    overlay.remove();
  });
}

function expandVideo(video) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const expandedVideo = document.createElement('video');
  expandedVideo.src = video.src;
  expandedVideo.controls = true;
  expandedVideo.classList.add('expanded-video');

  overlay.appendChild(expandedVideo);
  document.body.appendChild(overlay);
}
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closei")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closei")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

function toggleVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".card-link");

  projectLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const projectId = link.getAttribute("data-project-id");
      const additionalContent = document.querySelector(`.additional-content.${projectId}`);

      if (additionalContent) {
        additionalContent.classList.toggle("show");
      }
    });
  });
});

var i = 0;
var txt = 'Alradwan your giued in suze canal zone '; /* The text */
var speed = 5; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".wel").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onbeforeunload(typeWriter())


document.addEventListener("DOMContentLoaded", function() {
  const div1 = document.getElementById('div1');
  const div2 = document.getElementById('div2');
  const div3 = document.getElementById('div3');

  animateDiv(div1, 1);
  animateDiv(div2, 2);
  animateDiv(div3, 3);
});

function animateDiv(div, delay) {
  setTimeout(function() {
    div.style.transition = "all 1s ease-in-out";
    div.style.opacity = 1;
    div.style.bottom = "50px"; // You can adjust the final position as needed
  }, delay * 1000);
}
var customSlideIndex = 1;
  showCustomSlides(customSlideIndex);

  function plusCustomSlides(n) {
    showCustomSlides(customSlideIndex += n);
  }

  function currentCustomSlide(n) {
    showCustomSlides(customSlideIndex = n);
  }

  function showCustomSlides(n) {
    var i;
    var slides = document.getElementsByClassName("my-custom-slide");
    if (n > slides.length) { customSlideIndex = 1 }
    if (n < 1) { customSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[customSlideIndex - 1].style.display = "block";
  }

  $(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
}); 

});  