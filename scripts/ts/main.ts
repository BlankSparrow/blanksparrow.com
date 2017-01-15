// comment
//var test : string = "hello world";

var circles = document.getElementsByClassName("circle");

for (var i = 0; i < circles.length; i++) {
  circles[i].setAttribute("onclick","this.classList.toggle('circle-active');");
  //circles[i].addEventListener("click", () => {circles[i].classList.toggle("circle-active")});
}

var top_wrapper = document.getElementsByClassName("top-wrapper")[0];
var bottom_wrapper = document.getElementsByClassName("bottom-wrapper")[0];

var top_left = document.getElementsByClassName("top-left")[0];
var top_right = document.getElementsByClassName("top-right")[0];
var bottom_left = document.getElementsByClassName("bottom-left")[0];
var bottom_right = document.getElementsByClassName("bottom-right")[0];

//top_wrapper.setAttribute("onclick", "top_wrapper.classList.toggle('wrapper-active');bottom_wrapper.classList.toggle('wrapper-hidden');");
//bottom_wrapper.setAttribute("onclick", "top_wrapper.classList.toggle('wrapper-hidden');bottom_wrapper.classList.toggle('wrapper-active');");

top_left.setAttribute("onclick", "top_left_click()");
top_right.setAttribute("onclick", "top_right_click()");
bottom_left.setAttribute("onclick", "bottom_left.classList.toggle('circle-mask'); top_right.classList.toggle('circle-hidden');top_left.classList.toggle('circle-hidden'); bottom_left.classList.toggle('circle-active');bottom_right.classList.toggle('circle-hidden');top_wrapper.classList.toggle('wrapper-active');bottom_wrapper.classList.toggle('wrapper-hidden');");
bottom_right.setAttribute("onclick", "bottom_right.classList.toggle('circle-mask'); top_right.classList.toggle('circle-hidden');top_left.classList.toggle('circle-hidden'); bottom_right.classList.toggle('circle-active');bottom_left.classList.toggle('circle-hidden');top_wrapper.classList.toggle('wrapper-active');bottom_wrapper.classList.toggle('wrapper-hidden');");

function top_left_click(){
  top_left.classList.toggle('circle-active');
  top_right.classList.toggle('circle-hidden'); 
  bottom_left.classList.toggle('circle-hidden');
  bottom_right.classList.toggle('circle-hidden'); 
  top_wrapper.classList.toggle('wrapper-hidden');
  bottom_wrapper.classList.toggle('wrapper-active');
}

function top_right_click(){
  top_left.classList.toggle('circle-hidden');
  top_right.classList.toggle('circle-active'); 
  bottom_left.classList.toggle('circle-hidden');
  bottom_right.classList.toggle('circle-hidden'); 
  top_wrapper.classList.toggle('wrapper-hidden');
  bottom_wrapper.classList.toggle('wrapper-active');
}