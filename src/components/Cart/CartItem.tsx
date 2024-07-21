import React from 'react';
import { formatCurrency } from '../helpers/common';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type CartItemProps = {
    id: string;
    name: string;
    price: number;
    qty: number;
    thumbnail: string;
    increaseQty: (id: string) => void;
    decreaseQty: (id: string) => void;
    removeCartItem: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, qty, thumbnail, increaseQty, decreaseQty, removeCartItem }) => {
    const handleIncreaseQty = (event: React.MouseEvent) => {
        event.stopPropagation();
        increaseQty(id);
    };

    const handleDecreaseQty = (event: React.MouseEvent) => {
        event.stopPropagation();
        decreaseQty(id);
    };

    const handleRemoveCartItem = (event: React.MouseEvent) => {
        event.stopPropagation();
        removeCartItem(id);
    };

    return (
        <tr className={cx('cart-item')}>
            <td className={cx('cart-item-thumbnail')}>
                <img src={thumbnail} className="img-fluid rounded" alt="Product" />
            </td>
            <td className={cx('cart-item-name')}>
                <span className={cx('item-name')}>
                    {name.length > 10 ? `${name.substring(0, 10)}...` : name}
                </span>
            </td>
            <td className={cx('cart-item-quantity')}>
                <span className={cx('item-quantity')}>
                    {formatCurrency(price)} <i className="fa-solid fa-xmark"></i> {qty}
                </span>
                <div className={cx('quantity-buttons')}>
                    <button type="button" className="btn btn-sm btn-primary" onClick={handleDecreaseQty}><strong>-</strong></button>
                    <button type="button" className="btn btn-sm btn-primary" onClick={handleIncreaseQty}><strong>+</strong></button>
                </div>
            </td>
            <td className={cx('cart-item-price')}>
                <span className={cx('item-price')}>{formatCurrency(qty * price)}</span>
            </td>
            <td className={cx('cart-item-remove')}>
                <button className="btn btn-sm btn-danger btn-remove" onClick={handleRemoveCartItem}>
                    <i className="fa-solid fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
