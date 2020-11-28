let simpsons = document.querySelectorAll(".simpsons");
console.log(simpsons);

let buttonClickWackyTrue = document.querySelector(".big-button");
buttonClickWackyTrue.addEventListener("click", function (e) {
  alert("Hello Everybody!!!");
  simpsons[0].style.display = "none";
  simpsons[1].style.display = "block";
});

let buttonClickMargeTrue = document.querySelector(".margeTrue");
buttonClickMargeTrue.addEventListener("click", function (e) {
  alert("Right!!!");
  simpsons[1].style.display = "none";
  simpsons[2].style.display = "block";
});

let buttonClickMargeFalse = document.querySelector(".margeFalse");
buttonClickMargeFalse.addEventListener("click", function (e) {
  alert("D'oH!!!!");
  simpsons[1].style.display = "none";
  simpsons[1].style.display = "block";
});

let buttonClickHomerTrue = document.querySelector(".homerTrue");
buttonClickHomerTrue.addEventListener("click", function (e) {
  alert("D'oH!!!");
  simpsons[2].style.display = "none";
  simpsons[2].style.display = "block";
});

let buttonClickHomerFalse = document.querySelector(".homerFalse");
buttonClickHomerFalse.addEventListener("click", function (e) {
  alert("Right!!!!");
  simpsons[2].style.display = "none";
  simpsons[3].style.display = "block";
});

let buttonClickLisaTrue = document.querySelector(".lisaTrue");
buttonClickLisaTrue.addEventListener("click", function (e) {
  alert("Right!!!");
  simpsons[3].style.display = "none";
  simpsons[4].style.display = "block";
});

let buttonClickLisaFalse = document.querySelector(".lisaFalse");
buttonClickLisaFalse.addEventListener("click", function (e) {
  alert("D'oH!!!!");
  simpsons[3].style.display = "none";
  simpsons[3].style.display = "block";
});

let buttonClickBartTrue = document.querySelector(".bartTrue");
buttonClickBartTrue.addEventListener("click", function (e) {
  alert("Right!!!");
  simpsons[4].style.display = "none";
  simpsons[5].style.display = "block";
});

let buttonClickBartFalse = document.querySelector(".bartFalse");
buttonClickBartFalse.addEventListener("click", function (e) {
  alert("D'oH!!!!");
  simpsons[4].style.display = "none";
  simpsons[5].style.display = "block";
});
