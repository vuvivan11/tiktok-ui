import React from 'react'
import { Link } from 'react-router-dom'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import styles from './AccountSuggest.module.scss'
import Image from '../Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

let cx = classNames.bind(styles)

export default function AccountSuggest({ data = {}, ...props }) {
    return (
        <HeadlessTippy
            // visible
            placement='bottom-start'
            render={(attrs) => (
                <div className={cx('suggest-popup')} tabIndex="-1" {...attrs}>
                    content
                </div>
            )}
        >
            <Link to={`/@${data.nickname}`} className={cx('wrapper')} {...props}>
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
            </Link>
        </HeadlessTippy>
    )
}
