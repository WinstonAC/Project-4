let buttonClick = document.querySelector('.jsbutton')

buttonClick.addEventListener("click", 
  function(e) {
    let elem = document.createElement("img")

    let buttonClickRemove = document.querySelector('.js-button-rm');
buttonClickRemove.addEventListener("click", 
  function(e) {
    //let imgDiv = document.querySelector(".image-comes-here")
    let elem = document.querySelector("img")
    let body = document.body
    body.removeChild(elem);
    //imgDiv.removeChild(elem);