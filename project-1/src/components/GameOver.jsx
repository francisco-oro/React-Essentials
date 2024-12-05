import React from 'react'
import PropTypes from 'prop-types'

function GameOver(props) {
    return (
        <div id={'game-over'}>
            <h2>Game Over!</h2>
            <p>{props.winner} won!</p>
            <p>
                <button>Rematch!</button>
            </p>
        </div>
    )
}

GameOver.propTypes = {
    winner: PropTypes.string,
}
export default GameOver
