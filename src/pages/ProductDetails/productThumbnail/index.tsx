import React, {useRef, useState} from 'react';
import Box from "@mui/system/Box";
import classNames from 'classnames/bind';
import styles from './productThumbnail.module.scss';
import {Product} from "../../../components/layouts/components/ProductItemCard/product";

const cx = classNames.bind(styles);

interface ProductThumbnailProps {
    product: Product;
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({product}) => {
    const [mainImage, setMainImage] = useState(product.urlImage);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = JSON.parse(product.images.replace(/'/g, '"'));
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            setMainImage(images[newIndex].medium_url);
            scrollToIndex(newIndex);
        }
    };

    const scrollRight = () => {
        if (currentIndex < images.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setMainImage(images[newIndex].medium_url);
            scrollToIndex(newIndex);
        }
    };

    const scrollToIndex = (index: number) => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const itemWidth = 58; // Width of each image including margin (50px width + 8px gap)
            const scrollLeft = index * itemWidth - containerWidth / 2 + itemWidth / 2;
            containerRef.current.scrollTo({left: scrollLeft, behavior: 'smooth'});
        }
    };

    return (
        <Box className={cx('thumbnail-container')}>
            <img className={cx('img')} src={mainImage} alt={product.name}/>
            <button className={cx('arrow', 'left')} onClick={scrollLeft}>&lt;</button>
            <Box className={cx('images-container')} ref={containerRef}>
                {images.map((image: any, index: number) => (
                    <img
                        key={index}
                        className={cx('img-small', {active: index === currentIndex})}
                        src={image.small_url}
                        alt={product.name}
                        onClick={() => {
                            setMainImage(image.medium_url);
                            setCurrentIndex(index);
                            scrollToIndex(index);
                        }}
                    />
                ))}
            </Box>
            <button className={cx('arrow', 'right')} onClick={scrollRight}>&gt;</button>
            
        </Box>
    );
};

export default ProductThumbnail;
