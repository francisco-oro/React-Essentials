import React from 'react'
import PropTypes from 'prop-types'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard(props) {
    return (
        <ol id={'game-board'}>
            {initialGameBoard.map((row, i) =>
                <li key={i}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}

GameBoard.propTypes = {}
export default GameBoard
