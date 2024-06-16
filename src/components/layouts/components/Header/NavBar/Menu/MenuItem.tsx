import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import Submenu, { SubmenuItem } from './Submenu';
import { FaChevronRight } from 'react-icons/fa';

const cx = classNames.bind(styles);
// @ts-ignore
function MenuItem({ title, to, icon, hasSubmenu }) {
    return hasSubmenu ? (
        <>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive }, 'has-submenu')} to={to}>
                <span className={cx('title')}>{title}</span>
                {icon ? <span className={cx('icon')}>{icon}</span> : undefined}
                <div className={cx('submenu-wrapper')}>
                    <Submenu>
                        <SubmenuItem title="Xe đạp thể thao" to="/collection/xe-dap-the-thao"></SubmenuItem>
                        <SubmenuItem title="Xe đạp nữ" to="/collection/xe-dap-nu"></SubmenuItem>
                        <SubmenuItem title="Xe đạp học sinh" to="/collection/xe-dap-hoc-sinh"></SubmenuItem>
                        <SubmenuItem title="Xe đạp trẻ em" to="/collection/xe-dap-tre-em"></SubmenuItem>
                        <SubmenuItem title="Xe đạp nhập khẩu" to="/collection/xe-dap-nhap-khau"></SubmenuItem>
                        <SubmenuItem title="Xe đạp điện" to="/collection/xe-dap-dien"></SubmenuItem>
                        <SubmenuItem title="Phụ kiện" to="/collection/phu-kien"></SubmenuItem>
                    </Submenu>
                </div>
            </NavLink>
        </>
    ) : (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('title')}>{title}</span>
            {icon ? <span className={cx('icon')}>{icon}</span> : undefined}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.node.isRequired,
    icon: PropTypes.node,
    hasSubmenu: PropTypes.bool,
};

export default MenuItem;
