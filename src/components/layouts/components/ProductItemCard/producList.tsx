import React, {useState, useEffect} from 'react';
import productApi from '../../../../data/api/productAPI';
import {Product} from './product';
import Box from '@mui/system/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './ProductItemCard.module.scss';
import Loader from '../Loader';
import {Container} from '@mui/system';
import {Grid, Pagination, Paper} from '@mui/material';
import {FaShoppingCart} from "react-icons/fa";

const cx = classNames.bind(styles);

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [pagination, setPagination] = useState({
        count: 1,
        page: 1,
        totalItems: 12,
        limit: 12,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({_page: 1, _limit: 12});

    useEffect(() => {
        const fetchData = async () => {
            try {
                await delay(1000);
                const response = await productApi.getAll(filters);
                const totalItems = response.totalItems;
                console.log({response});
                setProducts(response.data);
                setLoading(false);
                setPagination({
                    ...pagination,
                    count: Math.ceil(totalItems / filters._limit),
                    totalItems
                });
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
                setLoading(true);
            }
        };

        fetchData();
    }, [filters]);
    const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page
        }));
        setPagination((prevPagination) => ({
            ...prevPagination,
            page: page
        }));
    };
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item className={cx('left')}>
                        <Paper elevation={3}>left</Paper>
                    </Grid>
                    <Grid item className={cx('right')}>
                        <Paper elevation={3}>
                            {loading ? (
                                <Loader/>
                            ) : (
                                <div className={cx('container')}>
                                    <div className={cx('row')}>
                                        {products.map(product => (
                                            <div key={product.id} className={cx('col-md-3 mb-3')}>
                                                <div className={cx('card')}>
                                                    <img src={product.urlImage} className={cx('card-img-top')}
                                                         alt={product.name}/>
                                                    <div className={cx('card-body')}>
                                                        <h5 className={cx('card-title')}>
                                                            {product.name.length > 40 ? (product.name.substring(0, 40) + '...') : product.name}
                                                        </h5>
                                                        <p className={cx('card-text')}><strong>
                                                            {new Intl.NumberFormat('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND'
                                                            }).format(parseFloat(product.price))}</strong></p>
                                                        <div className={cx('d-flex', 'justify-content-between')}>
                                                            <a href="#" className={cx('btn', 'btn-primary')}>Xem chi
                                                                tiết</a>
                                                            <button className={cx('btn', 'btn-secondary')}
                                                                    title="Thêm vào giỏ hàng">
                                                                <FaShoppingCart/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className={cx('pagination-container')}>
                                <Pagination
                                    count={Math.ceil(pagination.totalItems / pagination.limit)}
                                    page={pagination.page}

                                    onChange={handlePageChange}
                                    variant="outlined"
                                    shape="rounded"
                                    color="primary"
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductList;