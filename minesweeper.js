      document.addEventListener('DOMContentLoaded', startGame)
      // board object is defined with board object properties 
      //CLICK Event Listeners
      document.addEventListener("click", checkForWin)
      //call checkForWin as left mouse button is clicked
      document.addEventListener("contextmenu", checkForWin)
      // call checkForWin as right mouse button is clicked
  
      let board = {}

function startGame() {
  //generateBoard()

  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  } //function startGame for loop. loop through the contents of board.cells -  an array of objects.
  //function gathers together the array code into a function to generate random placement of bombs
  // Don't remove this function call: it makes the game work!

  let boardGameCells = document.getElementsByName(boardGame)
  for (let i = 0; i < boardGameCells.length; i++) {
    boardGameCells[i].addEventListener('click')
  }
  lib.initBoard()
}

function generateBoard() {
  board.cells = []
 boardGameCells = Number(document.querySelector('input[name="boardGame"]:checked').value)
  for (let i = 0; i < boardGameCells; i++) {
    for (let x = 0; x < boardGameCells; x++) {
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
 console.log(generateBoard)}

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










//keep playing on if cell not marked
//FOR each cell check both .isMINE and .isMarked are true
//Return to exit out if unmarked mine
//The ! bang operator is placed to tell the compiler to temporarily relax the "not null" constraint that it might otherwise demand. It says to the compiler: "As the developer, I know better than you that this variable cannot be null right now".
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')
//___________________________________________________________________________
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.





//original array code ~ kept for reference
//cells: [{
//  row: 0,
//    col: 0,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 0,
//    col: 1,
//    isMine: true,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 0,
//    col: 2,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 0,
//    col: 3,
//    isMine: true,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },

// {
//    row: 1,
//    col: 0,
//  isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 1,
//    col: 1,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 1,
//    col: 2,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 1,
//    col: 3,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//},

//  {
//    row: 2,
//    col: 0,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 2,
//    col: 1,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 2,
//    col: 2,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 2,
//    col: 3,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },

//  {
//    row: 3,
//    col: 0,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 3,
//    col: 1,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 3,
//    col: 2,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  },
//  {
//    row: 3,
//    col: 3,
//    isMine: false,
//    isMarked: false,
//    hidden: true,
//    surroundingMines: 2,
//  }
// ]
//}