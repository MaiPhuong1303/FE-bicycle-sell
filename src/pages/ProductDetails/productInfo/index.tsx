import React from 'react';
import {Product} from '../../../components/layouts/components/ProductItemCard/product';
import Box from "@mui/system/Box";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind';
import styles from './productInfor.module.scss';

const cx = classNames.bind(styles);

interface ProductInfoProps {
    product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({product}) => {
    // Chuyển đổi chuỗi JSON thành mảng
    const colors = JSON.parse(product.color.replace(/'/g, '"'));
    return (
        <div className={cx('container')}>
            <Box>
                <div className={cx('authentic')}>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}/>
                    Chính hãng
                    <div className={cx('brand')}>
                        Thương hiệu: {product.brand_name}
                    </div>
                </div>
                <h2>{product.name}</h2>
                <h3>{product.rating}</h3>
                <p className={cx('card-text')}>
                    <strong className={cx('priceContainer')}>
                        {new Intl.NumberFormat('vi-VN', {}).format(parseFloat(product.price))}
                        <span className={cx('currency')}>&#8363;</span>

                    </strong>
                </p>
                <h3>
                    <div>Màu</div>
                    <div className={cx('colors-container')}>
                        {colors.map((color: string, index: number) => (
                            <button key={index} className={cx('color-button')}>
                                {color}
                            </button>
                        ))}
                    </div>
                </h3>
                <button className={cx('add-to-cart-button')}>Thêm vào giỏ hàng</button>


            </Box>
        </div>
    );
};

export default ProductInfo;
