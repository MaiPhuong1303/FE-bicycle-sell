// import About from '../pages/About';
// import Collection from '../pages/Collection/Collection';
// import Contact from '../pages/Contact';
// import Home from '../pages/Home';

import About from "../pages/About";
import Collection from "../pages/Collection/Collection";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Instruct from '../pages/Instruct';


hthuimport Login from "../pages/Login/login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Instruct from "../pages/Instruct";
import { SignUpPage } from "../pages/Signup/Signup";

//public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/instruct", component: Instruct },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUpPage },

  // { path: '/news', component: News },
  // { path: '/collection/thoi-trang-the-thao', component: Collection },
  // { path: '/collection/quan-ao-bong-da', component: Collection },
  // { path: '/collection/quan-ao-bong-chuyen', component: Collection },
  // { path: '/collection/trang-phuc-chay-bo', component: Collection },
  // { path: '/collection/phu-kien-the-thao', component: Collection },
  // { path: '/collection/do-clb-doi-tuyen', component: Collection },
  // { path: '/collection', component: Collection },
  // { path: '/product/:id', component: ProductDetails },
  // { path: '/search/:keyword', component: Search },
  // { path: '/account', component: Account },
  // { path: '/myorders', component: Account },
  // { path: '/order/:id', component: Account },
  // { path: '/login', component: Login },
  // { path: '/register', component: Register },
  // { path: '/password/forgot', component: ForgotPassword },
  // // { path: '/password/new', component: ForgotPassword },
  // { path: '/cart', component: Cart },
  // { path: '/checkout', component: Checkout },
  // { path: '/shipping', component: Checkout },
  // { path: '/order/confirm', component: Checkout },
  // { path: '/order/payment', component: Checkout },
  // { path: '/order/success', component: Checkout },
];

export { publicRoutes };


//public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/collection', component: Collection},
    {path: '/instruct', component: Instruct},
    {path: '/collection/xe-dap-the-thao', component: Collection},
    {path: '/collection/xe-dap-thoi-trang-thong-dung', component: Collection},
    {path: '/collection/xe-dap-tre-em', component: Collection},
    {path: '/collection/xe-dap-dien', component: Collection},
    {path: '/collection/phu-kien', component: Collection},
    // { path: '/search/:keyword', component: Search },
    // { path: '/account', component: Account },
    // { path: '/myorders', component: Account },
    // { path: '/order/:id', component: Account },
    // { path: '/login', component: Login },
    // { path: '/register', component: Register },
    // { path: '/password/forgot', component: ForgotPassword },
    // // { path: '/password/new', component: ForgotPassword },
    // { path: '/cart', component: Cart },
    // { path: '/checkout', component: Checkout },
    // { path: '/shipping', component: Checkout },
    // { path: '/order/confirm', component: Checkout },
    // { path: '/order/payment', component: Checkout },
    // { path: '/order/success', component: Checkout },
];


export {publicRoutes};

