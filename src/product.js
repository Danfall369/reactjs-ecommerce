import React from "react";
import Productdetails from "./productdetail";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./product.css";

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const filterproduct = (product) => {
    const update = Productdetails.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetails);
  };

  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curlElm) => {
              return (
                <div className="productbox" key={curlElm.id}>
                  <div className="img-box">
                    <img src={curlElm.Img} alt={curlElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curlElm.Cat}</h4>
                    <h2>{curlElm.Title}</h2>
                    <p>{curlElm.Can}</p>
                    <h3>{curlElm.Price}</h3>
                    <button>Agregar al Carrito</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="products">
        <h3># Productos</h3>
        <p>Inicio . Productos</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>Todos Los Productos</li>
                <li onClick={() => filterproduct("Bebidas")}>Bebidas</li>
                <li onClick={() => filterproduct("Enlatados")}>Enlatados</li>
                <li onClick={() => filterproduct("Harinas")}>Harinas</li>
                <li onClick={() => filterproduct("Lacteos")}>Lacteos</li>
                <li onClick={() => filterproduct("Cereales")}>Cereales</li>
                <li onClick={() => filterproduct("Salsas y Aderezos")}>
                  Salsas y Aderezos
                </li>
                <li onClick={() => filterproduct("Arroz")}>Arroz</li>
                <li onClick={() => filterproduct("Endulzantes")}>
                  Endulzantes
                </li>
                <li onClick={() => filterproduct("Margarinas y Aceites")}>
                  Margarinas y Aceites
                </li>
                <li onClick={() => filterproduct("Pastas")}>Pastas</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curlElm) => {
                return (
                  <>
                    <div className="box" key={curlElm.id}>
                      <div className="img_box">
                        <img src={curlElm.Img} alt={curlElm.Title} />
                        <div className="icon">
                          <li onClick={() => addtocart(curlElm)}>
                            <AiOutlineShoppingCart />
                          </li>
                          <li onClick={() => view(curlElm)}>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curlElm.Cat}</p>
                        <h3>{curlElm.Title}</h3>
                        <h4>{curlElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
