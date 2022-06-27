import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

let cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/51faeb2beb46a239fccc193230a4259b~c5_100x100.jpeg?x-expires=1656126000&x-signature=D%2FT%2BB%2F05SXtzlV%2Bpm7s0EIAkpQY%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}
