

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {BsCartDash} from "react-icons/bs";

const cx = classNames.bind(styles);

function Cart() {

    return (
        <div className={cx('action')}>
        <div className={cx('text')}>
            <div className={cx('link')}>
                                    <span className={cx('box-icon')}>
                                        {/* <img src={images.cart} alt="Cart" /> */}
                                        <BsCartDash />
                                        <span className={cx('count-holder')}>
                                            <span className={cx('count')}></span>
                                        </span>
                                    </span>
                <span className={cx('box-text')}>Giỏ hàng</span>

            </div>
        </div>
        </div>
    )
        ;
}

export default Cart;
