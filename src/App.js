import React, { useState } from "react";
import Nav from "./nav";
import Rout from "./rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Productdetails from "./productdetail";

const App = () => {
  const [product, setProduct] = useState(Productdetails);
  const searchbtn = (product) => {
    const change = Productdetails.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
