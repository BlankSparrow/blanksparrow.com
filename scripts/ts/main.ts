// comment
//var test : string = "hello world";

var circles = document.getElementsByClassName("circle");

for (var i = 0; i < circles.length; i++) {
  circles[i].setAttribute("onclick","this.classList.toggle('circle-active');");
  //circles[i].addEventListener("click", () => {circles[i].classList.toggle("circle-active")});
}

var center = document.getElementsByClassName("center")[0];

var top_wrapper = document.getElementsByClassName("top-wrapper")[0];
var bottom_wrapper = document.getElementsByClassName("bottom-wrapper")[0];

var top_left = document.getElementsByClassName("top-left-align")[0];
var top_right = document.getElementsByClassName("top-right-align")[0];
var bottom_left = document.getElementsByClassName("bottom-left-align")[0];
var bottom_right = document.getElementsByClassName("bottom-right-align")[0];

top_left.setAttribute("onclick", "top_left_click()");
top_right.setAttribute("onclick", "top_right_click()");
bottom_left.setAttribute("onclick", "bottom_left_click()");
bottom_right.setAttribute("onclick", "bottom_right_click()");

function top_left_click(){
  center.classList.toggle('center-active');
  top_left.classList.toggle('top-left-active');
  top_right.classList.toggle('top-right-hidden'); 
  bottom_left.classList.toggle('bottom-left-hidden');
  bottom_right.classList.toggle('bottom-right-hidden'); 
  top_wrapper.classList.toggle('wrapper-active');
  bottom_wrapper.classList.toggle('wrapper-active');
}

function top_right_click(){
  center.classList.toggle('center-active');
  top_left.classList.toggle('top-left-hidden');
  top_right.classList.toggle('top-right-active'); 
  bottom_left.classList.toggle('bottom-left-hidden');
  bottom_right.classList.toggle('bottom-right-hidden'); 
  top_wrapper.classList.toggle('wrapper-active');
  bottom_wrapper.classList.toggle('wrapper-active');
}


function bottom_left_click(){
  center.classList.toggle('center-active');
  top_left.classList.toggle('top-left-hidden');
  top_right.classList.toggle('top-right-hidden'); 
  bottom_left.classList.toggle('bottom-left-active');
  bottom_right.classList.toggle('bottom-right-hidden'); 
  top_wrapper.classList.toggle('wrapper-hidden');
  bottom_wrapper.classList.toggle('wrapper-active');
}

function bottom_right_click(){
  center.classList.toggle('center-active');
  top_left.classList.toggle('top-left-hidden');
  top_right.classList.toggle('top-right-hidden'); 
  bottom_left.classList.toggle('bottom-left-hidden');
  bottom_right.classList.toggle('bottom-right-active'); 
  top_wrapper.classList.toggle('wrapper-hidden');
  bottom_wrapper.classList.toggle('wrapper-active');
}