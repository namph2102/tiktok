import React from 'react'
import classNames from 'classnames/bind'
import styles from './Propers.module.scss'
const cx=classNames.bind(styles)
export default function Wrapper({children}) {
  return (
    <div className={cx('wrapper')}>
        {children}
    </div>
  )
}
