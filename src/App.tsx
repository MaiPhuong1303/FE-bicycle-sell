import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import { publicRoutes } from './routes';
import { ShoppingContextProvider } from "./components/contexts/ShoppingContext";
import Checkout from "./pages/Checkout/Checkout";
import Collection from "./pages/Collection/Collection"; // Import trang Collection
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation"; // Import trang xác nhận đơn hàng
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <ShoppingContextProvider> {/* Bao bọc ứng dụng với ShoppingContextProvider */}
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        })}
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/collection" element={<Collection />} /> {/* Đường dẫn đến Collection */}
                        <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Đường dẫn đến OrderConfirmation */}
                    </Routes>
                </div>
            </Router>
        </ShoppingContextProvider>
    );
}

export default App;