import { useState } from 'react'

import './App.css'

function Square({ value, onTurnHandler }) {

  return <button className='square' onClick={onTurnHandler} >{value}</button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function setTurn(index) {
    const newSquares = squares.slice();

    const noOfPlacesFilled = squares.filter(element => element === null).length;

    if (!newSquares[index] && !calculateWinner(squares)) {

      newSquares[index] = noOfPlacesFilled % 2 == 0 ? 'O' : 'X';

    }


    setSquares(newSquares);


  }

  const winner = calculateWinner(squares);

  let status = null;

  const noOfPlacesFilled = squares.filter(element => element === null).length;

  if (winner) {

    status = "Winner:" + winner;

  }
  else {

    status = "Next turn: " + (noOfPlacesFilled % 2 == 0 ? 'O' : 'X');

  }


  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onTurnHandler={() => setTurn(0)} />
        <Square value={squares[1]} onTurnHandler={() => setTurn(1)} />
        <Square value={squares[2]} onTurnHandler={() => setTurn(2)} />

      </div>

      <div className='board-row'>
        <Square value={squares[3]} onTurnHandler={() => setTurn(3)} />
        <Square value={squares[4]} onTurnHandler={() => setTurn(4)} />
        <Square value={squares[5]} onTurnHandler={() => setTurn(5)} />
      </div>

      <div className='board-row'>
        <Square value={squares[6]} onTurnHandler={() => setTurn(6)} />
        <Square value={squares[7]} onTurnHandler={() => setTurn(7)} />
        <Square value={squares[8]} onTurnHandler={() => setTurn(8)} />
      </div>

    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

  }

  return null;
}
