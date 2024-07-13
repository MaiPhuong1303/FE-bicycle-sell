import React, {useEffect, useState} from 'react';
import Box from "@mui/system/Box";
import FilterByCategory from "../Filters/FilterByCategory";
import productApi from "../../../../data/api/productAPI";
import {useNavigate} from "react-router-dom";

interface Filters {
    _page: number;
    _limit: number;
    categories_id?: number; // Sửa thành categories_id
    totalItems?: number;
}

interface ProductFiltersProps {
    filters: Filters;
    onChange?: (newFilters: Filters) => void;
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
                categories_id: newCategoryId, // Sửa thành categories_id
                _page: 1,
                totalItems: totalByCategory
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

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange}/>
        </Box>
    );
};

export default ProductFilters;
