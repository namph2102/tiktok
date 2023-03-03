import React from 'react'
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx=classNames.bind(styles);
export default function Button({to,href,children,outline=false,
    rounded=false,primary=false,disabled=false,text=false,
    small=false,large=false,onClick,lefticon,righticon,...passProps}) {
    let Comp='button';

    const props={onClick};
    if(to){
        props.to=to;
        Comp='Link';
    }else if(href){
        props.href=href;
        Comp='a';
    }
    if(disabled){
        delete props.onClick;
    }
    const classname=cx('wrapper',{primary,outline,small,large,text,disabled,rounded});
  return (
    <Comp {...props} {...passProps} className={classname}>
        {lefticon && <span>{lefticon} </span>}
        <span className={cx('title')}>{children}</span>
        {righticon && <span>{lefticon} </span>}
    </Comp>
  )
}
