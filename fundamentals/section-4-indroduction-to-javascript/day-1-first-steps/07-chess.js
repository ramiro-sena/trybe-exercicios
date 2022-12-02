
function getMoves(piece) {

  switch (piece.toLowerCase()) {
    case "king":
      return "one square in any direction";
    case "queen":
      return "diagonals and straight"
    case "bishop":
      return "diagonals";
    case "knight":
      return "3x1 L shape";
    case "rook":
      return "horizontal and vertical";
    case "pawn":
      return `
      One square forward. 
      If first time moving that pawn it can move up to 2 squares.
      Capture moving one position diagonally forward if there is a opponent's piece in that square.
      El passant rule: If an opponent's pawn advances two squares and reach a position in the same 
      row and adjacent column to your pawn, you can capture that pawn moving yours one square 
      diagonally into that column immediately after that turn. 
       
      `
  }

}

console.log(getMoves("pawn"))