import React from 'react'
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './menu.module.scss'
import { Wrapper as PopperWraper } from "~/Layout/Proper";
import MenuItem from './MenuItem';
const cx=classNames.bind(styles);
export default function Menu({children,items}) {
  return (
    <Tippy 
    interactive='false'
    delay={[0,500]}
    
    placement="bottom-end"
    render={(result) => (
      <div className={cx("menu__items")} tabIndex="-1" {...result}>
        <PopperWraper>
           {items.map((item, index) =><MenuItem className={cx("menu__item")} key={index} data={item} />)}
        </PopperWraper>
      </div>
    )}
  >
    {children}
  </Tippy>
  )
}
