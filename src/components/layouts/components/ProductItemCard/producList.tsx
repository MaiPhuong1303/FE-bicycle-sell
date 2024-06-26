// import React, {useEffect, useState} from 'react';
// import Box from '@mui/system/Box';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import classNames from 'classnames/bind';
// import styles from './ProductItemCard.module.scss';
// import Loader from '../Loader';
// import {Container} from '@mui/system';
// import {Grid, Paper} from '@mui/material';
// import productApi from '../../../../data/api/productAPI';
//
// const cx = classNames.bind(styles);
//
// function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await productApi.getAll({_page: 1, _limit: 10});
//                 console.log({response});
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
//                 setLoading(true);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     return (
//         <Box>
//             <Container>
//                 <Grid container spacing={2}>
//                     <Grid item className={cx('left')}>
//                         <Paper elevation={3}>left</Paper>
//                     </Grid>
//                     <Grid item className={cx('right')}>
//                         <Paper elevation={3}>
//                             {loading ? (<Loader/>) : (
//
//                             )}
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }
//
// export default ProductList;
// components/ProductList.tsx
import React, {useEffect, useState} from 'react';
import Box from '@mui/system/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './ProductItemCard.module.scss';
import Loader from '../Loader';
import {Container} from '@mui/system';
import {Grid, Paper, Skeleton, Typography} from '@mui/material';
import productApi from '../../../../data/api/productAPI';
import {Product} from './product';

const cx = classNames.bind(styles);

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await productApi.getAll({_page: 1, _limit: 12});
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
                <Grid container spacing={3}>
                    <Grid item className={cx('left')}>
                        <Paper elevation={3}>left</Paper>
                    </Grid>
                    <Grid item className={cx('right')}>
                        {/*<Paper elevation={3}>*/}
                        {/*    {loading ? (*/}
                        {/*        <Loader/>*/}
                        {/*    ) : (*/}

                        {/*        <div className={cx('row')}>*/}

                        {/*            <Box>*/}
                        {/*                <Grid container>*/}
                        {/*                    {products.map(product => (*/}
                        {/*                        // nếu đt thì 11 item,... lap màn lớn thì 4item*/}
                        {/*                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>*/}
                        {/*                            <Box padding={1}>*/}
                        {/*                                <div className={cx('card')}>*/}
                        {/*                                    <Typography*/}
                        {/*                                        variant="body1"><img src={product.urlImage}*/}
                        {/*                                                             className={cx('card-img-top')}*/}
                        {/*                                                             alt={product.name}/>*/}
                        {/*                                    </Typography>*/}
                        {/*                                    <Typography*/}
                        {/*                                        variant="body2">{product.name.length > 50 ? (product.name.substring(0, 50) + '...') : product.name}*/}
                        {/*                                    </Typography>*/}
                        {/*                                    <Typography*/}
                        {/*                                        variant="body2"><p className={cx('card-text')}>*/}
                        {/*                                        <strong>Price:*/}
                        {/*                                            ${product.price}</strong></p>*/}
                        {/*                                    </Typography>*/}
                        {/*                                </div>*/}
                        {/*                            </Box>*/}
                        {/*                        </Grid>*/}
                        {/*                    ))}*/}
                        {/*                </Grid>*/}
                        {/*            </Box>*/}

                        {/*        </div>*/}

                        {/*    )}*/}
                        {/*</Paper>*/}
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
                                                        <p className={cx('card-text')}><strong>Price:
                                                            ${product.price}</strong></p>
                                                        <a href="#" className={cx('btn btn-primary')}>Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductList;
