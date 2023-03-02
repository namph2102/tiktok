import styles from './defautLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header'
import Sidebar from './Siderbar'
const cx=classNames.bind(styles)
export default function DefautLayout({children}) {
  return (
    <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('container')}>
                <Sidebar/>
                <div className={cx("content")}>
                    {children}
                </div>
        </div>
    </div>
  )
}
