import React, {memo} from 'react';


import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
const Footer = () => {
    return (

        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-column')}>
                    <h4>Giới thiệu</h4>
                    <p>Cửa hàng Bycicle</p>
                </div>
                <div className={cx('footer-column')}>
                    <h4>Liên hệ</h4>
                    <ul>
                        <li>Email: cchanh375@gamil.com</li>
                        <li>Điện thoại: 0337576851</li>
                        <li>Địa chỉ:Khu Phố 6, Phường Linh Trung, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>
                <div className={cx('footer-column')}>
                    <h4>Liên kết nhanh</h4>
                    <ul>
                        <li><a href="/about">Giới thiệu</a></li>
                        <li><a href="/contact">Liên hệ</a></li>
                        <li><a href="/privacy">Chính sách bảo mật</a></li>
                    </ul>
                </div>
                <div className={cx('cleat')}></div>
            </div>

        </footer>

    );
};

export default Footer;