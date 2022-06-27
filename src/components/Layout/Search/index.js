import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/Wrapper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/components/Hook';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false)

    const refInput = useRef();

    const handleInputChange = (e) => {
        setInputSearch(e.target.value);
    };

    const handleClearText = () => {
        setInputSearch('');
        setSearchResult([]);
        refInput.current.focus();
    };

    const handleClearSearch = () => {
        setInputSearch('')
    }

    // debounce xu ly nhap xong trong 500ms moi request query
    const debouncedSearchTerm = useDebounce(inputSearch, 500);


    useEffect(() => {
        if (!debouncedSearchTerm.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedSearchTerm)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })
    }, [debouncedSearchTerm]);

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-result-heading')}>Accounts</h4>
                            {searchResult.map((item) => {
                                return <AccountItem key={item.id} data={item} onClick={handleClearSearch} />
                            })}
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
                    <button className={cx('close')} onClick={handleClearText}>
                        {!!inputSearch && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                    {loading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
