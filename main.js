const buttons = document.getElementsByTagName("button");

function randomTiles() {
  const table = document.getElementById("table");
  for (let i = table.children.length; i >= 0; i--) {
    table.appendChild(table.children[(Math.random() * i) | 0]);
  }
}
randomTiles();

for (button of buttons) {
  button.addEventListener("click", function (event) {
    console.log(event.target);
    event.target.classList.remove("hidden");
    count++;
  });
}
console.log(buttons);

const count = 0;

if (count > 2) {
  count = 0;
  for (button of buttons) {
    if (classList !== "hidden") {
      button.classList.add("hidden");
    }
  }
}
