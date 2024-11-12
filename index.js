var responsiveToggleBtn = document.getElementById("toggle-btn");
responsiveToggleBtn.addEventListener("click", toggleResponsive)
/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function toggleResponsive() {
  var x = document.getElementsByClassName("navbar")[0];

  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 

document.addEventListener("DOMContentLoaded", function() {
  const subnavButtons = document.querySelectorAll('.subnavbtn');
  
  subnavButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.classList.toggle('responsive');
    });
  });
});

function selectImage(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 
let userOnMobile = window.matchMedia("(max-width: 1024px)")
console.log(userOnMobile)
let imgs = document.getElementsByClassName('column');


function currentGalleryPage(page) {
  let dots = document.getElementsByClassName("dot");
  for(i = 0; i < dots.length; i++) {
    if (i == page) {
      dots[i].className = "dot active"
    } else {
      dots[i].className = "dot";
    }
  }
  let pageCount = userOnMobile.matches ? 3 : 9; // mobile or desktop
  let startIndex = page * pageCount;
  let endIndex = startIndex + pageCount;

  // hide all images
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].className = "column";
  }

  // show only the current page's images
  for (let i = startIndex; i < endIndex && i < imgs.length; i++) {
    imgs[i].className = "column mobile";
  }
}
