var  
button = document.querySelector(".menu-nav__toggle"),
nav = document.querySelector(".menu-nav");

document.addEventListener("DOMContentLoaded",function(){
	nav.classList.remove("menu-nav--nojs")});


button.addEventListener("click", function(evt){
	evt.preventDefault(),
	nav.classList.toggle("menu-nav--opened"),
	nav.classList.toggle("menu-nav--closed")});