const docElements = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
];
const winner = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
// Add Click event to every input
function addEvents() {
  for (item of docElements) {
    item.addEventListener("click", main);
  }
}
addEvents();
function setToDefault() {
  clicks = 0;
  flag = true;
  X = [];
  O = [];
}
let player1 = prompt("Enter Player 1 : ");
let player2 = prompt("Enter Player 2 : ");
if (player1.length != 0) {
  document.querySelector("#name1").innerHTML = `${player1}`;
}
if (player2.length != 0) {
  document.querySelector("#name2").innerHTML = `${player2}`;
}
let player1Points = 0;
let player2Points = 0;
let clicks = 0;
let flag = true;
let X = new Array();
let O = new Array();
let setX = (elem) => {
  elem.setAttribute("placeholder", "X");
};
let setO = (elem) => {
  elem.setAttribute("placeholder", "O");
};

// main function 
function main() {
  clicks++;
  var id = this.getAttribute("id");
  this.removeEventListener("click", main);
  if (flag) {
    X.push(Number(id));
    setX(this);
    flag = false;
    if (clicks > 4) {
      whoWin();
    }
  } else {
    O.push(Number(id));
    setO(this);
    flag = true;
    if (clicks > 4) {
      whoWin();
    }
  }
  if (clicks == 9) {
    if (confirm("Game Tie! Want to Restart")) {
      RESET();
    }
  }
}

function whoWin() {
  function ifXWin() {
    for (item of winner) {
      let t = 0;
      for (let i = 0; i < 3; i++) {
        if (X.includes(item[i])) {
          t++;
        }
      }
      if (t == 3) {
        alert(`${player1} is winner`);
        player1Points++;
        document.querySelector("#Xpoints").innerText = `${player1Points}`;
        RESET();
        break;
      }
    }
  }

  function ifOWin() {
    for (item of winner) {
      let t = 0;
      for (let i = 0; i < 3; i++) {
        if (O.includes(item[i])) {
          t++;
        }
      }
      if (t == 3) {
        alert(`${player2} is winner`);
        player2Points++;
        document.querySelector("#Opoints").innerText = `${player2Points}`;
        RESET();
        break;
      }
    }
  }

  ifXWin();
  ifOWin();
}

// RESET button functionality
function RESET() {
  for (item of docElements) {
    item.removeAttribute("placeholder");
  }
  setToDefault();
  addEvents();
}
document.querySelector("button").addEventListener("click", () => {
  RESET();
});
