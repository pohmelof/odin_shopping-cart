import CardContainer from "./components/CardContainer";
import products from "./data/products";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer products={products}/>
    </div>
  );
}

export default App;
