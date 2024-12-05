import React from 'react'
import PropTypes from 'prop-types'

function Log(props) {

    return (
        <ol id={'log'}>
            {props.turns.map((turn, index) =>
                (<li key={index}>{turn.player} Selected {turn.square.row}, {turn.square.col}</li>))}
        </ol>
    )
}

Log.propTypes = {
    turns: PropTypes.array.isRequired,
}
export default Log
