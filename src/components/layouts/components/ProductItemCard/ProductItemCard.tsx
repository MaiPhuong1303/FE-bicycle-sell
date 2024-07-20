
import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import {FaShoppingCart} from 'react-icons/fa';
import styles from './ProductItemCard.module.scss';
import {Product} from './product';
import {useShoppingContext} from "../../../contexts/ShoppingContext";
const cx = classNames.bind(styles);

const ProductItemCard = ({product}: { product: Product }) => {
    const { addCartItem } = useShoppingContext();
//     // hàm xử lý addToCart
    const addToCart = (product: Product) => {
        addCartItem({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            qty: 1,
            thumbnail: product.urlImage,
        });
    };

    return (
        <div className={cx('col-md-3 mb-3')}>
            <div className={cx('card')}>
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.urlImage}
                        className={cx('card-img-top')}
                        alt={product.name}
                    />
                </Link>
                <div className={cx('card-body')}>
                    <Link to={`/products/${product.id}`}>
                        <h5 className={cx('card-title', 'custom-link')}>
                            {product.name.toLowerCase().length > 25
                                ? product.name.toLowerCase().substring(0, 25) + '...'
                                : product.name.toLowerCase()}
                        </h5>
                    </Link>
                    <p className={cx('card-text')}>
                        <strong>
                            {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(parseFloat(product.price))}
                        </strong>
                    </p>
                    <div className={cx('d-flex', 'justify-content-between')}>
                        <Link to={`/products/${product.id}`}>
                            <a href="#" className={cx('btn', 'btn-primary')}>
                                Xem chi tiết
                            </a>
                        </Link>
                        <button
                                                        className={cx('btn', 'btn-secondary')}
                                                        title="Thêm vào giỏ hàng" onClick={() => addToCart(product)}
                                                    >
                                                        <FaShoppingCart/>
                                                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemCard;
