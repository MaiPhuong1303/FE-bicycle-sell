import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
const cx = classNames.bind(styles);


const Search = () => {
    return (
        <div className={cx('search')}>
            <form className={cx('form-search')}>
                <div className={cx('search-icon')}>
                    {/*<FontAwesomeIcon icon={faMagnifyingGlass}/>*/}
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                    <input placeholder="Tìm kiếm sản phẩm..."/>
                </div>
            </form>
        </div>
    );
};

export default Search;
