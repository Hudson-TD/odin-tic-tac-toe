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
    this.$gameboard.addEventListener("click", this.handleCellClicks);
  },
  // Update DOM with P1 marker
  insertPlayerOne: function () {
    // find target (event), update innerText to display marker
  },
  // Update DOM with P2 marker
  insertPlayerTwo: function () {
    // find target (event), update innerText to display marker
  },
  handleCellClicks: function (event) {
    let selectedCell = event.target;
    console.log(selectedCell);
  },
  //dev function to test DOM targeting - delete when no-longer needed
  highlight: function (cell) {
    if (selectedTd) {
      // remove the existing highlight if any
      selectedTd.classList.remove("highlight");
    }
    selectedTd = td;
    selectedTd.classList.add("highlight"); // highlight the new td
  },
};

gameboard.init();

const players = {
  players: [],
  createPlayerOne: function (name) {
    this.players.push(name);
  },
};
