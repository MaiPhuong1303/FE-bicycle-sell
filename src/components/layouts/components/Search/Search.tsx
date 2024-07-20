import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

interface SearchProps {
    onSubmit?: (formValues: { searchTerm: string }) => void;
}

const Search: React.FC<SearchProps> = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef<any>(null); // Sử dụng useRef để lưu trữ timeout

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Xóa timeout hiện tại và tạo timeout mới
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value.trim(), // Lấy giá trị từ event change, loại bỏ khoảng trắng thừa
            };
            if (onSubmit) {
                onSubmit(formValues);
            }
        }, 300); // Thời gian chờ debounce, ví dụ 300ms
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!onSubmit) return;

        // Lấy giá trị từ state searchTerm và gửi đi
        const formValues = {
            searchTerm: searchTerm.trim(), // Lấy giá trị từ state searchTerm, loại bỏ khoảng trắng thừa
        };
        onSubmit(formValues);
    };

    return (
        <div className={cx('search')}>
            <form className={cx('form-search')} onSubmit={handleSubmit}>
                <div className={cx('search-icon')}>
                    <FontAwesomeIcon icon={faSearch} className={cx('icon')}/>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Tìm kiếm sản phẩm..."
                    />
                </div>
            </form>
        </div>
    );
};

export default Search;
