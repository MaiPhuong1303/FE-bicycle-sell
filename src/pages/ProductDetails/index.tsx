import React, {useState, useEffect} from 'react';
import Box from "@mui/system/Box";
import {Container} from "@mui/system";
import {Grid, Paper} from "@mui/material";
import classNames from 'classnames/bind';
import styles from './productDetails.module.scss';
import {useParams} from "react-router-dom";
import axiosInstance from "../../data/api/axios";
import ProductInfo from "./productInfo";
import ProductThumbnail from "./productThumbnail";
import HightLightItem from "./productThumbnail/hightLightItem";
import ProductDescription from "./productInfo/productDescription";


const cx = classNames.bind(styles);
const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        axiosInstance.get(`/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    return (

        <Box>
            <Container className={cx('container')}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className={cx('left')}>
                        <Paper elevation={3}>Left</Paper>
                    </Grid>

                    <Grid item xs={12} md={9} className={cx('right')}>
                        <Paper elevation={3}>
                            <Container>


                                <Grid container spacing={3}>

                                    <Grid item xs={12} md={5.5} className={cx('thumbnail')}>
                                        <Paper elevation={3}>
                                            {product && <ProductThumbnail product={product}/>}

                                        </Paper>
                                        {product && <ProductDescription product={product}/>}
                                    </Grid>
                                    <Grid item xs={12} md={6} className={cx('info')}>
                                        {product && <ProductInfo product={product}/>}
                                        {product && <HightLightItem product={product}/>}
                                    </Grid>
                                </Grid>


                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductDetails;



