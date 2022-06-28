import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types'

let cx = classNames.bind(styles);

export function Wrapper({ children, className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
