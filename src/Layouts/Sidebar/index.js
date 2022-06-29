import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
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

const MENU_SUGGEST = [
    {
        id: 1,
        first_name: '💃 Nightlife',
        last_name: 'Girl 💃',
        full_name: '💃 Nightlife Girl 💃',
        nickname: 'nightlifegirl',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
        bio: 'Quẩy lên :)',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 15:34:44',
        updated_at: '2022-05-05 16:12:44',
    },
    {
        id: 2,
        first_name: 'Đào Lê',
        last_name: 'Phương Hoa',
        full_name: 'Đào Lê Phương Hoa',
        nickname: 'hoaahanassii',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:10:05',
        updated_at: '2022-05-05 16:11:39',
    },
    {
        id: 3,
        first_name: 'Le',
        last_name: 'Bong',
        full_name: 'Le Bong',
        nickname: 'lebong95',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:14:57',
        updated_at: '2022-05-05 16:15:53',
    },
    {
        id: 4,
        first_name: '💃 Nightlife',
        last_name: 'Girl 💃',
        full_name: '💃 Nightlife Girl 💃',
        nickname: 'nightlifegirl',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
        bio: 'Quẩy lên :)',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 15:34:44',
        updated_at: '2022-05-05 16:12:44',
    },
    {
        id: 5,
        first_name: 'Đào Lê',
        last_name: 'Phương Hoa',
        full_name: 'Đào Lê Phương Hoa',
        nickname: 'hoaahanassii',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:10:05',
        updated_at: '2022-05-05 16:11:39',
    },
    {
        id: 6,
        first_name: 'Le',
        last_name: 'Bong',
        full_name: 'Le Bong',
        nickname: 'lebong95',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:14:57',
        updated_at: '2022-05-05 16:15:53',
    },
];

const MENU_FOLLOWING = [
    {
        id: 1,
        first_name: 'Đào Lê',
        last_name: 'Phương Hoa',
        full_name: 'Đào Lê Phương Hoa',
        nickname: 'hoaahanassii',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
    },
];

export default function Sidebar({ currentUser }) {
    const [limitSuggest, setLimitSuggest] = useState(MENU_SUGGEST.slice(0, 5));
    const [limitFollowing, setLimitFollowing] = useState(MENU_FOLLOWING.slice(0, 5));
    const [showAll, setShowAll] = useState(true);
    const [showMore, setShowMore] = useState(true);

    const handleSeeAll = () => {
        setLimitSuggest(MENU_SUGGEST);
        setShowAll(!showAll);
    };

    const handleSeeLessSuggest = () => {
        setLimitSuggest(MENU_SUGGEST.slice(0, 5));
        setShowAll(!showAll);
    };

    const handleSeeMore = () => {
        setLimitFollowing(MENU_FOLLOWING);
        setShowMore(!showMore);
    };

    const handleSeeLessFollowing = () => {
        setLimitFollowing(MENU_FOLLOWING.slice(0, 5));
        setShowMore(!showMore);
    };
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
                {limitSuggest.map((item) => {
                    return <AccountSuggest key={item.id} data={item} popup />;
                })}
                {showAll ? (
                    <div className={cx('see-all')} onClick={handleSeeAll}>
                        See all
                    </div>
                ) : (
                    <div className={cx('see-all')} onClick={handleSeeLessSuggest}>
                        See less
                    </div>
                )}
            </Menu>
            {currentUser ? (
                <Menu className="menu-suggest" heading="Following accounts">
                    {limitFollowing.length > 0 ? (
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
                    )}
                </Menu>
            ) : (
                <></>
            )}
        </aside>
    );
}
