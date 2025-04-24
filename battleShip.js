// To do list
// Count the number of ship hits and sinks
// First, get the full coordinates of the whole ship in an array
// Loop through the coordinates to identify matches
// Increment the count of hits and sinks


// shipCoords function to get all coordinates of a ship
function shipCoords(start, end) {
  const shipCells = [];
  const colStart = start.charCodeAt(0);
  const colEnd = end.charCodeAt(0);
  const rowStart = parseInt(start[1]);
  const rowEnd = parseInt(end[1]);

  for (
    let col = Math.min(colStart, colEnd);
    col <= Math.max(colStart, colEnd);
    col++
  ) {
    for (
      let row = Math.min(rowStart, rowEnd);
      row <= Math.max(rowStart, rowEnd);
      row++
    ) {
      shipCells.push(String.fromCharCode(col) + row);
    }
  }
  return shipCells;
}

function countHitsNSinks(ships, guesses) {
    // Initialize the count of hits and sinks
  let hits = 0;
  let sinks = 0;

  for (const [start, end] of ships) {
    const shipCells = shipCoords(start, end);
    let shipHits = 0;

    for (const cell of shipCells) {
      if (guesses.includes(cell)) {
        shipHits += 1; //Update count
      }
    }

    hits += shipHits;
    if (shipHits === shipCells.length) {
      sinks += 1; //Update count
    }
  }

  return [hits, sinks];
}

// Example test
const ships = [
  ["E1", "E3"],
  ["A4", "C4"],
];
const guesses = ["A4", "B4", "C4", "D3", "D2", "E1"];

console.log(countHitsNSinks(ships, guesses)); // Output should be: [4, 1]
