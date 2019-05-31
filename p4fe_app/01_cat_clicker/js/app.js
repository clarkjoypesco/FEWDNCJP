const data = [
  {
    name: "Angela"
  },
  {
    name: "Cathy"
  }
];

//Listen for cancel
document.querySelector("#content").addEventListener("click", catClick);

const cats = data;
let html = "";
cats.forEach(function(cat, index) {
  html += `
            
      <div class="col-md-6 mx-auto py-5 text-center p-2">
      <div class="cat">
        <h3 class="catsname">${cat.name}</h3>
    
        <div class="imgcat">
          <img src="img/cat${index}.gif" alt="cat" class="rounded img-fluid" />
        </div>
    
        <h4>0</h4>
      </div>
    </div>      
            `;
});
document.getElementById("content").innerHTML = html;

let count = 0;
let currCount = 0;
function catClick(e) {
  if (e.target.parentElement.classList.contains("imgcat")) {
    const counter = e.target.parentElement.nextElementSibling;
    currCount = parseInt(counter.textContent) + 1;
    counter.textContent = currCount;
    console.log(currCount);
  }
}
