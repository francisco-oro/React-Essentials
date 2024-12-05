import React from 'react'
import PropTypes from 'prop-types'

function UserInput(props) {
    return (
        <div id={'user-input'} >
            <div className="input-group">
                <label htmlFor="initial-investment">Initial Investment</label>
                <input id={'initial-investment'} type="number"/>

                <label htmlFor="annual-investment">Annual Investment</label>
                <input id={'annual-investment'} type="number"/>
            </div>

            <div className="input-group">
                <label htmlFor="initial-investment">Initial Investment</label>
                <input id={'initial-investment'} type="number"/>

                <label htmlFor="annual-investment">Annual Investment</label>
                <input id={'annual-investment'} type="number"/>
            </div>
        </div>
    )
}

UserInput.propTypes = {}
export default UserInput;
