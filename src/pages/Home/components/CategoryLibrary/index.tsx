import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import ProductItemCard from "../../../../components/layouts/components/ProductItemCard/ProductItemCard";
import { Product } from "../../../../components/layouts/components/ProductItemCard/product";

const cx = classNames.bind(style);

interface ICategoryLibraryProps {
  data: Product[];
  title: string;
  video?: string;
  href?: string;
}

export function CategoryLibrary({
  title,
  data,
  video,
  href,
}: ICategoryLibraryProps) {
  const handleAddToCart = () => {};
  return (
    <div>
      {video &&
      <div className={cx("videoContainer")}>
        <video
          className={cx("video")}
          autoPlay
          loop
          muted
          playsInline
          src={video}
        />
      </div>
      }
      <div className={cx("categoryContainer")}>
        <h2 className={cx("heading")}>{title}</h2>
        <div className={cx("productGrid")}>
          <div  className={cx("container")}>
            <div className={cx("row")}>
          {data.slice(0, 8).map((product) => (
                <ProductItemCard product={product} key={product.id} />
             
                // <div key={product.id} className={cx("productCard")}>
            //   <img src={product.urlImage} alt={product.name}/>
            //   <div className={cx("productName")}>{product.name}</div>
            //   <div className={cx("productDescription")}>
            //     {product.description}
            //   </div>
            //   <div className={cx("productPrice")}>
            //     {product.price.toLocaleString()} VND
            //   </div>
            //   {/*<button*/}
            //   {/*  className={cx("addToCartButton")}*/}
            //   {/*  onClick={() => handleAddToCart()}*/}
            //   {/*>*/}
            //   {/*  Add to Cart*/}
            //   {/*</button>*/}
            //   <button className={cx('btn', 'btn-secondary')}
            //           title="Thêm vào giỏ hàng">
            //     <FaShoppingCart/>
            //   </button>
            // </div>
          ))}
             </div>
                </div>
        </div>
        <Link to={""} className={cx("viewMore")}>
          View More Items
        </Link>
      </div>
    </div>
  );
}
