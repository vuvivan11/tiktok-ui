import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UsersActiveIcon, UsersIcon } from '~/components/Icons';
import AccountSuggest from '~/components/AccountSuggest';
import Button from '~/components/Button';

let cx = classNames.bind(styles);

const MENU_NAV = [
    {
        title: 'For You',
        icon: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
        to: config.routes.home,
    },
    {
        title: 'Following',
        icon: <UsersIcon />,
        activeIcon: <UsersActiveIcon />,
        to: config.routes.follow,
    },
    {
        title: 'LIVE',
        icon: <LiveIcon />,
        activeIcon: <LiveActiveIcon />,
        to: config.routes.live,
    },
];

export default function Sidebar({ currentUser }) {
    const [suggestUser, setSuggestUser] = useState([]);
    const [followingUser, setFollwingUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggestedUser(1, 5)
            .then((res) => {
                setSuggestUser(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {});
    return (
        <aside className={cx('wrapper')}>
            <Menu className="menu-nav">
                {MENU_NAV.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            activeIcon={item.activeIcon}
                            to={item.to}
                        />
                    );
                })}
            </Menu>
            {currentUser ? (
                <></>
            ) : (
                <div className={cx('login')}>
                    <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button outline large className={cx('margin-top')}>
                        Log in
                    </Button>
                </div>
            )}
            <Menu className="menu-suggest" heading="Suggested accounts">
                {suggestUser.map((item) => {
                    return <AccountSuggest key={item.id} data={item} popup />;
                })}
                {true ? <div className={cx('see-all')}>See all</div> : <div className={cx('see-all')}>See less</div>}
            </Menu>
            {currentUser ? (
                <Menu className="menu-suggest" heading="Following accounts">
                    {/* {limitFollowing.length > 0 ? (
                        <>
                            {limitFollowing.map((item) => {
                                return <AccountSuggest key={item.id} data={item} />;
                            })}
                            {showMore ? (
                                <div className={cx('see-all')} onClick={handleSeeMore}>
                                    See more
                                </div>
                            ) : (
                                <div className={cx('see-all')} onClick={handleSeeLessFollowing}>
                                    See less
                                </div>
                            )}
                        </>
                    ) : (
                        <p className={cx('no-follower')}>Accounts you follow will appear here</p>
                    )} */}
                    <p className={cx('no-follower')}>Accounts you follow will appear here</p>
                </Menu>
            ) : (
                <></>
            )}
        </aside>
    );
}
