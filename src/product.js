import React from "react";
import Productdetails from "./productdetail";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./product.css";

const Product = () => {
  return (
    <>
      <div className="products">
        <h3># Productos</h3>
        <p>Inicio . Productos</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li>Bebidas</li>
                <li>Enlatados</li>
                <li>Harinas</li>
                <li>Lacteos</li>
                <li>Cereales</li>
                <li>Salsas y Aderezos</li>
                <li>Arroz</li>
                <li>Endulzantes</li>
                <li>Margarinas y Aceites</li>
                <li>Pastas</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {Productdetails.map((curlElm) => {
                return (
                  <>
                    <div className="box" key={curlElm.id}>
                      <div className="img_box">
                        <img src={curlElm.Img} alt={curlElm.Title} />
                        <div className="icon">
                          <li>
                            <AiOutlineShoppingCart />
                          </li>
                          <li>
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
