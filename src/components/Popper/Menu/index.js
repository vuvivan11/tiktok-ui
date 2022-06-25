import Tippy from '@tippyjs/react/headless';
import React from 'react'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper/Wrapper';

let cx = classNames.bind(styles)

export default function Menu({ children }) {
    return (
        <Tippy
            placement='bottom-end'
            interactive
            // visible
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>

                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}
