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
import Loader from "../../components/layouts/components/Loader";
import RelatedProducts from "./RelatedProducts";  // Import component mới


const cx = classNames.bind(styles);
const ProductDetails = () => {
    const {keyword} = useParams<{ keyword: string }>();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();

    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [id]);

    return (
        <Box>
            <Container className={cx('container')}>
                <Grid item xs={12} md={9}>
                    <Paper elevation={3}>
                        <Container>
                            {loading ? (
                                <Loader/>
                            ) : (
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
                            )}
                        </Container>
                    </Paper>
                    {product && <RelatedProducts categories_id={product["categories_id"]}/>} {/* Thêm mục này */}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductDetails;
