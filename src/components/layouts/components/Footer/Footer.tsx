import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";
import images from "../../../../images/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-column')}>
                    <h4>Cửa hàng Bycicle</h4>
                    <a>
                        <Link to="/">
                            <img src={images.logo} alt="" />
                        </Link>
                    </a>
                </div>
                <div className={cx('footer-column')}>
                    <h4>Liên hệ</h4>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} /> Email: 21130211@st.hcmuaf.edu.vn
                        </li>


                        <li>
                            <FontAwesomeIcon icon={faPhone} /> Điện thoại: 0877.287.869
                        </li>


                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Địa chỉ: Khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                        </li>
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

export default memo(Footer);
