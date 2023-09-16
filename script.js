// Create player objects
function createPlayer(name) {
  return {
    name,
    score: 0,
  };
}
// Tracking turn via private variable
const roundCounter = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const playerCreation = {
  players: [],
  inputOne: null,
  inputTwo: null,
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

    if (playerCreation.inputOne === null || playerCreation.inputTwo === null) {
      window.alert("Please provide a name for each player");
      return;
    } else {
      let playerOne = createPlayer(playerCreation.inputOne);
      playerCreation.players.push(playerOne);
      let playerTwo = createPlayer(playerCreation.inputTwo);
      playerCreation.players.push(playerTwo);
      console.log(playerCreation.players);

      var submitButtonElement = event.target;
      var playerInfoForm = submitButtonElement.parentElement;
      playerInfoForm.classList.add("hidden");
      gameBoard.reveal();
    }
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
    this.gameDisplay = document.getElementById("game-display-container");
    this.restartBtn = document.getElementById("restartButton");
    this.playerOneName = document.getElementById("player-one-name");
    this.playerTwoName = document.getElementById("player-two-name");
  },
  initEventListeners: function () {
    this.gameboard.addEventListener("click", this.highlightCell);
  },
  reveal: function () {
    this.playerOneName.innerText = playerCreation.players[0].name;
    this.playerTwoName.innerText = playerCreation.players[1].name;
    this.gameDisplay.classList.remove("hidden");
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
