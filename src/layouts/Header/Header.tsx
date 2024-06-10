import MiddleHeader from "./MiddleHeader/middleHeader";
import NavBar from "./NavBar/navbar";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header>
            <MiddleHeader/>
            <NavBar/>
        </header>
    )
};
export default Header;