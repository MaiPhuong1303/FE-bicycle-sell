import classNames from 'classnames/bind';
import React from 'react';
import {Link} from 'react-router-dom';
import images from '../../../../../images/images';
import Login from '../../Login/login';
import Cart from '../../../../Cart/cart';
import Search from '../../Search/Search';
import styles from './MiddleHeader.module.scss';
import axiosInstance from '../../../../../data/api/axios';

const cx = classNames.bind(styles);

const MiddleHeader = () => {
    const handleFilterChange = (newFilters: { searchTerm: string }) => {
        axiosInstance.get('/products', {
            params: {
                name: newFilters.searchTerm,
            },
        })
            .then(response => {
                console.log('Filtered products: ', response.data);
                // Bây giờ chúng ta cần đưa sản phẩm đã lọc vào một trang khác
            })
            .catch(error => {
                console.error('Error searching products: ', error);
            });
    };

    return (
        <div className={cx('middle')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Shop hàng Nguyễn Duy Thanh"/>
                    </Link>
                </div>
                <div className={cx('information')}>
                    <div className={cx('box')}>
                        <p className={cx('title')}>0354560042</p>
                        <p className={cx('sub-title')}>Tư vấn miễn phí</p>
                    </div>
                    <div className={cx('box')}>
                        <p className={cx('title')}>FREE SHIPPING</p>
                        <p className={cx('sub-title')}>Đơn hàng trên 1 Triệu đồng</p>
                    </div>
                </div>
                <div className={cx('search')}>
                    {/* Truyền hàm handleFilterChange vào component Search */}
                    <Search onSubmit={handleFilterChange}/>
                </div>
                <div className={cx('action')}>
                    <div>
                        <Login/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;
