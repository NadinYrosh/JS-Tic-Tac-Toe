//////////////////////////////////////////////////////////////////////////////////
// Tic Tac Toe
//
// The board is represented as a 3x3 array of single character strings, with '.' 
// for blank, 'x' for the first player, and 'o' for the second player.
//
// In the code, 'r' stands for a row index and 'c' stands for the column index.
// The first (0th) row is at the top and the first (0th) column is on the left.

var mkBoard = function(){
	var board = [];
	for (var r = 0; r < 3; ++r) {
		var row = []; 
		for (var c = 0; c < 3; ++c) {
			row.push('.');
		};
		board.push(row); 
	}; 
	return board; 
}
var renderBoard = function(board) { 
	for (var r = 0; r < 3; ++r) { 
		console.log(''.concat(...(board[r]))); 
	}
	console.log(); // blank line
}
var play = function(board,r,c,player) { 
	board[r][c] = player; 
	 //you can make mooves outside of board range, think of it;
}

var isValidMove = function(board, r, c) {
	if (board[r][c] === "x" || board[r][c] === "o") {
		console.log("Invalid moove");
	} else {console.log("Made a moove")}
}

var checkForWin = function(board, r, c, player, xWonByFillingARow){

}

var checkOneRow = function(board, r, player) {
  for (var c = 0; c < 3; c++) {
    if( board[r][c] !== player) {
    	return false;
    }
  }
  return true;
}

// check every row for 'player' that won. Loop through all 3 rows. Returns true
// when have 3 'player' in a row.
var checkForAllRows = function(board, player) {
	for (var row = 0; row < 3; row++) {
		if(checkOneRow(board, row, player)){
			return true;
		}
	}
	return false ;
}

var checkOneColumn = function(board, c, player) {
  for (var r = 0; r < 3; r++) {
    if( board[r][c] !== player) {
    	return false;
    }
  }
  return true;
}

// check for all of the columns for a winner. Returns true
// when have 3 'player' in a row.
var checkForAllColumns = function(board, player) {
	for (var column = 0; column < 3; column++) {
		if(checkOneColumn(board, column, player)){
			return true;
		}
	}
	return false ;
}



var checkDiagonal00 = function(board, player) {
	for( var d = 0; d < 3; d++ ) {
		if(board[d][d] !== player) {
			return false;
		}		
	}
	return true;
}

var checkDiagonal20 = function(board, player) {
	for( var d = 0; d < 3; d++ ) {
		if(board[2-d][d] !== player) {
			return false;
		}		
	}
	return true;
}

//Example:
var board = mkBoard();
var test = function(code) {
	console.log("Testing '" + code+"':" );
	console.log(eval(code));
	renderBoard(board);
}


renderBoard(board);
play(board,0,0,'x');
renderBoard(board);
play(board,1,1,'x');
renderBoard(board);

play(board,2,0,'x');
test("checkDiagonal20(board, 'x')");

play(board,0,2,'x');
test("checkDiagonal20(board, 'x')");

play(board, 1, 0, '0');
test("checkForAllColumns(board, 'x')");

// test("checkDiagonal00(board, 'x')");


// play(board,2,2,'x');
// renderBoard(board);
// test("checkOneRow(board, 2, 'x')");
// test("checkForAllRows(board, 'x')");

// play(board,2,2,'x');
// play(board,2,1,'x');
// play(board,2,0,'x');
// test("checkOneRow(board, 2, 'x')");
// test("checkForAllRows(board, 'x')");

// test("checkDiagonal(board, 'x')");






