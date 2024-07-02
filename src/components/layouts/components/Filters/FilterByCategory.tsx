import React, {useEffect, useState} from 'react';
import Box from "@mui/system/Box";
import {Typography} from "@mui/material";
import categoryAPI, {Category} from "../../../../data/api/categoryAPI"; // Import Category interface từ categoryAPI

interface FilterByCategoryProps {
    onChange?: (newCategoryId: number) => void;
}

const FilterByCategory: React.FC<FilterByCategoryProps> = ({onChange}) => {
    const [categoryList, setCategoryList] = useState<Category[]>([]); // Sử dụng Category từ categoryAPI

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Truyền tham số vào getAll để lấy danh sách các danh mục sản phẩm
                const list = await categoryAPI.getAll({_page: 1, _limit: 12});
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    }))
                )
                // console.log({response});
                // setCategoryList(response); // Cập nhật danh sách danh mục vào state
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        };

        fetchData();
    }, []);

    const handleCategoryClick = (category: Category) => {
        if (onChange) {
            onChange(category.id);
        }
    };

    return (
        <Box>
            <Typography> DANH MỤC SẢN PHẨM</Typography>
     
            <ul>
                {categoryList.length > 0 ? (
                    categoryList.map(category => (
                        <li key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</li>
                    ))
                ) : (
                    <li>Không có danh mục nào</li>
                )}
            </ul>
        </Box>
    );
};

export default FilterByCategory;
