import classNames from 'classnames/bind';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import images from '../../../../../images/images';
import Login from '../../Login/login';
import Search from '../../Search/Search';
import styles from './MiddleHeader.module.scss';

import axiosInstance from '../../../../../data/api/axios';
import cart from "../../../../Cart/cart";
import CartItem from "../../../../Cart/CartItem";
import { useShoppingContext } from '../../../../contexts/ShoppingContext';
import { formatCurrency } from '../../../../helpers/common';


const cx = classNames.bind(styles);

const MiddleHeader = () => {

    const { cartItems = [], cartQty = 0, totalPrice = 0, increaseQty, decreaseQty, removeCartItem } = useShoppingContext();

    const navigate = useNavigate();

    const handleFilterChange = (newFilters: { searchTerm: string }) => {
        if (newFilters.searchTerm.trim() === '') {
            // Nếu searchTerm rỗng, không thực hiện điều hướng
            return;
        } else {
            navigate(`/search/${newFilters.searchTerm}`);
        }
    };

    return (
        <div className={cx('middle')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Shop hàng Nguyễn Duy Thanh" />
                    </Link>
                </div>
                <div className={cx('information')}>
                    <div className={cx('box')}>
                        <p className={cx('title')}>0354560042</p>
                        <p className={cx('sub-title')}>Tư vấn miễn phí</p>
                    </div>
                    <div className={cx('box')}>
                        <p className={cx('title')}>FREE SHIPPING</p>
                        <p className={cx('sub-title')}>Đơn hàng trên 1 Triệu đồng</p>
                    </div>
                </div>
                <div className={cx('search')}>

                    <Search onSubmit={handleFilterChange} />

                </div>
                <div className={cx('action')}>
                    <div>
                        <Login/>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-shopping-cart" aria-hidden={true}></i>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartQty}</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <h3 className="dropdown-item">Giỏ hàng</h3>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                        {cartItems.length > 0 ? (
                                            cartItems.map(item => (
                                                <CartItem
                                                    key={item.id}
                                                    {...item}
                                                    increaseQty={increaseQty}
                                                    decreaseQty={decreaseQty}
                                                    removeCartItem={removeCartItem}
                                                />
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={5} className="text-center">Không có sản phẩm nào trong giỏ hàng</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li>
                                <span className="float-start ms-2"><strong>Thành tiền: {formatCurrency(totalPrice)}</strong></span>
                                <Link to='/checkout' className='btn btn-sm btn-success float-end me-2'>Thanh toán</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;
