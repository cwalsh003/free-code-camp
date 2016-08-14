var userChoice;
var compChoice;
var winner;
var board = [
  [],
  [],
  []
];
$(".topLeft").click(function() {
  if (isOpen(0, 0)) {
    $(".topLeft").text(userChoice);
    board[0][0] = userChoice;
    compMove(0, 0);
    isWin();
    isFull();
  }
});
$(".topMid").click(function() {
  if (isOpen(0, 1)) {
    $(".topMid").text(userChoice);
    board[0][1] = userChoice;
    compMove(0, 1);
    isWin();
    isFull();
  }
});
$(".topRight").click(function() {
  if (isOpen(0, 2)) {
    $(".topRight").text(userChoice);
    board[0][2] = userChoice;
    compMove(0, 2);
    isWin();
    isFull();
  }
});
$(".midLeft").click(function() {
  if (isOpen(1, 0)) {
    $(".midLeft").text(userChoice);
    board[1][0] = userChoice;
    compMove(1, 0);
    isWin();
    isFull();
  }
});

$(".midMid").click(function() {
  if (isOpen(1, 1)) {
    $(".midMid").text(userChoice);
    board[1][1] = userChoice;
    compMove(1, 1);
    isWin();
    isFull();
  }
});

$(".midRight").click(function() {
  if (isOpen(1, 2)) {
    $(".midRight").text(userChoice);
    board[1][2] = userChoice;
    compMove(1, 2);
    isWin();
    isFull();
  }
});

$(".botLeft").click(function() {
  if (isOpen(2, 0)) {
    $(".botLeft").text(userChoice);
    board[2][0] = userChoice;
    compMove(2, 0);
    isWin();
    isFull();
  }
});

$(".botMid").click(function() {
  if (isOpen(2, 1)) {
    $(".botMid").text(userChoice);
    board[2][1] = userChoice;
    compMove(2, 1);
    isWin();
    isFull();
  }
});

$(".botRight").click(function() {
  if (isOpen(2, 2)) {
    $(".botRight").text(userChoice);
    board[2][2] = userChoice;
    compMove(2, 2);
    isWin();
    isFull();
  }
});

$(document).ready(function() {
  $("#myModal").modal('show');
  $("#myModal").draggable({
    handle: ".modal-header"
  });
  $("#myModal2").draggable({
    handle: ".modal-header"
  });
});

$(".ex").click(function() {
  setUser('X');
  setComp('O');
  $("#myModal").modal('toggle');
});

$(".oh").click(function() {
  setUser('O');
  setComp('X');
  $("#myModal").modal('toggle');
});

function setUser(val) {
  userChoice = val;
}

function setComp(val) {
  compChoice = val;
}

function compMove(i, j) {
  if (!isWin() && !isFull()) {
    while (!isOpen(i, j)) {
      i = Math.floor((Math.random() * 3));
      j = Math.floor((Math.random() * 3));
    }
    board[i][j] = compChoice;
    printBoard(i, j, compChoice);
  }
}

function isOpen(i, j) {
  if (board[i][j] !== undefined) {
    return false;
  } else {
    return true;
  }
}

function printBoard(i, j, choice) {
  if (i === 0 && j === 0) {
    $('#TL').text(choice);
  } else if (i === 0 && j === 1) {
    $('#TM').text(choice);
  } else if (i === 0 && j === 2) {
    $('#TR').text(choice);
  } else if (i === 1 && j === 0) {
    $('#ML').text(choice);
  } else if (i === 1 && j === 1) {
    $('#MM').text(choice);
  } else if (i === 1 && j === 2) {
    $('#MR').text(choice);
  } else if (i === 2 && j === 0) {
    $('#BL').text(choice);
  } else if (i === 2 && j === 1) {
    $('#BM').text(choice);
  } else if (i === 2 && j === 2) {
    $('#BR').text(choice);
  }
}

function isFull() {
  var flag = true;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === undefined) {
        flag = false;
      }
    }
  }
  if (flag === true) {
    winner = "It is a tie";
    $("#myModal2").modal('show');
  }
  return flag;
}

function isWin() {
  if ((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O')) {
    findWinner(0, 0);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O')) {
    findWinner(1, 0);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') || (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')) {
    findWinner(2, 0);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O')) {
    findWinner(0, 0);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O')) {
    findWinner(0, 1);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')) {
    findWinner(0, 2);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X') || (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O')) {
    findWinner(2, 0);
    $("#myModal2").modal('show');
    return true;
  } else if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')) {
    findWinner(0, 0);
    $("#myModal2").modal('show');
    return true;
  } else {
    return false;
  }
}

function findWinner(i, j) {
  if (board[i][j] === userChoice) {
    $('#winner').text("You win");
  } else {
    winner = $('#winner').text("You lose");;
  }
}

function clearBoard() {

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      board[i][j] = undefined;
    }
  }

  $(".topLeft").text(" ");
  $(".topMid").text(" ");
  $(".topRight").text(' ');
  $(".midLeft").text(' ');
  $(".midMid").text(' ');
  $(".midRight").text(' ');
  $(".botLeft").text(' ');
  $(".botMid").text(' ');
  $(".botRight").text(' ');
}

function sleep(miliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
$('.play-again').click(function() {
  clearBoard();
  $('#myModal').modal('show');
});