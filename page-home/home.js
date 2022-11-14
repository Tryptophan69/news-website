
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
var at=document.getElementById('animation-text');
let str=at.innerText
let str2=" ";
let i=-1


setInterval(setInterval(txtanime,100),8000)

function txtanime(){
 setInterval(i++,50) ;{
  if(i<str.length){
  str2=str2+str[i]
  at.innerText=str2
 }
 if(i==str.length-1){
 i=-1;
 str2=""
 }
}
}


