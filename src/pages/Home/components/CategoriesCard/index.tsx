import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { productRenderData } from '../../constants';

const cx = classNames.bind(style);

export function CategoriesCard() {
  return (
    <div className={cx('container')}>
      {productRenderData.map((category) => (
        <div className={cx('card')} key={category.title}>
          <img src={category.cardThumbnail} alt={category.title} className={cx('img')} />
          <div className={cx('overlay')}>
            <div className={cx('title')}>{category.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
