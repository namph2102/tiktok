import React from 'react'
import Button from '~/Layout/components/Button'


import classNames from "classnames/bind";
import styles from "./menu.module.scss";

const cx = classNames.bind(styles);


export default function MenuItem({data}) {
  return (
    <Button  lefticon={data.icon} >
      {data.title}
    </Button>
  )
}
