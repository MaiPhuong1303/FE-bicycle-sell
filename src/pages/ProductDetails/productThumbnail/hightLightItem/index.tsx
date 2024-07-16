import React from 'react';
import classNames from 'classnames/bind';
import styles from './hightLightItem.module.scss';
import {Product} from "../../../../components/layouts/components/ProductItemCard/product";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

interface HightLightItemProps {
    product: Product;
}

const HightLightItem: React.FC<HightLightItemProps> = ({product}) => {
    const highlights = JSON.parse(product.highlight_items.replace(/'/g, '"'));
    return (
        <div className={cx('highlights')}>
            <h3>Đặc điểm nổi bật</h3>
            <ul>
                {highlights.map((item: string, index: number) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}/>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HightLightItem;
