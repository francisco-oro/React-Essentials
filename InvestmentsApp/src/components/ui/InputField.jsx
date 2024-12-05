import React from 'react'
import PropTypes from 'prop-types'

function InputField(props) {
    return (
        <>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input id={'initial-investment'} type="text"/>
        </>
    )
}

InputField.propTypes = {

}
export default InputField
