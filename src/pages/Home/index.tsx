import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { CategoriesCard, SlideBanner } from "./components";
import { CategoryLibrary } from "./components/CategoryLibrary";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../components/layouts/components/ProductItemCard/product";

const cx = classNames.bind(styles);

export type Category = {
  id: number;
  name: string;
  thumbnail: string;
  video?: string;
};

function Home() {
  const [productRenderData, setProductRenderData] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          "http://localhost:4000/products"
        ); // Updated to match your server port
        setProductRenderData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Category[]>(
          "http://localhost:4000/categories"
        ); // Updated to match your server port
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const mappedCategories = categories.map((category) => {
    const products = productRenderData
      .filter((product) => product.categories_id === category.id)
      .slice(0, 8);
    return { ...category, products };
  });

  console.log("mappedCategories", mappedCategories);

  return (
    <div className={cx("container")}>
      <SlideBanner />
      <div className="content-wrapper">
        <div className="item">
          {mappedCategories.map((category) => (
            <CategoryLibrary
              key={category.id}
              data={category.products}
              title={category.name}
              video={category.video}
              // href={category.href}
            />
          ))}
          <CategoriesCard categories={categories} />
        </div>
  );
}
export default Home;
