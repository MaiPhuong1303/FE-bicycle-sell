import React, {useState} from 'react';
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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({searchTerm});
        }
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
