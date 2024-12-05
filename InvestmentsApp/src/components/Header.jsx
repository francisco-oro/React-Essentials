import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <div id={'header'}>
            <img src={props.image} alt="sd"/>
            <h1>{props.title}</h1>
        </div>
        )
}

Header.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}
export default Header
