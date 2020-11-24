let simpsons = document.querySelectorAll(".simpsons");
console.log(simpsons);

//   "name":
//   "name":'marge-card',
//   "se"
// , 'lisa-card'];

// card reps the indv cards 1-4
// i need to loop thru each card
// cards need to display in order
// cards need to have an event after each click
// when the button is clicked the user will get a message/ go to the next prompt
// they'll get an alert saying youre right or an alert saying youre wrong.
// inside the game the user can check the via the alert -

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

// let buttonClickFamilyTrue = document.querySelector(".familyTrue");
// buttonClickFamilyTrue.addEventListener("click", function (e) {
//   alert("Great Game!!!");
//   simpsons[5].style.display = "none";
//   simpsons[5].style.display = "block";
// });

// let buttonClickFamilyFalse = document.querySelector(".familyFalse");
// buttonClickFamilyFalse.addEventListener("click", function (e) {
//   alert("D'oH!!!!");
//   simpsons[4].style.display = "none";
//   simpsons[5].style.display = "block";
// });



// let buttonClickRemove = document.querySelector('.js-button-rm');
// buttonClickRemove.addEventListener("click",
//   function(e) {
//     let imgDiv = document.querySelector(".image-comes-here")
//     let elem = document.querySelector("img")
//     let body = document.body
//     body.removeChild(elem);
//     imgDiv.removeChild(elem);
//   }
// );
