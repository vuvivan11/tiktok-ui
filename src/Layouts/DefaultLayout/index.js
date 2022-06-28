import React from 'react';
import PropTypes from 'prop-types'
import Header from '../Header';
import Sidebar from '../Sidebar';
import classNames from 'classnames/bind';
import styles from "./DefaultLayout.module.scss"

let cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
