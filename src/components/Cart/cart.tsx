
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { BsCartPlus } from 'react-icons/bs'; // Import biểu tượng mới
import { useShoppingContext } from '../contexts/ShoppingContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'; // Import component CartItem
import { formatCurrency } from '../helpers/common';

const cx = classNames.bind(styles);

const Cart = () => {
    const { cartItems, cartQty, totalPrice, increaseQty, decreaseQty, removeCartItem } = useShoppingContext();

    return (
        <div className={cx('action')}>
            <div className={cx('text')}>
                <div className={cx('link')}>
                    <span className={cx('box-icon')}>
                        <BsCartPlus /> {/* Thay đổi biểu tượng giỏ hàng */}
                        <span className={cx('count-holder')}>
                            <span className={cx('count')}>{cartQty}</span>
                        </span>
                    </span>
                    <span className={cx('box-text')}>Giỏ hàng</span>
                </div>

                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCart" data-bs-auto-close="outside" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        <i className="fa fa-shopping-cart" aria-hidden={true}></i>
                        <span className="position-absolute top-0 start-1 badge badge-pill bg-danger">{cartQty}</span>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end cart-dropdown" aria-labelledby="navbarDropdownCart">
                        <li>
                            <h3 className="dropdown-item">Giỏ hàng của bạn</h3>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
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
                                            <td colSpan={5} className="text-center">Không có sản phẩm trong giỏ hàng</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <span className="float-start ms-2"><strong>Total: {formatCurrency(totalPrice)}</strong></span>
                            <Link to='/checkout' className='btn btn-sm btn-success float-end me-2'>Thanh toán</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;
