import sportBicycle from "../../data/db.json";
import fashionBicycle from "../../data/db.json";
import childrentBicycle from "../../data/db.json";
import accessoriesBicycle from "../../data/db.json";
import electricBicycle from "../../data/db.json";

import sportBanner from "../../images/homePage/category-banner-1.jpeg";

import cardThumbnailSport from "../../images/homePage/card-thumbnail-sport-bicycle.webp";
import cardThumbnailFashion from "../../images/homePage/card-thumbnail-fashion-bicycle.webp";
import cardThumbnailChildrent from "../../images/homePage/card-thumbnail-children-bicycle.webp";
import cardThumbnailAccessories from "../../images/homePage/card-thumbnail-accessories-bicycle.jpeg";
import cardThumbnailElectric from "../../images/homePage/card-thumbnail-electric-bicycle.jpeg";

export const productRenderData = [
  {
    title: "Xe đạp thể thao",
    data: sportBicycle,
    cardThumbnail: cardThumbnailSport,
    href: "collection/xe-dap-the-thao",
  },
  {
    banner: sportBanner,
    title: "Xe đạp nhập khẩu",
    data: fashionBicycle,
    cardThumbnail: cardThumbnailFashion,
    href: "/collection/xe-dap-nhap-khau",
  },
  {
    banner: sportBanner,
    title: "Xe đạp trẻ em",
    data: childrentBicycle,
    cardThumbnail: cardThumbnailChildrent,
    href: "/collection/xe-dap-tre-em",
  },
  {
    banner: sportBanner,
    title: "Phụ kiện xe đạp",
    data: accessoriesBicycle,
    cardThumbnail: cardThumbnailAccessories,
    href: "/collection/phu-kien",
  },
  {
    banner: sportBanner,
    title: "Xe đạp điện",
    data: electricBicycle,
    cardThumbnail: cardThumbnailElectric,
    href: "/collection/xe-dap-dien",
  },
];
