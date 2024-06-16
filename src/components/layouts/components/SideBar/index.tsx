import React from 'react';

import classNames from 'classnames/bind';
import styles from './sideBar.module.scss';
const cx = classNames.bind(styles);

class SideBar extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div className={cx('container')}>
                <div className={cx('side-bar')}>{children}</div>
            </div>
        );
    }
}

export default SideBar;
