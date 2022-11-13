// JS for project

// Users
let firstPlayerName;
let secondPlayerName;
let form = document.getElementById('userForm');

// Name buttons
function playVsComputer() {
  document.getElementById('welcomeButtons').style.display = 'none';
  form.style.display = 'flex';
  document.getElementById('secondPlayerInput').style.display = 'none';
  document.getElementById('playerTwoName').style.display = 'none';
  document.getElementById('secondPlayer').required = false;
  buildGrid();
}

function playVsHuman() {
  document.getElementById('welcomeButtons').style.display = 'none';
  form.style.display = 'flex';
}

function saveUsers() {
  let data = new FormData(form);
  firstPlayerName = data.get('firstPlayer');
  secondPlayerName = data.get('secondPlayer');
  document.getElementById('playerOne').innerHTML = firstPlayerName;
  document.getElementById('playerTwo').innerHTML = secondPlayerName;
  document.getElementById('playersName').style.display = 'flex';
  document.getElementById('userForm').style.display = 'none';
  document.getElementById('bottomContainer').style.display = 'block';

  if (secondPlayerName == '') {
    startVsComputer();
  } else {
    startVsHuman();
  }
}

// Game play
function startVsComputer() {
  document.getElementById('playgroundVsComputer').style.display = 'block';
}

function startVsHuman() {
  document.getElementById('playgroundVsHuman').style.display = 'block';
}

// Playing vs computer
var grid = document.getElementById('grid');
var msg = document.getElementById('print');
var chooser = document.querySelector('form');
var mark = 'X';
var cells;
var gameOn = true;

// Click listener to each cell and computer move delay
function playerMove() {
  if (this.textContent == '') {
    this.textContent = mark;
    this.style.background = 'transparent';
    checkRow();
    switchMark();
    setTimeout(() => {
      computerMove();
    }, 300);
  }
}

// Computer makes a move
function computerMove() {
  var emptyCells = [];
  var random;

  if (gameOn == false) {
    return;
  }

  for (var i = 0; i < cells.length; i++) {
    if (cells[i].textContent == '') {
      emptyCells.push(cells[i]);
    }
  }

  cells.forEach(function (cell) {
    if (cell.textContent == '') {
      emptyCells.push(cell);
    }
  });

  // Computer marks a random empty cell
  random = Math.ceil(Math.random() * emptyCells.length) - 1;
  emptyCells[random].textContent = mark;
  emptyCells[random].style.background = 'transparent';
  checkRow();
  switchMark();
}

// Switch the player
function switchMark() {
  if (mark == 'X') {
    mark = 'O';
  } else {
    mark = 'X';
  }
}

// Pick a winner vs computer
function winner(a, b, c) {
  if (a.textContent == mark && b.textContent == mark && c.textContent == mark) {
    msg.textContent = 'Player ' + mark + ' won';
    a.classList.add('winner');
    b.classList.add('winner');
    c.classList.add('winner');
    gameOn = false;
    document.getElementById('grid').style.pointerEvents = 'none';
    return true;
  } else {
    return false;
  }
}

// Check cell combinations
function checkRow() {
  winner(
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3')
  );
  winner(
    document.getElementById('b4'),
    document.getElementById('b5'),
    document.getElementById('b6')
  );
  winner(
    document.getElementById('b7'),
    document.getElementById('b8'),
    document.getElementById('b9')
  );
  winner(
    document.getElementById('b1'),
    document.getElementById('b4'),
    document.getElementById('b7')
  );
  winner(
    document.getElementById('b2'),
    document.getElementById('b5'),
    document.getElementById('b8')
  );
  winner(
    document.getElementById('b3'),
    document.getElementById('b6'),
    document.getElementById('b9')
  );
  winner(
    document.getElementById('b1'),
    document.getElementById('b5'),
    document.getElementById('b9')
  );
  winner(
    document.getElementById('b3'),
    document.getElementById('b5'),
    document.getElementById('b7')
  );
}

// Build the grid
function buildGrid() {
  for (var i = 1; i <= 9; i++) {
    var cell = document.createElement('li');
    cell.id = 'b' + i;
    cell.addEventListener('click', playerMove, false);
    grid.appendChild(cell);
  }
  cells = Array.prototype.slice.call(grid.getElementsByTagName('li'));
}

// Playing vs player
function boxclick() {
  // DOM for all boxes
  var box1, box2, box3, box4, box5, box6, box7, box8, box9;
  box1 = document.getElementById('box1').value;
  box2 = document.getElementById('box2').value;
  box3 = document.getElementById('box3').value;
  box4 = document.getElementById('box4').value;
  box5 = document.getElementById('box5').value;
  box6 = document.getElementById('box6').value;
  box7 = document.getElementById('box7').value;
  box8 = document.getElementById('box8').value;
  box9 = document.getElementById('box9').value;

  // Player X
  if (
    (box1 == 'X' || box1 == 'X') &&
    (box2 == 'X' || box2 == 'X') &&
    (box3 == 'X' || box3 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box1 == 'X' || box1 == 'X') &&
    (box4 == 'X' || box4 == 'X') &&
    (box7 == 'X' || box7 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box7 == 'X' || box7 == 'X') &&
    (box8 == 'X' || box8 == 'X') &&
    (box9 == 'X' || box9 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
  } else if (
    (box3 == 'X' || box3 == 'X') &&
    (box6 == 'X' || box6 == 'X') &&
    (box9 == 'X' || box9 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
  } else if (
    (box1 == 'X' || box1 == 'X') &&
    (box5 == 'X' || box5 == 'X') &&
    (box9 == 'X' || box9 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
  } else if (
    (box3 == 'X' || box3 == 'X') &&
    (box5 == 'X' || box5 == 'X') &&
    (box7 == 'X' || box7 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box2 == 'X' || box2 == 'X') &&
    (box5 == 'X' || box5 == 'X') &&
    (box8 == 'X' || box8 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box4 == 'X' || box4 == 'X') &&
    (box5 == 'X' || box5 == 'X') &&
    (box6 == 'X' || box6 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  }

  // Player O turn
  else if (
    (box1 == 'O' || box1 == 'O') &&
    (box2 == 'O' || box2 == 'O') &&
    (box3 == 'O' || box3 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box1 == 'O' || box1 == 'O') &&
    (box4 == 'O' || box4 == 'O') &&
    (box7 == 'O' || box7 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box7 == 'O' || box7 == 'O') &&
    (box8 == 'O' || box8 == 'O') &&
    (box9 == 'O' || box9 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
  } else if (
    (box3 == 'O' || box3 == 'O') &&
    (box6 == 'O' || box6 == 'O') &&
    (box9 == 'O' || box9 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
  } else if (
    (box1 == 'O' || box1 == 'O') &&
    (box5 == 'O' || box5 == 'O') &&
    (box9 == 'O' || box9 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
  } else if (
    (box3 == 'O' || box3 == 'O') &&
    (box5 == 'O' || box5 == 'O') &&
    (box7 == 'O' || box7 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box2 == 'O' || box2 == 'O') &&
    (box5 == 'O' || box5 == 'O') &&
    (box8 == 'O' || box8 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box9').disabled = true;
  } else if (
    (box4 == 'O' || box4 == 'O') &&
    (box5 == 'O' || box5 == 'O') &&
    (box6 == 'O' || box6 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Player O won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
  }
  // Tie game
  else if (
    (box1 == 'X' || box1 == 'O') &&
    (box2 == 'X' || box2 == 'O') &&
    (box3 == 'X' || box3 == 'O') &&
    (box4 == 'X' || box4 == 'O') &&
    (box5 == 'X' || box5 == 'O') &&
    (box6 == 'X' || box6 == 'O') &&
    (box7 == 'X' || box7 == 'O') &&
    (box8 == 'X' || box8 == 'O') &&
    (box9 == 'X' || box9 == 'O')
  ) {
    document.getElementById('print').innerHTML = 'Match Tie';
  } else {
    // Result
    if (isX == 1) {
      document.getElementById('print').innerHTML = 'Player X Turn';
    } else {
      document.getElementById('print').innerHTML = 'Player O Turn';
    }
  }
}

// Restart the game
function restartGame() {
  location.reload();
  document.getElementById('box1').value = '';
  document.getElementById('box2').value = '';
  document.getElementById('box3').value = '';
  document.getElementById('box4').value = '';
  document.getElementById('box5').value = '';
  document.getElementById('box6').value = '';
  document.getElementById('box7').value = '';
  document.getElementById('box8').value = '';
  document.getElementById('box9').value = '';
}

// Value X or O
var isX = 1;
function playerTurn1() {
  if (isX == 1) {
    document.getElementById('box1').value = 'X';
    document.getElementById('box1').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box1').value = 'O';
    document.getElementById('box1').disabled = true;
    isX = 1;
  }
}

function playerTurn2() {
  if (isX == 1) {
    document.getElementById('box2').value = 'X';
    document.getElementById('box2').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box2').value = 'O';
    document.getElementById('box2').disabled = true;
    isX = 1;
  }
}

function playerTurn3() {
  if (isX == 1) {
    document.getElementById('box3').value = 'X';
    document.getElementById('box3').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box3').value = 'O';
    document.getElementById('box3').disabled = true;
    isX = 1;
  }
}

function playerTurn4() {
  if (isX == 1) {
    document.getElementById('box4').value = 'X';
    document.getElementById('box4').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box4').value = 'O';
    document.getElementById('box4').disabled = true;
    isX = 1;
  }
}

function playerTurn5() {
  if (isX == 1) {
    document.getElementById('box5').value = 'X';
    document.getElementById('box5').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box5').value = 'O';
    document.getElementById('box5').disabled = true;
    isX = 1;
  }
}

function playerTurn6() {
  if (isX == 1) {
    document.getElementById('box6').value = 'X';
    document.getElementById('box6').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box6').value = 'O';
    document.getElementById('box6').disabled = true;
    isX = 1;
  }
}

function playerTurn7() {
  if (isX == 1) {
    document.getElementById('box7').value = 'X';
    document.getElementById('box7').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box7').value = 'O';
    document.getElementById('box7').disabled = true;
    isX = 1;
  }
}

function playerTurn8() {
  if (isX == 1) {
    document.getElementById('box8').value = 'X';
    document.getElementById('box8').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box8').value = 'O';
    document.getElementById('box8').disabled = true;
    isX = 1;
  }
}

function playerTurn9() {
  if (isX == 1) {
    document.getElementById('box9').value = 'X';
    document.getElementById('box9').disabled = true;
    isX = 0;
  } else {
    document.getElementById('box9').value = 'O';
    document.getElementById('box9').disabled = true;
    isX = 1;
  }
}
