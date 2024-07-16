import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import Submenu, {SubmenuItem} from './Submenu';
import {FaChevronRight} from 'react-icons/fa';

const cx = classNames.bind(styles);

interface MenuItemProps {
    title: string;
    to: string;
    icon?: React.ReactNode;
    hasSubmenu?: boolean;
    onCategoryChange?: (newCategoryId: number | null) => void; // Thêm prop onCategoryChange
}

const MenuItem: React.FC<MenuItemProps> = ({title, to, icon, hasSubmenu, onCategoryChange}) => {
    const handleItemClick = () => {
        // Gọi hàm callback khi click vào menu item
        if (onCategoryChange) {
            onCategoryChange(null); // Đặt lại selectedCategoryId về null khi click vào menu item
        }
    };

    return hasSubmenu ? (
        <>
            <NavLink className={(nav) => cx('menu-item', {active: nav.isActive}, 'has-submenu')} to={to}
                     onClick={handleItemClick}>
                <span className={cx('title')}>{title}</span>
                {icon && <span className={cx('icon')}>{icon}</span>}
                <div className={cx('submenu-wrapper')}>
                    <Submenu>
                        <SubmenuItem title="Xe đạp thể thao" to="/collection/xe-dap-the-thao"></SubmenuItem>
                        <SubmenuItem title="Xe đạp thời trang, thông dụng"
                                     to="/collection/xe-dap-thoi-trang-thong-dung"></SubmenuItem>
                        <SubmenuItem title="Xe đạp trẻ em" to="/collection/xe-dap-tre-em"></SubmenuItem>
                        <SubmenuItem title="Xe đạp điện" to="/collection/xe-dap-dien"></SubmenuItem>
                        <SubmenuItem title="Phụ kiện" to="/collection/phu-kien"></SubmenuItem>
                    </Submenu>
                </div>
            </NavLink>
        </>
    ) : (
        <NavLink className={(nav) => cx('menu-item', {active: nav.isActive})} to={to} onClick={handleItemClick}>
            <span className={cx('title')}>{title}</span>
            {icon && <span className={cx('icon')}>{icon}</span>}
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    hasSubmenu: PropTypes.bool,
    onCategoryChange: PropTypes.func, // Đảm bảo prop onCategoryChange được định nghĩa trong propTypes
};

export default MenuItem;
