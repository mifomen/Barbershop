
 var nojs=document.querySelector(".menu-nav-nojs"),
menu=document.querySelector(".menu-nav__toggle"),
close=document.querySelector(".menu-nav--closed"),
nav=document.querySelector(".menu-nav");

nav.classList.remove('menu-nav--opened');
nav.classList.remove('menu-nav--nojs');
nav.classList.add('menu-nav--closed');

document.addEventListener("DOMContentLoaded",function(a){
 menu.classList.remove("menu-nav--nojs")}),
 menu.addEventListener("click",function(a){
 a.preventDefault(),nav.classList.toggle("menu-nav--opened"),
 nav.classList.toggle("menu-nav--closed")});
