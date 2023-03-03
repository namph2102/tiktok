import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWraper } from "~/Layout/Proper";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/asset/images";
import AccountItem from "../AccountItem";
import Button from "../Button";
const cx = classNames.bind(styles);
export default function Header() {
  const [searchResult, setSearchResult] = useState([1, 2, 3]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Tippy
          interactive="true"
          visible="true"
          render={(result) => (
            <div className={cx("search-result")} tabIndex="-1" {...result}>
                <PopperWraper>
                 <h4 className={cx("search-title")}>Search Account</h4>
                     <AccountItem />
                     <AccountItem />
                     <AccountItem />
                     <AccountItem />
                     <AccountItem />

                </PopperWraper>
              </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search Account and Videos" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button text onClick={()=>{alert('Click')}}>Upload</Button>
          <Button primary disabled onClick={()=>{alert('Click')}}>Log In</Button>
          <Button outline lefticon={<FontAwesomeIcon icon={faMagnifyingGlass} />} rounded onClick={()=>{alert('Click')}}>Upload</Button>
        </div>
      </div>
    </header>
  );
}
