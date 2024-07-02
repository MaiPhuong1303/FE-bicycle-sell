import React from 'react';
import Box from "@mui/system/Box";
import FilterByCategory from "../Filters/FilterByCategory";

interface Filters {
    _page: number;
    _limit: number;
    categoryId?: number;
}

interface ProductFiltersProps {
    filters: Filters;
    onChange?: (newFilters: Filters) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({filters, onChange}) => {
    const handleCategoryChange = (newCategoryId: number) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            'categories_id': newCategoryId,
        };
        onChange(newFilters);
    };

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange}/>
        </Box>
    );
};

export default ProductFilters;
