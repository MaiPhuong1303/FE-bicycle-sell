import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { productRenderData } from '../../constants';
import { Category } from '../..';

const cx = classNames.bind(style);

export function CategoriesCard({categories}:{categories:Category[]}) {
  return (
    <div className={cx('container')}>
      {categories.map((category) => (
        <div className={cx('card')} key={category.id}>
          <img src={category.thumbnail} alt={category.name} className={cx('img')} />
          <div className={cx('overlay')}>
            <div className={cx('title')}>{category.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
