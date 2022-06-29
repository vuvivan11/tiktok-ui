import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CoinsIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    QuestionIcon,
    SettingsIcon,
    SighOutIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

let cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNam',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const MENU_USER = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinsIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEM,
    {
        icon: <SighOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

export default function Header({ currentUser }) {
    // handle logic
    const handleMenuChange = (item) => {
        console.log(item);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[10, 0]} content="Upload video" placement="bottom" delay={(0, 200)}>
                                <button className={cx('action-upload')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[10, 0]} content="Message" placement="bottom" delay={(0, 200)}>
                                <button className={cx('action-upload')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[10, 0]} content="Inbox" placement="bottom" delay={(0, 200)}>
                                <button className={cx('action-upload')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {currentUser ? (
                        <Menu items={currentUser ? MENU_USER : MENU_ITEM} onChange={handleMenuChange}>
                            {/* tạo tham chiếu đến thẻ img của comp Image */}
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/51faeb2beb46a239fccc193230a4259b~c5_100x100.jpeg?x-expires=1656126000&x-signature=D%2FT%2BB%2F05SXtzlV%2Bpm7s0EIAkpQY%3D"
                                alt="username"
                            />
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                            <button className={cx('menu-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}
