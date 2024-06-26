import React, {ReactNode} from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
    return (
        <>

            <Header/>
            <div className={cx("Container")}>{children}</div>
            <Footer/>
        </>
    );
};

export default DefaultLayout;
