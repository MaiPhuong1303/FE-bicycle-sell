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
                        <li>Email: info@company.com</li>
                        <li>Điện thoại: -------</li>
                        <li>Địa chỉ:---------M</li>
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
            <div className={cx('footer-bottom')}>
                <p>&copy; 2024 Công ty của bạn. Tất cả các quyền được bảo lưu.</p>
            </div>
        </footer>

    );
};

export default Footer;