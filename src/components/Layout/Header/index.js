import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from "./Header.module.scss";
import images from "~/assets/images"
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' />
                    <button className={cx('close')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                    <button className={cx('search-icon')}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className={cx('action')}></div>
            </div>

        </header>
    )
}
