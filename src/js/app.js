const imgCard = document.querySelector(".product-image");
const tag = document.querySelector(".tag");
const redColor = document.querySelector(".red");
const grayColor = document.querySelector(".gray");
const blackColor = document.querySelector(".black");
const btnCart = document.getElementById("button");
const feedbackBtn = document.querySelector(".feedback");

function changeToRed() {
  imgCard.style.backgroundImage = "url('./public/img/redcar.jpg')";
  btnCart.style.backgroundColor = "red";
  tag.style.backgroundColor = "red";
  imgCard.alt = "Red car";
}

function changeToGray() {
  imgCard.style.backgroundImage = "url('./public/img/graycar.jpg')";
  btnCart.style.backgroundColor = "gray";
  tag.style.backgroundColor = "gray";
  imgCard.alt = "Gray car";
}

function changeToBlack() {
  imgCard.style.backgroundImage = "url('./public/img/blackcar.jpg')";
  btnCart.style.backgroundColor = "black";
  tag.style.backgroundColor = "black";
  imgCard.alt = "Black car";
}

function buttonClicked() {
  feedbackBtn.classList.add("visible");
  btnCart.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", (event) => {
  redColor.addEventListener("click", changeToRed);
  grayColor.addEventListener("click", changeToGray);
  blackColor.addEventListener("click", changeToBlack);
  feedbackBtn.addEventListener("click", buttonClicked);
});

export { changeToRed, changeToGray, changeToBlack, buttonClicked };
