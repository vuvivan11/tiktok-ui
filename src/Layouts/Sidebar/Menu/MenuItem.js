import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

let cx = classNames.bind(styles)

export default function MenuItem({ title, icon, activeIcon, to }) {
    return (
        // NavLink active => isActive = true 
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('menu-title')}>
                {title}
            </span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
}
