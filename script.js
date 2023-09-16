// const players = {
//   players: [],

//   // Initialize gameboard
//   init: function () {
//     this.cacheDom();
//     this.initEventListeners();
//   },
//   // DOM element targets
//   cacheDom: function () {
//     this.playerOneInput = document.getElementById("player-one-input").value;
//     this.playerTwoInput = document.getElementById("player-two-input").value;
//     this.formSubmitBtn = document.getElementById("form-submit-button");
//   },
//   initEventListeners: function () {
//     this.formSubmitBtn.addEventListener("click", this.handleSubmit);
//   },
//   handleSubmit: function (event) {
//     event.preventDefault();
//     this.playerOneName = this.playerOneInput.value;
//     this.playerTwoName = this.playerTwoInput.value;
//     console.log(this.playerOneName);
//     console.log(this.playerTwoName);
//     // var target = event.target;
//     // var parent = target.parentElement;
//     // parent.classList.add("hidden");
//   },
// };
// players.init();

function createPlayer(name) {
  return {
    name,
    score: 0,
  };
}

const roundCounter = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const playerCreation = {
  players: [],
  inputOne: "",
  inputTwo: "",
  init: function () {
    this.playerCreationDom();
    this.initEventListeners();
  },
  playerCreationDom: function () {
    this.playerOneInput = document.getElementById("player-one-input");
    this.playerTwoInput = document.getElementById("player-two-input");
    this.formSubmitBtn = document.getElementById("form-submit-button");
  },
  initEventListeners: function () {
    this.playerOneInput.addEventListener("input", this.handleInputValue);
    this.playerTwoInput.addEventListener("input", this.handleInputValue);
    this.formSubmitBtn.addEventListener("click", this.handleSubmit);
  },
  handleInputValue: function (event) {
    this.input = event.target.value;
    console.log(this.input);
    if (event.target.getAttribute("id") === "player-one-input") {
      playerCreation.inputOne = this.input;
    } else {
      playerCreation.inputTwo = this.input;
    }
  },
  handleSubmit: function (event) {
    event.preventDefault();

    let playerOne = createPlayer(playerCreation.inputOne);
    playerCreation.players.push(playerOne);
    let playerTwo = createPlayer(playerCreation.inputTwo);
    playerCreation.players.push(playerTwo);

    console.log(playerCreation.players);

    // var target = event.target;
    // var parent = target.parentElement;
    // parent.classList.add("hidden");
  },
};

playerCreation.init();

const gameBoard = {
  gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"],
  selectedCell: this.selectedCell,
  // Initialize gameboard
  init: function () {
    this.cacheDom();
    this.initEventListeners();
  },
  // DOM element targets
  cacheDom: function () {
    this.gameboard = document.getElementById("gameboard");
    this.restartBtn = document.getElementById("restartButton");
  },
  initEventListeners: function () {
    this.gameboard.addEventListener("click", this.highlightCell);
  },
  //dev function to test DOM targeting - delete when no-longer needed
  highlightCell: function (event) {
    let selectedCell = event.target;
    selectedCell.classList.contains("highlight")
      ? selectedCell.classList.remove("highlight")
      : selectedCell.classList.add("highlight");
  },
};

gameBoard.init();

const gameLogic = {
  // Update DOM with P1 marker
  insertPlayerOne: function () {
    // find target (event), update innerText to display marker
  },
  // Update DOM with P2 marker
  insertPlayerTwo: function () {
    // find target (event), update innerText to display marker
  },
};
