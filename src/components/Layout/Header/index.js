import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);

export default function Header() {
    const [color, setColor] = useState(false);
    const handleChangeColor = (e) => {
        if (e.target.value) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" onChange={handleChangeColor} />
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 48 48"
                            fill={color ? 'rgba(22, 24, 35, 0.75)' : 'rgba(22, 24, 35, 0.34)'}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                            />
                        </svg>
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}
