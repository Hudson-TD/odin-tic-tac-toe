// Create player objects
function createPlayer(name) {
  return {
    name,
    score: 0,
  };
}

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
    if (event.target.getAttribute("id") === "player-one-input") {
      playerCreation.inputOne = `${this.input}`;
    } else {
      playerCreation.inputTwo = `${this.input}`;
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

      var submitButtonElement = event.target;
      var playerInfoForm = submitButtonElement.parentElement;
      playerInfoForm.classList.add("hidden");
      gameBoard.reveal();
      gameController.newGame();
    }
  },
};

const gameBoard = {
  // Initialize gameboard
  init: function () {
    this.cacheDom();
    this.initEventListeners();
  },
  // DOM element targets
  cacheDom: function () {
    this.gameboard = document.getElementById("gameboard");
    this.allCells = document.querySelectorAll(".cell");
    this.gameDisplay = document.getElementById("game-display-container");
    this.resetBtn = document.getElementById("resetBtn");
    this.playerOneName = document.getElementById("player-one-name");
    this.playerTwoName = document.getElementById("player-two-name");
    this.playerOneScore = document.getElementById("player-one-score");
    this.playerTwoScore = document.getElementById("player-two-score");
    this.playerOneActive = document.getElementById("player-one-active");
    this.playerTwoActive = document.getElementById("player-two-active");
  },
  initEventListeners: function () {
    this.gameboard.addEventListener("click", gameController.claimCell);
    this.resetBtn.addEventListener("click", gameBoard.handleReset);
  },
  handleReset: function () {
    window.location.reload();
  },
  reveal: function () {
    this.playerOneName.innerText = playerCreation.players[0].name;
    this.playerTwoName.innerText = playerCreation.players[1].name;
    this.gameDisplay.classList.remove("hidden");
    gameController.displayActivePlayer();
  },
};

const gameController = {
  turn: null,
  startingTurn: null,
  playerOneSelections: [],
  playerTwoSelections: [],
  selectedCell: this.selectedCell,
  claimCell: function (event) {
    let selectedCell = event.target;
    if (selectedCell.classList.contains("claimed")) return;

    selectedCell.classList.add("claimed");

    if (gameController.turn % 2 === 1) {
      selectedCell.innerText = "X";
      selectedCell.classList.add("X");
      gameController.updateChoiceArr(selectedCell);
    } else if (gameController.turn % 2 === 0) {
      selectedCell.innerText = "O";
      selectedCell.classList.add("O");
      gameController.updateChoiceArr(selectedCell);
    }
    gameController.checkForWinner(
      gameController.playerOneSelections,
      gameController.playerTwoSelections
    );
    gameController.nextTurn();
  },
  updateChoiceArr: function (cell) {
    let choice = cell.dataset.cell;

    if (gameController.turn % 2 === 1) {
      this.playerOneSelections.push(choice);
    } else if (gameController.turn % 2 === 0) {
      this.playerTwoSelections.push(choice);
    }
  },
  matchStarter: function () {
    const randomValue = Math.random();

    if (randomValue < 0.5) {
      return 1;
    } else {
      return 2;
    }
  },
  nextTurn: function () {
    gameController.turn++;
    this.displayActivePlayer();
    console.log(this.turn);
  },
  clearCells: function () {
    gameBoard.allCells.forEach((cell) => {
      if (cell.classList.contains("claimed")) {
        cell.innerText = "";
        cell.classList.remove("claimed");
        cell.classList.remove("X");
        cell.classList.remove("O");
      }
    });
  },
  displayActivePlayer: function () {
    if (gameController.turn % 2 === 1) {
      gameBoard.playerOneActive.classList.remove("transparent");
      gameBoard.playerTwoActive.classList.add("transparent");
    } else {
      gameBoard.playerTwoActive.classList.remove("transparent");
      gameBoard.playerOneActive.classList.add("transparent");
    }
  },
  newGame: function () {
    let flowKey = this.matchStarter();
    gameController.clearCells();
    this.playerOneSelections = [];
    this.playerTwoSelections = [];
    this.turn = flowKey;
    this.startingTurn = flowKey;
    this.displayActivePlayer();
    console.log(`Starting Turn: ${this.turn}`);
  },
  checkForWinner: function (playerArrOne, playerArrTwo) {
    const winningArrs = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["1", "5", "9"],
      ["3", "5", "7"],
    ];

    for (let i = 0; i < winningArrs.length; i++) {
      if (winningArrs[i].every((value) => playerArrOne.includes(value))) {
        playerCreation.players[0].score++;
        gameBoard.playerOneScore.innerText = `Score: ${playerCreation.players[0].score}`;
        gameController.newGame();
      } else if (
        winningArrs[i].every((value) => playerArrTwo.includes(value))
      ) {
        playerCreation.players[1].score++;
        gameBoard.playerTwoScore.innerText = `Score: ${playerCreation.players[1].score}`;
        gameController.newGame();
      } else if (
        gameController.startingTurn === 1 &&
        gameController.turn === 10
      ) {
        gameController.newGame();
      } else if (
        gameController.startingTurn === 2 &&
        gameController.turn === 11
      ) {
        gameController.newGame();
      }
    }
  },
};

playerCreation.init();
gameBoard.init();
