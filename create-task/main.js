import './style.css'

let DOMSelectors = {
  column1: document.querySelector("#column1"),
  column2: document.querySelector("#column2"),
  column3: document.querySelector("#column3"),
  column4: document.querySelector("#column4"),
  column5: document.querySelector("#column5"),
  column6: document.querySelector("#column6"),
  column7: document.querySelector("#column7"),
}

let board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]

let turn = "Blue"



for(let i = 1; i < 8; i++){
  DOMSelectors[`column${i}`].addEventListener("click", ()=> {
    addColor(i)
  })
}

function addColor(num) {
  if (checkWinner()) {
    return
  }
  for(let i = 0; i < 6 ; i++) {
    if (board[num - 1][i] === 0) {
      board[num - 1][i] = turn;
      document.querySelector(`#c${num}r${i + 1}`).style.backgroundColor = turn
      console.log(checkWinner())
      if (checkWinner()) {  
        document.querySelector(".popup").style.display = "flex"
        document.querySelector("#text").innerHTML = `${turn} won.`
        eventListen();
      } else {
        if (turn === "Blue") {
        turn = "Red"
      } else {
        turn = "Blue"
      }
      }
      
      console.log(board)
      break;
    }
  }
  if (!board[0].includes(0) && 
      !board[1].includes(0) && 
      !board[2].includes(0) && 
      !board[3].includes(0) && 
      !board[4].includes(0) && 
      !board[5].includes(0) && 
      !board[6].includes(0)) {
        document.querySelector(".popup").style.display = "flex"
        document.querySelector("#text").innerHTML = `Draw.`
        eventListen();
      }
 
}

function checkWinner() {
  console.log('poop', board);
  // Check horizontal
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === turn &&
          board[i][j+1] === turn &&
          board[i][j+2] === turn &&
          board[i][j+3] === turn) {
        return true;
      }
    }
  }

  // Check vertical
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      if (board[i][j] === turn &&
          board[i+1][j] === turn &&
          board[i+2][j] === turn &&
          board[i+3][j] === turn) {
        return true;
      }
    }
  }

  // Check diagonal (top-left to bottom-right)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === turn &&
          board[i+1][j+1] === turn &&
          board[i+2][j+2] === turn &&
          board[i+3][j+3] === turn) {
        return true;
      }
    }
  }

  // Check diagonal (bottom-left to top-right)
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === turn &&
          board[i-1][j+1] === turn &&
          board[i-2][j+2] === turn &&
          board[i-3][j+3] === turn) {
        return true;
      }
    }
  }

  // No winner
  return false;
}
function eventListen() {
  document.querySelector("button").addEventListener("click", ()=> {
  board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
  document.querySelector(".popup").style.display = "none"  
  for(let i = 1; i < 8; i++) {
    for(let j = 1; j < 7; j++) {
      document.querySelector(`#c${i}r${j}`).style.backgroundColor = "white"
    }
  }
})
}