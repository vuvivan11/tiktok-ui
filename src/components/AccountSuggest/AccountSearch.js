import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './AccountSuggest.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

let cx = classNames.bind(styles);

export default function AccountSuggest({ data = {}, popup, ...props }) {
    return (
        <div>
            {popup ? (
                <HeadlessTippy
                    // props interactive => tuong tac vao popup
                    interactive
                    // visible
                    delay={[700, 100]}
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className={cx('suggest-popup')} tabIndex="-1" {...attrs}>
                            <div className={cx('suggest-header')}>
                                <Link to={`/@${data.nickname}`}>
                                    <Image className={cx('avatar-popup')} src={data.avatar} alt={data.nickname} />
                                </Link>

                                <Button primary>Follow</Button>
                            </div>
                            <Link to={`/@${data.nickname}`}>
                                <h4 className={cx('name-popup')}>
                                    <span>{data.full_name}</span>
                                    {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                                </h4>
                            </Link>
                            <Link to={`/@${data.nickname}`}>
                                <span className={cx('username-popup')}>{data.nickname}</span>
                            </Link>
                            <div className={cx('suggest-footer')}>
                                <span className={cx('number')}>{data.followers_count}</span>
                                <span className={cx('text')}>Followers</span>
                                <span className={cx('number')}>{data.likes_count}</span>
                                <span className={cx('text')}>Likes</span>
                            </div>
                        </div>
                    )}
                >
                    <Link to={`/@${data.nickname}`} className={cx('wrapper')} {...props}>
                        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                        <div className={cx('info')}>
                            <h4 className={cx('name')}>
                                <span>{data.full_name}</span>
                                {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                            </h4>

                            <span className={cx('username')}>{data.nickname}</span>
                        </div>
                    </Link>
                </HeadlessTippy>
            ) : (
                <Link to={`/@${data.nickname}`} className={cx('wrapper')} {...props}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{data.full_name}</span>
                            {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                        </h4>

                        <span className={cx('username')}>{data.nickname}</span>
                    </div>
                </Link>
            )}
        </div>
    );
}

AccountSuggest.propTypes = {
    data: PropTypes.object.isRequired,
    popup: PropTypes.bool,
};
