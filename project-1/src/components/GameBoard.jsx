import React, {useState} from 'react'
import PropTypes from 'prop-types'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard(props) {
    let gameBoard = initialGameBoard;
    for(const turn of props.turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    return (
        <ol id={'game-board'}>
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => props.onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}

GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    turns: PropTypes.array.isRequired,
}
export default GameBoard
