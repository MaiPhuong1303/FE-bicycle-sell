import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import {publicRoutes} from './routes';
import { ShoppingContextProvider} from "./components/contexts/ShoppingContext";
import Checkout from "./pages/Checkout/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


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
                                            <Page/>
                                        </DefaultLayout>
                                    }
                                />
                            );
                        })}
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </Router>
        </ShoppingContextProvider>
    );
}

export default App;
