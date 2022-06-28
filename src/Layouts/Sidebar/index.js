import React from 'react'
import styles from "./Sidebar.module.scss"
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UsersActiveIcon, UsersIcon } from '~/components/Icons';

let cx = classNames.bind(styles);

const MENU_NAV = [
    {
        title: 'For You',
        icon: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
        to: config.routes.home
    },
    {
        title: 'Following',
        icon: <UsersIcon />,
        activeIcon: <UsersActiveIcon />,
        to: config.routes.follow
    },
    {
        title: 'LIVE',
        icon: <LiveIcon />,
        activeIcon: <LiveActiveIcon />,
        to: config.routes.live
    }
]

export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MENU_NAV.map((item, index) => {
                    return <MenuItem key={index} title={item.title} icon={item.icon} activeIcon={item.activeIcon} to={item.to} />
                })}
            </Menu>
        </aside>
    )
}
