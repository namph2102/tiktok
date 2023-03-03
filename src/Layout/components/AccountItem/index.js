import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
const cx = classNames.bind(styles);
export default function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8e7976024ff89bb623600ac0b7aaf8dc~c5_100x100.jpeg?x-expires=1677924000&x-signature=dJRA%2F13DFG%2FB87tWjgLz7IsV598%3D"  className={cx('avata')} alt="Nam"/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                    <span>Hoài Nam</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
            </h4>
            <p className={cx('des')}>đẹp tria quá</p>
        </div>
    </div>
  )
}
