//Event listener
document.getElementById("imgcat").addEventListener("click", countClick);

const counter = document.querySelector("#count");

let i = 0;
function countClick(e) {
  i++;
  counter.textContent = i;
}
