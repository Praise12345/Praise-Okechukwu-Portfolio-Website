var sideNav = document.getElementById("sideNav");
var Divicon = document.getElementById("Divicon");
var icon = document.getElementById("icon");

sideNav.style.right = '-250px';

function openNav(){
  if(sideNav.style.right == '-250px' ){
    sideNav.style.right = '0px';
    icon.src = 'images/close.png';
  }else{
    sideNav.style.right = '-250px';
    icon.src = 'images/menu.png';
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}