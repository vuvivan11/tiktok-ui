import Tippy from '@tippyjs/react/headless';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/Wrapper';
import MenuItem from './MenuItem';

let cx = classNames.bind(styles);

export default function Menu({ children, items = [] }) {
    const renderMenuItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            // visible
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderMenuItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
