import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Submenu.module.scss';
import Submenu from './submenu';
import SubmenuItem from './SubmenuItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

interface SubMenuItemProps {
    title: string;
    to: string;
    icon?: React.ReactNode;
    hasSubmenu?: boolean;
    ListSubmenuItem?: string[];
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ title, to, icon, hasSubmenu, ListSubmenuItem }) => {
    return hasSubmenu ? (
        <li className={cx('sub-item', { hasSubmenu })}>
            <Link to={to} className={cx('item-link')}>
                <span className={cx('title')}>{title}</span>
                {icon && <span className={cx('icon')}>{icon}</span>}
            </Link>
            <div className={cx('submenu-wrapper', 'level-2')}>
                <Submenu>
                    {ListSubmenuItem && ListSubmenuItem.map((item, index) => (
                        <SubmenuItem title={item} to="/collection" key={index}></SubmenuItem>
                    ))}
                </Submenu>
            </div>
        </li>
    ) : (
        <li className={cx('sub-item')}>
            <Link to={to} className={cx('item-link')}>
                <span className={cx('title')}>{title}</span>
                {icon && <span className={cx('icon')}>{icon}</span>}
            </Link>
        </li>
    );
}

SubMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    hasSubmenu: PropTypes.bool,
    ListSubmenuItem: PropTypes.array,
};

export default SubMenuItem;
