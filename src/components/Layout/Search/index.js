import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/Wrapper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [showResult, setShowResult] = useState(true);

    const refInput = useRef();

    const handleInputChange = (e) => {
        setInputSearch(e.target.value);
        setSearchResult([1, 2, 3]);
    };

    const handleClear = () => {
        setInputSearch('');
        setSearchResult([]);
        refInput.current.focus();
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-result-heading')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowResult(false);
                }}
            >
                <div className={cx('search')}>
                    <input
                        ref={refInput}
                        placeholder="Search accounts and videos"
                        value={inputSearch}
                        onChange={handleInputChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    <button className={cx('close')} onClick={handleClear}>
                        {!!inputSearch && <FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                    {/* <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
