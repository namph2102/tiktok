import styles from './Siderbar.module.scss';
import classNames from 'classnames/bind';
const cx=classNames.bind(styles);
export default function Sidebar() {
  console.log(cx('wrapper'));
  return (
   <aside className={cx('wrapper')}>
    <h2>Sidebar</h2>
   </aside>
  )
}
