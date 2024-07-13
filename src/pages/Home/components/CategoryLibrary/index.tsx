import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

interface ICategoryLibraryProps {
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    urlImage: string;
  }[];
  title: string;
  banner?: string;
  href:string
}

export function CategoryLibrary({
  title,
  data,
  banner,
  href
}: ICategoryLibraryProps) {
  const handleAddToCart = () => {};
  return (
    <div>
      {banner && <div className={cx("banner")}>
        <img className={cx("banner-item")} src={banner} alt={title} />
      </div>}
      <div className={cx("categoryContainer")}>
        <h2 className={cx("heading")}>{title}</h2>
        <div className={cx("productGrid")}>
          {data.slice(0, 8).map((product) => (
            <div key={product.id} className={cx("productCard")}>
              <img src={product.urlImage} alt={product.name} />
              <div className={cx("productName")}>{product.name}</div>
              <div className={cx("productDescription")}>
                {product.description}
              </div>
              <div className={cx("productPrice")}>
                {product.price.toLocaleString()} VND
              </div>
              <button
                className={cx("addToCartButton")}
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Link to={href} className={cx("viewMore")}>
          View More Items
        </Link>
      </div>
    </div>
  );
}
