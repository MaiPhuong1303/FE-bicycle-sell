import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header/Header';
import HomePage from './Shop/HomePage';
import Footer from './layouts/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <HomePage />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
