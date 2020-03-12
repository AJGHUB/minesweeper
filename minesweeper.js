document.addEventListener('DOMContentLoaded', startGame)
      // board object is defined with board object properties 
      
  
let board = {}


function startGame() {
    generateBoard()
  // debugger
  //generateBoard()
    //CLICK Event Listeners
    document.addEventListener("click", checkForWin)
    //call checkForWin as left mouse button is clicked
    document.addEventListener("contextmenu", checkForWin)
// call checkForWin as right mouse button is clicked
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  } //function startGame for loop. loop through the contents of board.cells -  an array of objects.
  //function gathers together the array code into a function to generate random placement of bombs
  // Don't remove this function call: it makes the game work!

  let boardGameCells = document.getElementsByName('boardGame')
  for (let i = 0; i < boardGameCells.length; i++) {
    boardGameCells[i].addEventListener('click')
  }
  lib.initBoard()
}

function generateBoard() {
  board.cells = []
//  boardGameCells = Number(document.querySelector('input[name="boardGameCells"]:checked').value)
  for (let i = 0; i < 6; i++) {
    for (let x = 0; x < 6; x++) {
      board.cells.push(
        {
        row: i,
        col: x,
        isMine: Math.round(Math.random()),
        isMarked: false,
        hidden: true,
     })
    }
  }
}

//_______________________________________________________________________
// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin() {
  let winCondition = 0;
  for (let i = 0; i < board.cells.length; i++) {
    //Loop through the game board cells > check where the hidden cells are true
    if (board.cells[i].isMine === false && board.cells[i].isMarked === false) {
      winCondition++;
    } // checks for mine on board cell 
    else if (!board.cells[i].isMine === true && !board.cells[i].hidden === true) {
      winCount++;
    }
    if (winCondition == board.cells.length) {
      lib.displayMessage('You swept the minefield now safe to cross!')
    }
  }
} //checks if cell is marked

function countSurroundingMines(cell) {
  //define count surrounding mines
  let count = 0;
  //starts a counter at 0 
  let surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (let i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    } //creates var populates from the board properties of cell row and column
  }
  return count;
} //returns the end count amount


//function resetButton() {
  //board = {cells: []}
  //createBoard()
  //document.getElementsByClassName('board')[0].innerHTML = '';
  //startGame()
//}
