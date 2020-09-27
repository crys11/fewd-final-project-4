console.log("JS Loaded!");

const name = "Marc";

console.log(name);

// const clickMe = document.getElementById("fake-search-bar");
// clickMe.addEventListener("click", function () {
//   console.log("clicked");
// });
const hiddenMenu = document.getElementById("fake-nav-area");
hiddenMenu.addEventListener("mouseover", showMenu);

function showMenu() {
  document.getElementById("nav-container-area").classList.add("show");
}

const shownMenu = document.getElementById("nav-container-area");
shownMenu.addEventListener("mouseleave", hideMenu);
// console.log("leave")

function hideMenu() {
  document.getElementById("nav-container-area").classList.remove("show");
}

const cont = document.getElementById("grid");

for (let i = 1; i < 596; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "square");
  div.setAttribute("id", "div" + i);
  div.style.opacity = ".5";
  div.style.zIndex = "10";
  div.addEventListener("click", function () {
    // function showSquare() {
    //   div.style.opacity = "1";
    // }
    console.log("clicked");
  });
  cont.appendChild(div);
}

// div.addEventListener("click", function ();
// console.log("clicked");
