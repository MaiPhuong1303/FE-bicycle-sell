import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from '../../../../data/api/axios';
import classNames from 'classnames/bind';
import Box from '@mui/system/Box';
import {Container} from '@mui/system';
import {Grid, Paper} from '@mui/material';
import Loader from '../Loader';
import ProductItemCard from '../ProductItemCard/ProductItemCard';
import {Product} from '../ProductItemCard/product';
import ProductFilters from '../ProductItemCard/ProductFilters';
import styles from './search.module.scss';
import ProductList from "../ProductItemCard/producList";

const cx = classNames.bind(styles);

const SearchResults = () => {
    const {keyword} = useParams<{ keyword: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({_page: 1, _limit: 12, name_like: keyword?.toLowerCase()});
    const [showAllProducts, setShowAllProducts] = useState(false);

    useEffect(() => {
        if (!keyword) {
            setLoading(false);
            return;
        }
        // /product?Name_like=${search}
        axiosInstance.get('/products', {
            params: {
                name_like: keyword,
            },
        })
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error searching products: ', error);
                setLoading(false);
            });
    }, [keyword]);

    const handleFiltersChange = (newFilters: any) => {
        setFilters({
            ...newFilters,
            _page: 1,
            name_like: keyword,
        });
    };

    useEffect(() => {
        setShowAllProducts(products.length === 0);
    }, [products]);

    return (
        <Box>
            <Container>
                <div className={cx('search-title')}>
                    {!showAllProducts ? `Kết quả tìm kiếm cho: ${keyword}` : `Không có sản phẩm nào cho từ khóa: "${keyword}"`}
                </div>
                <Grid container spacing={3}>
                    {!showAllProducts && (
                        <Grid item xs={12} md={3} className={cx('left')}>
                            <Paper elevation={3}>
                                <ProductFilters filters={filters} onChange={handleFiltersChange}/>
                            </Paper>
                        </Grid>
                    )}
                    <Grid item xs={12} md={showAllProducts ? 12 : 9} className={cx('right')}>
                        <Paper elevation={3}>
                            {loading ? (
                                <Loader/>
                            ) : (
                                <div className={cx('container')}>
                                    <div className={cx('row')}>
                                        {showAllProducts ? (
                                            <ProductList categoryName={undefined}/> // Hiển thị tất cả sản phẩm
                                        ) : (
                                            <>
                                                {products.length === 0 ? (
                                                    <div className={cx('no-products')}>Không có sản phẩm nào.</div>
                                                ) : null}
                                                {products.map(product => (
                                                    <ProductItemCard key={product.id} product={product}/>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SearchResults;
