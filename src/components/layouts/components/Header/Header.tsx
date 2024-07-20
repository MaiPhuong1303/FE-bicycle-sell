
import React, { useState, useEffect } from 'react';
import MiddleHeader from "./MiddleHeader/middleHeader";
import NavBar from "./NavBar/navbar";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {useShoppingContext} from "../../../contexts/ShoppingContext";

const cx = classNames.bind(styles);

const Header = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            setIsScrollingUp(true);
        } else {
            setIsScrollingUp(false);
        }
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={cx({ 'header-hidden': !isScrollingUp })}>
            <MiddleHeader />
            <NavBar />
        </header>
    );
};

export default Header;
