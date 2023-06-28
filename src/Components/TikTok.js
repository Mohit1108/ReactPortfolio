import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        break;
      }
    }   

    if (newBoard.filter(square => square === null).length === 0 && !winner) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => (
    <button className="btn  btnTic square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  let status;
  if (winner) {
    status = winner === 'Draw' ? 'It\'s a draw!' : `Player ${winner} wins!`;
  } else {
    status = `Next player Turn: ${isXNext ? 'X' : 'O'}`;
  }

  return (

    <div className="">
<h2 className='text-center'>Tik Tic Toe Game</h2>
        {winner ? <><div className='text-center'>{status}</div></> :
        <>
        
        <div className='text-center'>{status}</div>

             <div className="game-board">
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>     </>
        }
         
          <div className="text-center mb-4">
        
        <button className="btn btn-secondary mt-3 resetBTn" onClick={resetGame}>Restart</button>
      </div>


    </div>
  );
};

export default TicTacToe;
