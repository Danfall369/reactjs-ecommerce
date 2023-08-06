import React, { useState } from "react";
import Nav from "./nav";
import Rout from "./rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Productdetails from "./productdetail";

const App = () => {
  //product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  //filter product
  const [product, setProduct] = useState(Productdetails);
  const searchbtn = (product) => {
    const change = Productdetails.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };

  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
