var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
  ];

//keep track of whose turn it is
var turn = 1;

var winner = 0;

var butlist = [];
var boxlist = [];
var testlist = [];

var button_list = [
  "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"
];
var box_list = [
  "td0", "td1", "td2", "td3", "td4", "td5", "td6", "td7", "td8"
];
var new_button_list = [];

button_list.forEach(clickfunction);
box_list.forEach(boxfunction);

function clickfunction(currentValue) {
  butlist.push(document.getElementById(currentValue));};

function boxfunction(currentValue) {
  boxlist.push(document.getElementById(currentValue));
};

function initonclick() {
  butlist[0].onclick = function() {myfunction(butlist[0], boxlist[0], 0)};
  butlist[1].onclick = function() {myfunction(butlist[1], boxlist[1], 1)};
  butlist[2].onclick = function() {myfunction(butlist[2], boxlist[2], 2)};
  butlist[3].onclick = function() {myfunction(butlist[3], boxlist[3], 3)};
  butlist[4].onclick = function() {myfunction(butlist[4], boxlist[4], 4)};
  butlist[5].onclick = function() {myfunction(butlist[5], boxlist[5], 5)};
  butlist[6].onclick = function() {myfunction(butlist[6], boxlist[6], 6)};
  butlist[7].onclick = function() {myfunction(butlist[7], boxlist[7], 7)};
  butlist[8].onclick = function() {myfunction(butlist[8], boxlist[8], 8)};
}

initonclick();

function myfunction(button, box, x) {
  button.remove();
  if(turn % 2 == 1)
  {
    box.innerHTML = 'X';
    board[Math.floor(x / 3)][x % 3] = 1;
  }
  else {
    box.innerHTML = 'O';
    board[Math.floor(x / 3)][x % 3] = -1;
  }
  box.style.fontSize = '150px';
  box.classList.add('center');
  check();
  turn++;
};

function initcells() {
  /*
  var newbtn0 = document.createElement("BUTTON");
  var newbtn1 = document.createElement("BUTTON");
  var newbtn2 = document.createElement("BUTTON");
  */
  for(var n = 0; n < new_button_list.length; n++)
  {
    boxlist[n].appendChild(new_button_list[n]);
  }
}

function clearCells(arr){
  for(var m = 0; m < arr.length; m++)
  {
    arr[m].innerHTML = "";
    arr[m].style.fontSize = '';
    arr[m].classList.remove('center');
  }
}

function createButton(){
  for(var j = 0; j < boxlist.length; j++)
  {
    new_button_list[j] = document.createElement("BUTTON");
    new_button_list[j].setAttribute("id", button_list[j]);
  }
}

var again_button = document.getElementById('reset');
again_button.onclick = function() {
  clearCells(boxlist);
  createButton();
  initcells();
  winner = 0;
  turn = 1;
  butlist = [];
  boxlist = [];
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  button_list.forEach(clickfunction);
  box_list.forEach(boxfunction);
  initonclick();
}

//Check if there is a winner
var check = function()
{
  for(var i = 0; i < 3; i++)
  {
    var rowSum = 0;
    for(var j = 0; j < 3; j++)
    {
      rowSum += board[i][j];
    }
    if(rowSum == 3)
    {
      alert("X Wins!");
      winner = 1;
    }
    else if(rowSum == -3)
    {
      alert("O Wins!");
      winner = 1;
    }
  }

  for(var i = 0; i < 3; i++)
  {
    var colSum = 0;
    for(var j = 0; j < 3; j++)
    {
      colSum += board[j][i];
    }
    if(colSum == 3)
    {
      alert("X Wins!");
      winner = 1;
    }
    else if(colSum == -3)
    {
      alert("O Wins!");
      winner = 1;
    }
  }

  if(board[0][0] + board[1][1] + board[2][2] == 3)
  {
    alert("X Wins!");
    winner = 1;
  }
  else if(board[0][0] + board[1][1] + board[2][2] == -3)
  {
    alert("O Wins!");
    winner = 1;
  }

  if(board[2][0] + board[1][1] + board[0][2] == 3)
  {
    alert("X Wins!");
    winner = 1;
  }
  else if(board[2][0] + board[1][1] + board[0][2] == -3)
  {
    alert("O Wins!");
    winner = 1;
  }
  if((turn == 9) & (winner == 0))
  {
    alert("It's a tie!");
  }
  if(winner == 1)
  {
    butlist[0].remove();
    butlist[1].remove();
    butlist[2].remove();
    butlist[3].remove();
    butlist[4].remove();
    butlist[5].remove();
    butlist[6].remove();
    butlist[7].remove();
    butlist[8].remove();
  }
}
