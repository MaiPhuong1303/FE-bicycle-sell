
import classNames from 'classnames/bind';
import styles from './SideBox.module.scss';
import {Component} from "react";
const cx = classNames.bind(styles);

class SideBox extends Component<{ title: any, children: any }> {
    render() {
        let {title, children} = this.props;
        return (
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h2>{title}</h2>
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        );
    }
}

export default SideBox;
