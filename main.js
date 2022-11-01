"use strict";
let changePicture = document.getElementById("image");
let changeButton = document.getElementById("change");
console.log(changeButton);
//console.log(changePicture);

function onChangePicture() {
  if (changePicture.src === "./images/jet ski 2.png") {
    changePicture.src = "./images/jet ski 1.png";
  } else if (changePicture.src = "./images/jet ski 1.png") {
    changePicture.src = "./images/jet ski 2.png";
  }
}
changeButton.addEventListener("click", onChangePicture);
