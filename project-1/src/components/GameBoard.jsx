import React, {useState} from 'react'
import PropTypes from 'prop-types'


function GameBoard(props) {

    return (
        <ol id={'game-board'}>
            {props.board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => props.onSelectSquare(rowIndex, colIndex)}
                                        disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}

GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired,
}
export default GameBoard
