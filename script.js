let selectedCell;

const gameboard = {
  gameboard: ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  // Initialize gameboard
  init: function () {
    this.cacheDom();
    this.initEventListeners();
  },
  // DOM element targets
  cacheDom: function () {
    this.$gameboard = document.getElementById("gameboard");
    this.$restartBtn = document.getElementById("restartButton");
  },
  initEventListeners: function () {
    this.$gameboard.addEventListener("click", this.highlightCell);
  },
  // Update DOM with P1 marker
  insertPlayerOne: function () {
    // find target (event), update innerText to display marker
  },
  // Update DOM with P2 marker
  insertPlayerTwo: function () {
    // find target (event), update innerText to display marker
  },
  //dev function to test DOM targeting - delete when no-longer needed
  highlightCell: function (event) {
    let selectedCell = event.target;
    selectedCell.classList.contains("highlight")
      ? selectedCell.classList.remove("highlight")
      : selectedCell.classList.add("highlight");
  },
};

gameboard.init();

const players = {
  players: [],
  createPlayerOne: function (name) {
    this.players.push(name);
  },
};
