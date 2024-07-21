import React, {useState, useEffect} from 'react';
import Menu, {MenuItem} from './Menu';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import {FaChevronUp, FaMoon, FaSun} from 'react-icons/fa';
import images from '../../../../../images/images';
import config from "../../../../../config/config";
import {useDarkMode} from "../../darkMode/DarkModeContext";


const cx = classNames.bind(styles);

function NavBar() {
    const [isSticky, setIsSticky] = useState(false);
    const {isDarkMode, toggleDarkMode} = useDarkMode();
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
        <div className={cx('navbar-wrapper', {'navbar-sticky': isSticky})}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Shop Bicycles"/>
            </div>
            <div className={cx('menu-wrapper', {'dark-mode': isDarkMode, 'light-mode': !isDarkMode})}>
                <Menu isSticky={isSticky}>
                    <MenuItem title="Trang chủ" to={config.routes.home}/>
                    <MenuItem
                        title="Danh mục sản phẩm "
                        to={config.routes.collection}
                        icon={<FaChevronUp/>}
                        hasSubmenu
                    />
                    <MenuItem title="Giới thiệu" to={config.routes.about}/>
                    <MenuItem title="Liên hệ" to={config.routes.contact}/>
                    <MenuItem title="Hướng dẫn mua hàng" to={config.routes.instruct}/>
                    <div className={cx('toggle', {'dark-mode': isDarkMode, 'light-mode': !isDarkMode})}>
                        <div className="toggle-switch" onClick={toggleDarkMode}>
                            <div className={`switch ${isDarkMode ? 'switch-dark' : 'switch-light'}`}>
                                {isDarkMode ? <FaMoon/> : <FaSun/>}
                            </div>
                        </div>
                        {/* Nội dung khác */}
                    </div>

                </Menu>
            </div>
        </div>
    );
}

export default NavBar;
