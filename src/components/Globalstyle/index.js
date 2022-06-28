import React from 'react';
import PropTypes from 'prop-types';
import "./Globalstyles.scss"

export default function Globalstyles({ children }) {
    return (
        React.Children.only(children)
    )
}

Globalstyles.propTypes = {
    children: PropTypes.node.isRequired
}
