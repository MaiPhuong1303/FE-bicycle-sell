import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('container')}>
            <h1>Home Page</h1>
        </div>
    );
}
export default Home;