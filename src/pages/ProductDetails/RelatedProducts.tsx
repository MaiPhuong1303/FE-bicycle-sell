import React, {useEffect, useState} from 'react';
import {Grid, Paper} from '@mui/material';
import axiosInstance from '../../data/api/axios';
import ProductItemCard from '../../components/layouts/components/ProductItemCard/ProductItemCard';
import Loader from '../../components/layouts/components/Loader/index';
import styles from './relatedproducts.module.scss';
import classNames from 'classnames/bind';
import {Product} from "../../components/layouts/components/ProductItemCard/product";

const cx = classNames.bind(styles);

const RelatedProducts = ({categories_id}: { categories_id: number }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const response = await axiosInstance.get(`/products`, {
                    params: {
                        categories_id,
                        _limit: 16,  // Giới hạn số sản phẩm liên quan
                    },
                });
                // Trộn danh sách sản phẩm
                const shuffledProducts = shuffleArray(response.data);
                // Cập nhật state với danh sách sản phẩm đã được trộn
                setProducts(shuffledProducts);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch related products', error);
                setLoading(false);
            }
        };

        fetchRelatedProducts();
    }, [categories_id]);

// Hàm trộn mảng sản phẩm
    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className={cx('related-products')}>
            <h2 className={cx('title')}>Có Thể bạn Cũng Thích</h2>
            {loading ? (
                <Loader/>
            ) : (
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        {products.length > 0 ? ( // Nếu có sản phẩm thì map và hiển thị từng ProductItemCard
                            products.map(product => (

                                <ProductItemCard key={product.id} product={product}/>

                            ))
                        ) : (
                            <div className={cx('no-products')}>Không có sản phẩm nào.</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RelatedProducts;
