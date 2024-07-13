import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { CategoriesCard, SlideBanner } from "./components";
import { CategoryLibrary } from "./components/CategoryLibrary";
import { productRenderData } from "./constants";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("container")}>
      <SlideBanner />
      <div className="content-wrapper">
        <div className="item">
          {productRenderData.map((category) => (
            <CategoryLibrary
              key={category.title}
              data={category.data}
              title={category.title}
              banner={category.banner}
              href={category.href}
            />
          ))}
          <CategoriesCard/>
        </div>
      </div>
    </div>
  );
}
export default Home;
