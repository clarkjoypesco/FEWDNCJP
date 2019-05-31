const data = [
  { id: 1, name: "Angela", image: "cat0.jpg", vote: 0 },
  { id: 2, name: "Cathy", image: "cat1.jpg", vote: 0 },
  { id: 3, name: "Rose", image: "cat2.jpg", vote: 0 },
  { id: 4, name: "Karina", image: "cat3.jpg", vote: 0 },
  { id: 5, name: "Brenda", image: "cat4.jpg", vote: 0 }
];

//Listen for cancel
document.querySelector("#content").addEventListener("click", catClick);
document.querySelector("#nav-cats").addEventListener("click", catClickNav);
const cats = data;
let html = "";
cats.forEach(function(cat) {
  html += `
      <li class="nav-item">
      <a class="nav-link" href="#">${cat.name} <span id="${cat.id}">0</span></a>
    </li>
    `;
});
document.getElementById("nav-cats").innerHTML = html;
findCat("Angela");
function findCat(catName) {
  cats.forEach(function(cat) {
    if (cat.name === catName) {
      html = `
                
            <div class="d-block mx-auto mb-4 py-5">
            <div class="cat">
              <h3 class="catsname">${cat.name}</h3>
          
              <div class="imgcat ">
                <img src="img/${
                  cat.image
                }" alt="cat" class="rounded img-fluid" />
              </div>
          
              <h4>${cat.vote}</h4>
            </div>
          </div>      
                  `;
    }
  });
  document.getElementById("content").innerHTML = html;
}
function voteCat(catName) {
  cats.forEach(function(cat) {
    if (cat.name === catName) {
      cat.vote++;
      document.getElementById(`${cat.id}`).textContent = cat.vote;
    }
  });
}
let count = 0;
let currCount = 0;
function catClick(e) {
  if (e.target.parentElement.classList.contains("imgcat")) {
    const counter = e.target.parentElement.nextElementSibling;
    const name = e.target.parentElement.previousElementSibling.textContent;
    currCount = parseInt(counter.textContent) + 1;
    counter.textContent = currCount;
    voteCat(name);
  }
}

function catClickNav(e) {
  if (e.target.parentElement.classList.contains("nav-item")) {
    let nameTextArr = e.target.textContent.split(" ");
    let nameText = nameTextArr[0];
    findCat(nameText);
  }
}
