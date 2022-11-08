
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-nav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset -60 >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  window.onscroll = function() {myFunction1()};
var navbar = document.getElementById("collapse-navbar");
var sticky = navbar.offsetTop;
function myFunction1() {
  if (window.pageYOffset -90 >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


