import React from 'react'
import PropTypes from 'prop-types'

function InputField(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.children}</label>
            <input id={props.id} value={props.value} onChange={props.onChange} type="number"/>
        </div>
    )
}

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}
export default InputField
