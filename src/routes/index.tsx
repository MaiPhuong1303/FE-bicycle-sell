// import About from '../pages/About';
// import Collection from '../pages/Collection/Collection';
// import Contact from '../pages/Contact';
// import Home from '../pages/Home';

import About from "../pages/About";
import Collection from "../pages/Collection/Collection";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Instruct from '../pages/Instruct';
import ProductDetails from "../pages/ProductDetails";
import Search from "../components/layouts/components/Search/Search";
import SearchResults from "../components/layouts/components/Search/SearchResults";
import Checkout from "../pages/Checkout/Checkout";
import OrderConfirmation from "../pages/OrderConfirmation/OrderConfirmation";

//public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/instruct', component: Instruct},
    {path: '/collection/xe-dap-the-thao', component: Collection},
    {path: '/collection/xe-dap-thoi-trang-thong-dung', component: Collection},
    {path: '/collection/xe-dap-tre-em', component: Collection},
    {path: '/collection/xe-dap-dien', component: Collection},
    {path: '/collection/phu-kien', component: Collection},
    {path: '/collection', component: Collection},
    {path: '/products/:id', component: ProductDetails},
    {path: '/search/:keyword', component: SearchResults},
    {path: '/checkout', component: Checkout},
    {path: '/order-confirmation', component: OrderConfirmation},

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
