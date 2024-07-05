import React, {useEffect, useState} from 'react';
import Box from "@mui/system/Box";
import FilterByCategory from "../Filters/FilterByCategory";
import productApi from "../../../../data/api/productAPI";

interface Filters {
    _page: number;
    _limit: number;
    categoryId?: number;
    totalItems?: number;
}

interface ProductFiltersProps {
    filters: Filters;
    onChange?: (newFilters: Filters) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({filters, onChange}) => {
    const [totalProducts, setTotalProducts] = useState<number | null>(null);
    const [totalProductsByCategory, setTotalProductsByCategory] = useState<number | null>(null);

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
                'categories_id': newCategoryId,
                _page: 1,
                totalItems: totalByCategory
            };
            onChange(newFilters);
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
