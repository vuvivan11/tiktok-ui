import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';

let cx = classNames.bind(styles);

const defaultFnc = () => {};

export default function Menu({ children, items = [], onChange = defaultFnc }) {
    // console.log(items);
    // tạo mảng history có obj key là data <=> item.children có obj key data => lấy đc mảng hiện tại muốn render
    const [history, setHistory] = useState([{ data: items }]);
    // console.log(history);
    // console.log(history.length);
    const current = history[history.length - 1];
    // console.log(current);

    const renderMenuItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            offset={[12, 10]}
            // visible
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderMenuItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}
