import React, { useState, useEffect } from 'react';
import Menu, { MenuItem } from './Menu';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { FaChevronUp } from 'react-icons/fa';
import images from '../../../../../images/images';
import config from "../../../../../config/config";


const cx = classNames.bind(styles);

function NavBar() {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('navbar-wrapper', { 'navbar-sticky': isSticky })}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Shop quần áo Duy Thanh" />
            </div>
            <div className={cx('menu-wrapper')}>
                <Menu isSticky={isSticky}>
                    <MenuItem title="Trang chủ" to={config.routes.home} />
                    <MenuItem
                        title="Danh mục sản phẩm "
                        to={config.routes.collection}
                        icon={<FaChevronUp />}
                        hasSubmenu
                    />
                    <MenuItem title="Giới thiệu" to={config.routes.about} />
                    <MenuItem title="Liên hệ" to={config.routes.contact} />
                </Menu>
            </div>
        </div>
    );
}

export default NavBar;
