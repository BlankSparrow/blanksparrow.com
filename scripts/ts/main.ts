// comment
//var test : string = "hello world";

var circles = document.getElementsByClassName("circle");

for (var i = 0; i < circles.length; i++) {
  circles[i].setAttribute("onclick","this.classList.toggle('circle-active');");
  //circles[i].addEventListener("click", () => {circles[i].classList.toggle("circle-active")});
}
