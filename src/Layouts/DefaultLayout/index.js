import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

let cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    const currentUser = true;
    return (
        <div className={cx('wrapper')}>
            <Header currentUser={currentUser} />
            <div className={cx('container')}>
                <Sidebar currentUser={currentUser} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
