import React, { useState } from 'react'
import styles from "./Sidebar.module.scss"
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UsersActiveIcon, UsersIcon } from '~/components/Icons';
import AccountSuggest from '~/components/AccountSuggest';

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

const MENU_SUGGEST = [
    {
        "id": 1,
        "first_name": "Đào Lê",
        "last_name": "Phương Hoa",
        "full_name": "Đào Lê Phương Hoa",
        "nickname": "hoaahanassii",
        "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
        "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
        "tick": true,
    },
    // {
    //     "id": 2,
    //     "first_name": "Đào Lê",
    //     "last_name": "Phương Hoa",
    //     "full_name": "Đào Lê Phương Hoa",
    //     "nickname": "hoaahanassii",
    //     "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
    //     "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
    //     "tick": true,
    // },
    // {
    //     "id": 3,
    //     "first_name": "Đào Lê",
    //     "last_name": "Phương Hoa",
    //     "full_name": "Đào Lê Phương Hoa",
    //     "nickname": "hoaahanassii",
    //     "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
    //     "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
    //     "tick": true,
    // },
    // {
    //     "id": 4,
    //     "first_name": "Đào Lê",
    //     "last_name": "Phương Hoa",
    //     "full_name": "Đào Lê Phương Hoa",
    //     "nickname": "hoaahanassii",
    //     "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
    //     "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
    //     "tick": true,
    // },
    // {
    //     "id": 5,
    //     "first_name": "Đào Lê",
    //     "last_name": "Phương Hoa",
    //     "full_name": "Đào Lê Phương Hoa",
    //     "nickname": "hoaahanassii",
    //     "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
    //     "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
    //     "tick": true,
    // },
    // {
    //     "id": 6,
    //     "first_name": "Đào Lê",
    //     "last_name": "Phương Hoa",
    //     "full_name": "Đào Lê Phương Hoa",
    //     "nickname": "hoaahanassii",
    //     "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
    //     "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
    //     "tick": true,
    // },

]

export default function Sidebar() {
    const [limitAccount, setLimitAccount] = useState(MENU_SUGGEST.slice(0, 5))
    const [showMore, setShowMore] = useState(true)

    const handleSeeAll = () => {
        setLimitAccount(MENU_SUGGEST)
        setShowMore(!showMore)
    }

    const handleSeeLess = () => {
        setLimitAccount(MENU_SUGGEST.slice(0, 5))
        setShowMore(!showMore)
    }
    return (
        <aside className={cx('wrapper')}>
            <Menu className='menu-nav'>
                {MENU_NAV.map((item, index) => {
                    return <MenuItem key={index} title={item.title} icon={item.icon} activeIcon={item.activeIcon} to={item.to} />
                })}
            </Menu>
            <Menu className='menu-suggest' heading='Suggested accounts' showMore='See all'>
                {limitAccount.map((item) => {
                    return <AccountSuggest key={item.id} data={item} />
                })}
                {
                    showMore
                        ?
                        <div className={cx('see-all')} onClick={handleSeeAll}>See all</div>
                        :
                        <div className={cx('see-all')} onClick={handleSeeLess}>See less</div>
                }


            </Menu>
        </aside>
    )
}
