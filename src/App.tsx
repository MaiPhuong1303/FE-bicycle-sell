import {setHeapSnapshotNearHeapLimit} from "node:v8";
import {useState} from "react";
import Header from "./layouts/Header";
import HomePage from "./shop/HomePage";
import Footer from "./layouts/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
