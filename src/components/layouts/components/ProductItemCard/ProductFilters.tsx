import React, {useEffect, useState} from 'react';
import Box from '@mui/system/Box';
import classNames from 'classnames/bind';
import FilterByCategory from '../Filters/FilterByCategory';
import FilterByPrice from '../Filters/FilterByPrice';
import productApi from '../../../../data/api/productAPI';
import {useNavigate} from 'react-router-dom';
import styles from './ProductItemCard.module.scss';
import {Paper} from "@mui/material";

const cx = classNames.bind(styles);

interface Filters {
    _page: number;
    _limit: number;
    categories_id?: number;
    totalItems?: number;
    price_gte?: number;
    price_lte?: number;
}

interface ProductFiltersProps {
    filters: Filters;
    onChange?: (newFilters: Filters) => void;
}

interface PriceRange {
    price_gte: number;
    price_lte: number;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({filters, onChange}) => {
    const [totalProducts, setTotalProducts] = useState<number | null>(null);
    const [totalProductsByCategory, setTotalProductsByCategory] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTotalProducts = async () => {
            try {
                const total = await productApi.countTotalProducts();
                setTotalProducts(total);
            } catch (error) {
                console.error('Failed to fetch total products', error);
            }
        };

        fetchTotalProducts();
    }, []);

    const handleCategoryChange = async (newCategoryId: number) => {
        if (!onChange) return;

        try {
            const totalByCategory = await productApi.countProductsByCategory(newCategoryId);
            setTotalProductsByCategory(totalByCategory);
            const newFilters = {
                ...filters,
                categories_id: newCategoryId,
                _page: 1,
                totalItems: totalByCategory,
            };
            onChange(newFilters);

            // Update URL based on category
            switch (newCategoryId) {
                case 1:
                    navigate('/collection/xe-dap-the-thao');
                    break;
                case 2:
                    navigate('/collection/xe-dap-thoi-trang-thong-dung');
                    break;
                case 3:
                    navigate('/collection/xe-dap-tre-em');
                    break;
                case 4:
                    navigate('/collection/xe-dap-dien');
                    break;
                case 5:
                    navigate('/collection/phu-kien');
                    break;
                default:
                    navigate('/collection');
                    break;
            }
        } catch (error) {
            console.error('Failed to fetch total products by category', error);
            setTotalProductsByCategory(null);
        }
    };

    const handlePriceChange = (values: PriceRange) => {
        if (onChange) {
            const newFilters = {
                ...filters,
                ...values,
                _page: 1 // Reset to first page whenever filters change
            };
            console.log('New filters:', newFilters);
            onChange(newFilters);
        }
    };

    return (
        <div>
            <div className="filter-container1">

                <Paper elevation={3}>
                    <FilterByCategory onChange={handleCategoryChange}/>

                </Paper>
            </div>
            <div className={cx('filter-container2')}>
                <Paper elevation={3}>
                    <FilterByPrice onChange={handlePriceChange}/>
                </Paper>
            </div>
        </div>
    );
};

export default ProductFilters;
