import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Submenu.module.scss';

const cx = classNames.bind(styles);

interface SubmenuProps {
    children: React.ReactNode;
}

const Submenu: React.FC<SubmenuProps> = ({ children }) => {
    return <ul className={cx('submenu')}>{children}</ul>;
}

Submenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Submenu;
