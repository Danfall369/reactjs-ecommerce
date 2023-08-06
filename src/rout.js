import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";

function Rout({ product, setProduct }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={<Product product={product} setProduct={setProduct} />}
        />
      </Routes>
    </>
  );
}

export default Rout;
