import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

let cx = classNames.bind(styles);

export default function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nickname}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                </h4>

                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </div>
    );
}
