import React from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

let cx = classNames.bind(styles);

export default function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}
