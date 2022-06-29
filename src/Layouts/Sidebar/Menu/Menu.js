import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

let cx = classNames.bind(styles)

export default function Menu({ children, className, heading }) {
    return (
        <nav className={cx(className)}>
            {heading && <p className={cx('menu-heading')}>{heading}</p>}
            {children}
        </nav>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    heading: PropTypes.string,
}
