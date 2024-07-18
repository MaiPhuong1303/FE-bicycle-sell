import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import productApi from '../../../../data/api/productAPI';
import {Product} from './product';
import Box from '@mui/system/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './ProductItemCard.module.scss';
import Loader from '../Loader';
import {Container} from '@mui/system';
import {Grid, Pagination, Paper} from '@mui/material';
import {FaShoppingCart} from 'react-icons/fa';
import ProductFilters from './ProductFilters';

const cx = classNames.bind(styles);

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface Filters {
    _page: number;
    _limit: number;
    categories_id?: number;
    totalItems?: number;
    categoryName?: string;
    name?: string;
}

function ProductList({categoryName}: { categoryName?: string }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [pagination, setPagination] = useState({
        count: 1,
        page: 1,
        totalItems: 12,
        limit: 12,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState<Filters>({_page: 1, _limit: 12, categoryName});
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();

    useEffect(() => {
        const categoryMap: { [key: string]: number } = {
            'xe-dap-the-thao': 1,
            'xe-dap-thoi-trang-thong-dung': 2,
            'xe-dap-tre-em': 3,
            'xe-dap-dien': 4,
            'phu-kien': 5,
        };

        const pathSegments = location.pathname.split('/');
        const categorySlug = pathSegments[pathSegments.length - 1];
        const categories_id = categoryMap[categorySlug]; // Chỉnh sửa thành categories_id

        setFilters(prevFilters => ({
            ...prevFilters,
            _page: 1,
            categories_id,
        }));
    }, [location.pathname]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await delay(300);
                const response = await productApi.getAll(filters);
                const totalItems = filters.totalItems || response.totalItems;
                setProducts(response.data);
                setLoading(false);
                setPagination({
                    ...pagination,
                    count: Math.ceil(totalItems / filters._limit),
                    totalItems,
                });
            } catch (error) {
                console.error('Error fetching product data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [filters]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _page: page,
        }));
        setPagination(prevPagination => ({
            ...prevPagination,
            page,
        }));
        setCurrentPage(page);
    };

    const handleFiltersChange = (newFilters: Filters) => {
        setFilters({
            ...newFilters,
            _page: 1,
        });
        setPagination(prevPagination => ({
            ...prevPagination,
            page: 1,
            totalItems: newFilters.totalItems || prevPagination.totalItems,
        }));
        setCurrentPage(1);
    };

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [currentPage]);

    // Hàm xử lý khi thay đổi bộ lọc từ component Search
    const handleFilterChange = async (newFilters: { searchTerm: string }) => {
        try {
            setLoading(true);
            await delay(300);
            const response = await productApi.getAll({...filters, name: newFilters.searchTerm});
            const totalItems = filters.totalItems || response.totalItems;
            setProducts(response.data);
            setLoading(false);
            setPagination({
                ...pagination,
                count: Math.ceil(totalItems / filters._limit),
                totalItems,
            });
        } catch (error) {
            console.error('Error searching products:', error);
            setLoading(false);
        }
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className={cx('left')}>
                        <Paper elevation={3}>
                            <ProductFilters filters={filters} onChange={handleFiltersChange}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9} className={cx('right')}>
                        <Paper elevation={3}>
                            {loading ? (
                                <Loader/>
                            ) : (
                                <div className={cx('container')}>
                                    <div className={cx('row')}>
                                        {products.length > 0 ? (
                                            products.map(product => (
                                                <div key={product.id} className={cx('col-md-3 mb-3')}>
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
                                                                <button className={cx('btn', 'btn-secondary')}
                                                                        title="Thêm vào giỏ hàng">
                                                                    <FaShoppingCart/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className={cx('no-products')}>Không có sản phẩm nào.</div>
                                        )}
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
