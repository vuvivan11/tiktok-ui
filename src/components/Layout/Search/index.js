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
import * as searchService from '~/apiService/searchService'

const cx = classNames.bind(styles);

export default function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false)

    const refInput = useRef();

    const handleInputChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setInputSearch(searchValue);
        }
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



        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debouncedSearchTerm)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()

    }, [debouncedSearchTerm]);

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
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

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
