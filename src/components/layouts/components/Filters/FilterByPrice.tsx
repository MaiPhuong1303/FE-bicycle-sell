import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, TextField, Typography} from "@mui/material";
import classNames from 'classnames/bind';
import styles from './FilterByCategory.module.scss';
import {useDarkMode} from "../darkMode/DarkModeContext";

const cx = classNames.bind(styles);

interface FilterByPriceProps {
    onChange: (values: { price_gte: number; price_lte: number }) => void;
}

const predefinedRanges = [
    {label: 'Dưới 1M', price_gte: 0, price_lte: 999000},
    {label: '1M - 2M', price_gte: 1000000, price_lte: 2000000},
    {label: '2M - 3M', price_gte: 2000000, price_lte: 3000000},
    {label: '3M - 5M', price_gte: 3000000, price_lte: 5000000},
    {label: 'Trên 5M', price_gte: 5000001, price_lte: Infinity}
];

const FilterByPrice: React.FC<FilterByPriceProps> = ({onChange}) => {
    const [values, setValues] = useState({
        price_gte: 0,
        price_lte: 0,
    });
    const {isDarkMode} = useDarkMode();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        // Loại bỏ các số 0 không cần thiết ở đầu giá trị
        const numericValue = value === "" ? "0" : value.replace(/^0+/, "");

        setValues((prevValues) => ({
            ...prevValues,
            [name]: Number(numericValue),
        }));
    };

    const handleSubmit = () => {
        if (onChange) onChange(values);
        // Cuộn lên đầu trang
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const applyPredefinedRange = (range: { price_gte: number; price_lte: number }) => {
        setValues(range);
        if (onChange) onChange(range);
        // Cuộn lên đầu trang
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <Box className={cx('root')}>
            <Typography variant="subtitle2"
                        className={cx('title', {'dark': isDarkMode, 'light': !isDarkMode})}>
                Lọc theo giá
            </Typography>
            <Box className={cx('predefinedRanges')}>
                {predefinedRanges.map(range => (
                    <Box key={range.label} className={cx('rangeWrapper')}>
                        <Button
                            className={cx('rangeButton')}
                            variant="outlined"
                            onClick={() => applyPredefinedRange(range)}
                        >
                            {range.label}
                        </Button>
                    </Box>
                ))}
            </Box>
            <Box className={cx('inputWrapper')}>
                <TextField className={cx('item')}
                           name="price_gte"
                           type="number"
                           value={values.price_gte}
                           onChange={handleChange}
                           label="Từ"
                />
                <span>-</span>
                <TextField className={cx('item')}
                           name="price_lte"
                           type="number"
                           value={values.price_lte}
                           onChange={handleChange}
                           label="Đến"
                />
            </Box>
            <Button className={cx('button')} variant="outlined" color="primary" onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    );
};

export default FilterByPrice;
