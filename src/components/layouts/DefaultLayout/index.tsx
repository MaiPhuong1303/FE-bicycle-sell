import React, {ReactNode} from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import {useDarkMode} from "../components/darkMode/DarkModeContext";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
    const {isDarkMode} = useDarkMode();
    return (

        <div className={cx({'dark-mode': isDarkMode, 'light-mode': !isDarkMode})}>
            <Header/>

            <div className={cx("Container")}>{children}</div>

            <Footer/></div>
    );
};


export default DefaultLayout;
