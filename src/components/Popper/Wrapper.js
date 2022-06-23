import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

let cx = classNames.bind(styles);

export function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>{children}</div>
    )
}
