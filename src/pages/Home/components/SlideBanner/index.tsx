import Slider from 'react-slick';
import classNames from 'classnames/bind';
import style from './style.module.scss';

import banner1 from '../../../../images/homePage/banner-home-1.jpeg';
import banner2 from '../../../../images/homePage/banner-home-2.jpeg';
import banner3 from '../../../../images/homePage/banner-home-3.webp';


const cx = classNames.bind(style);

const banners = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2},
  { id: 3, image: banner3}
];

export function SlideBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={cx('slider')}>
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id} className={cx('banner')}>
            <img src={banner.image} alt={banner.id.toString()} className={cx('image')}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
