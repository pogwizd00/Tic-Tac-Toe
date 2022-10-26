const Player1 = {
  name: "Player1",
  area: "X",
  wins: 0,
  loses: 0,
  draws: 0,
};
const Player2 = {
  name: "Player2",
  area: "O",
  wins: 0,
  loses: 0,
  draws: 0,
};
const areaOfPlayers = [Player1, Player2];

// ------ VARIABLES -------
let games = 0;

const areas = document.querySelectorAll(".area");
const buttonDraw = document.querySelector(".draw");
let whoWonDraw = document.querySelector(".whoStart .whoWon");
const allGames = document.querySelector(".allGames .games");
const player1Wins = document.querySelector(".player1 .wins");
const player1Loses = document.querySelector(".player1 .loses");
const player1Draws = document.querySelector(".player1 .draws");
const player2Wins = document.querySelector(".player2 .wins");
const player2Loses = document.querySelector(".player2 .loses");
const player2Draws = document.querySelector(".player2 .draws");
let whoWonGame = document.querySelector(".whoWonGame span");
var XorO = areaOfPlayers[0].area; // i have to declare it like "var" in this place but in function it will be change it if will be necessery
let checkdraw = false;

// ----- FUNCTIONS ---------

const cleanFields = () => {
  areas.forEach((area) => {
    area.textContent = "";
  });
  whoWonDraw.textContent = "";
  checkdraw = false;
};

function letsDraw() {
  checkdraw = true;
  const draw = Math.floor(Math.random() * areaOfPlayers.length);
  XorO = areaOfPlayers[draw].area;
  // console.log(XorO);
  whoWonDraw.textContent = `${areaOfPlayers[draw].name} starts and his area is ${areaOfPlayers[draw].area}`;
  games++;
  allGames.textContent = games;

  // return areaOfPlayers;
}


// ------------ CONDITIONS -----------
let checkingFields = () => {
  if (
    (areas[0].textContent === "X" &&
      areas[1].textContent === "X" &&
      areas[2].textContent === "X") ||
    (areas[3].textContent === "X" &&
      areas[4].textContent === "X" &&
      areas[5].textContent === "X") ||
    (areas[6].textContent === "X" &&
      areas[7].textContent === "X" &&
      areas[8].textContent === "X") ||
    (areas[0].textContent === "X" &&
      areas[3].textContent === "X" &&
      areas[6].textContent === "X") ||
    (areas[1].textContent === "X" &&
      areas[4].textContent === "X" &&
      areas[7].textContent === "X") ||
    (areas[2].textContent === "X" &&
      areas[5].textContent === "X" &&
      areas[8].textContent === "X") ||
    (areas[0].textContent === "X" &&
      areas[4].textContent === "X" &&
      areas[8].textContent === "X") ||
    (areas[2].textContent === "X" &&
      areas[4].textContent === "X" &&
      areas[6].textContent === "X")
  ) {
    Player1.wins++;
    Player2.loses++;
    player1Wins.textContent = Player1.wins;
    player2Loses.textContent = Player2.loses;
    whoWonGame.textContent = `Won Player 1`;
    setTimeout(cleanFields, 2000);
  } else if (
    (areas[0].textContent === "O" &&
      areas[1].textContent === "O" &&
      areas[2].textContent === "O") ||
    (areas[3].textContent === "O" &&
      areas[4].textContent === "O" &&
      areas[5].textContent === "O") ||
    (areas[6].textContent === "O" &&
      areas[7].textContent === "O" &&
      areas[8].textContent === "O") ||
    (areas[0].textContent === "O" &&
      areas[3].textContent === "O" &&
      areas[6].textContent === "O") ||
    (areas[1].textContent === "O" &&
      areas[4].textContent === "O" &&
      areas[7].textContent === "O") ||
    (areas[2].textContent === "O" &&
      areas[5].textContent === "O" &&
      areas[8].textContent === "O") ||
    (areas[0].textContent === "O" &&
      areas[4].textContent === "O" &&
      areas[8].textContent === "O") ||
    (areas[2].textContent === "O" &&
      areas[4].textContent === "O" &&
      areas[6].textContent === "O")
  ) {
    Player2.wins++;
    Player1.loses++;
    player2Wins.textContent = Player2.wins;
    player1Loses.textContent = Player1.loses;
    whoWonGame.textContent = `Won Player 2`;
    setTimeout(cleanFields, 2000);
  } else {
    let fullfields = 0;
    areas.forEach((area) => {
      if (area.textContent !== "") {
        fullfields++;
        if (fullfields === 9) {
          whoWonGame.textContent = "DRAW :((";
          Player1.draws++;
          Player2.draws++;
          player1Draws.textContent = Player1.draws;
          player2Draws.textContent = Player2.draws;
          setTimeout(cleanFields, 2000);
        }
      }
    });
  }
};
// console.log(areas[0].);
// -------- CHECKING FIELDS AND FULL OF FIELDS ----------
let counter = 0;
areas.forEach(function (area, index) {
  area.addEventListener("click", function () {
    // full of fields
    if (checkdraw == true) {
      if (area.innerHTML === "X" || area.innerHTML === "O") {
        alert("pls choose empty field");
      } else if (XorO === "X") {
        area.textContent = XorO;
        XorO = "O";
      } else if (XorO === "O") {
        area.textContent = XorO;
        XorO = "X";
      }
      whoWonTheGame = checkingFields();

      // console.log(this.innerHTML);
    } else {
      alert("First you have to draw who will start");
    }
  });
});

// Draw a player

buttonDraw.addEventListener("click", letsDraw);


