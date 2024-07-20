import React, {useEffect, useState} from 'react';
import Box from '@mui/system/Box';
import {Typography} from '@mui/material';
import categoryAPI, {Category} from '../../../../data/api/categoryAPI';
import classNames from 'classnames/bind';
import styles from './FilterByCategory.module.scss';
import {useNavigate} from 'react-router-dom';

const cx = classNames.bind(styles);
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface FilterByCategoryProps {
    onChange?: (newCategoryId: number) => Promise<void>;
}

const FilterByCategory: React.FC<FilterByCategoryProps> = ({onChange}) => {
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = await categoryAPI.getAll({_page: 1, _limit: 12});
                setCategoryList(list);
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        };

        fetchData();
    }, []);

    const handleCategoryClick = async (category: Category) => {
        try {
            if (onChange) {
                await onChange(category.id);
            }
            setSelectedCategoryId(category.id);
            switch (category.name) {
                case 'Xe đạp thể thao':
                    navigate('/collection/xe-dap-the-thao');
                    break;
                case 'Xe đạp thời trang, thông dụng':
                    navigate('/collection/xe-dap-thoi-trang-thong-dung');
                    break;
                case 'Xe đạp trẻ em':
                    navigate('/collection/xe-dap-tre-em');
                    break;
                case 'Xe đạp điện':
                    navigate('/collection/xe-dap-dien');
                    break;
                case 'Phụ kiện xe đạp':
                    navigate('/collection/phu-kien');
                    break;
                default:
                    navigate('/collection');
                    break;
            }
        } catch (error) {
            console.error('Error handling category click', error);
        }
    };

    return (
        <Box className={cx('root')}>
            <Typography variant="subtitle2" className={cx('title')}>
                DANH MỤC SẢN PHẨM
            </Typography>
            <ul className={cx('menu')}>
                {categoryList.length > 0 ? (
                    categoryList.map((category) => (
                        <li
                            key={category.id}
                            className={cx('menuItem', {active: category.id === selectedCategoryId})}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <span className={cx('box')}>
                                <span className={cx('tick')}>&#10003;</span>
                            </span>
                            <Typography variant="body2" className={cx('name')}>
                                {category.name}
                            </Typography>
                        </li>
                    ))
                ) : (
                    <li>Không có danh mục nào</li>
                )}
            </ul>
        </Box>
    );
};

export default FilterByCategory;
