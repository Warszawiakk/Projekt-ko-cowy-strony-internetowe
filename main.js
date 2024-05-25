const buttons = document.getElementsByTagName("button");
let firstButton = null;
let secondButton = null;

function randomTiles() {
  const table = document.getElementById("table");
  for (let i = table.children.length; i >= 0; i--) {
    table.appendChild(table.children[(Math.random() * i) | 0]);
  }
}
randomTiles();

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    if (!firstButton) {
      firstButton = event.target;
      firstButton.classList.remove("hidden");
    } else if (!secondButton && event.target !== firstButton) {
      secondButton = event.target;
      secondButton.classList.remove("hidden");
      checkCompatibility();
    }
    checkGameEnd();
  });
}

function checkCompatibility() {
  if (firstButton.id === secondButton.id) {
    firstButton.classList.add("disapear");
    secondButton.classList.add("disapear");
  } else {
    setTimeout(() => {
      firstButton.classList.add("hidden");
      secondButton.classList.add("hidden");
    }, 1000);
  }
  setTimeout(() => {
    firstButton = null;
    secondButton = null;
  }, 1000);
}
function checkGameEnd() {
  const allButtons = document.querySelectorAll("#table button");
  const allDisappeared = Array.from(allButtons).every((button) =>
    button.classList.contains("disapear")
  );

  if (allDisappeared) {
    const winRefreshSite = document.getElementById("WinRefreshSite");
    winRefreshSite.classList.remove("disapear");
    winRefreshSite.classList.add("WinRefreshSite");
  }
}
