import React, { useState } from "react";
import Nav from "./nav";
import Rout from "./rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Productdetails from "./productdetail";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  //add to cart
  const [cart, setCart] = useState([]);

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

  //add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      toast.error("Este producto ya se encuentra agregado al carrito");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Producto agregado al carrito");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
