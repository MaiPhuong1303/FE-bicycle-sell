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
    let highlights: string[] = [];

    if (product.highlight_items && typeof product.highlight_items === 'string') {
        try {
            // Kiểm tra và sửa chuỗi JSON bị cắt ngắn
            const fixedHighlightItems = product.highlight_items.endsWith(']')
                ? product.highlight_items
                : product.highlight_items + ']';

            // Thử phân tích chuỗi JSON
            highlights = JSON.parse(fixedHighlightItems.replace(/'/g, '"'));
        } catch (error) {
            // Xử lý lỗi phân tích JSON, ghi log hoặc hiển thị thông báo lỗi
            console.error('Error parsing highlight_items JSON:', error);
        }
    }

    return (
        <div className={cx('highlights')}>
            <h3>Đặc điểm nổi bật</h3>
            {highlights.length > 0 ? (
                <ul>
                    {highlights.map((item, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}/>
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Không có thông tin đặc điểm nổi bật.</p>
            )}
        </div>
    );
};

export default HightLightItem;
