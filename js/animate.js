//document.addEventListener('DOMContentLoaded', function(){ 
//    $(".indexImages").slick({
//      slidesToShow: 3,
//      slidesToScroll: 1,
//      autoplay: true,
//      autoplaySpeed: 2000,
//        variableWidth: true,
//        adaptiveHeight: true,
//        dots: true,
//        arrows: true
//     });
//}, false);

$('.carousel').carousel()

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function myFunction(imgs) {
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

