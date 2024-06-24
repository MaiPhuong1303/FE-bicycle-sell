import React, {useEffect, useState} from 'react';
import Box from '@mui/system/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './ProductItemCard.module.scss';
import Loader from '../Loader';
import {Container} from '@mui/system';
import {Grid, Paper} from '@mui/material';
import productApi from '../../../../data/api/productAPI';

const cx = classNames.bind(styles);

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await productApi.getAll({_page: 1, _limit: 10});
                console.log({response});
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
                setLoading(true);
            }
        };

        fetchData();
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item className={cx('left')}>
                        <Paper elevation={3}>left</Paper>
                    </Grid>
                    <Grid item className={cx('right')}>
                        <Paper elevation={3}>
                            {loading ? <Loader/> : null}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductList;
