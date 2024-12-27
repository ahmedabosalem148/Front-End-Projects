'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}
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
    document.querySelector('.hero-text').style.maxHeight = "100px"; // Adjust the max-height based on your design
  }
}

let slideIndex = 0;
/**
 * header
 */

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

  function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
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
  document.body.appendChild(overlay);}
  var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}