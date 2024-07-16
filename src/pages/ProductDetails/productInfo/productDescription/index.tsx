import React from 'react';
import classNames from 'classnames/bind';
import styles from './productDescription.module.scss';
import {Product} from "../../../../components/layouts/components/ProductItemCard/product";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const cx = classNames.bind(styles);

interface ProductDescriptionProps {
    product: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({product}) => {
    return (
        <div className={cx('description')}>
            <ul>
                <FontAwesomeIcon icon={faExclamationCircle} className={cx('icon')}/>
                {product.description}
            </ul>
        </div>
    );
};

export default ProductDescription;
