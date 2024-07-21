import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

import banner1 from '../../../../images/homePage/banner-home-1.jpeg';
import banner2 from '../../../../images/homePage/banner-home-2.jpeg';
import banner3 from '../../../../images/homePage/banner-home-3.webp';

const cx = classNames.bind(style);

interface Banner {
  id: number;
  image: string;
}

const banners: Banner[] = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 }
];

export function SlideBanner(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startSlideShow();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    startSlideShow();
  };

  return (
    <div className={cx('slider')}>
      <div className={cx('slides')} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={cx('slide', { active: index === currentSlide })}
          >
            <img src={banner.image} alt={`Banner ${banner.id}`} className={cx('image')} />
          </div>
        ))}
      </div>
      <div className={cx('dots')}>
        {banners.map((_, index) => (
          <span
            key={index}
            className={cx('dot', { active: index === currentSlide })}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
