let content = document.querySelector(".content");
let square = document.querySelectorAll(".square");
let reset = document.querySelector("#reset-button");
// let sides = 4
// let grid = parseInt(100 / sides);
// console.log(grid);



content.addEventListener("mouseenter", (e) => {
    if (e.target.className === "square") {


        e.target.classList.add("trail");

    }
  

}, true);


reset.addEventListener("click", newGrid);

function newGrid() {

    sides = prompt("How many boxes per side would you like?");

    makeGrid(sides);
}

console.log(sides);

function makeGrid(num) {
    content.innerHTML = "";

    for (let i = 0; i < num * num; i++) {

        let div = document.createElement("div");
        div.classList.add("square");
        div.classList.remove("trail");
        div.style.cssText = `height: calc(100% / ${sides}); width: calc(100% / ${sides})`;
        content.appendChild(div);
    }
}
