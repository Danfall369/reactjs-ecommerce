import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar, BsEye } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import Homeproduct from "./homeproduct";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const Home = ({ detail, view, close, setClose, addtocart }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

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
                    <h3>${curlElm.Price}</h3>
                    <button>Agregar al Carrito</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>Los Mejores Productos Al Mejor Precio</h2>
            <Link to="/product" className="link">
              Comprar <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/SlideImg.png" alt="SlideImage" width="500px" />
          </div>
        </div>
      </div>
      {/*             <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/Santoni Zafiro Arroz.jpg' alt='Products' />
                        </div>
                        <div className='detail'>
                            <p>61 Productos</p>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Envio Gratis</h3>
              <p>En compras mayores a 20$</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Devoluciones & Rembolsos</h3>
              <p>Garantía de devolución del dinero</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Descuentos para Miembros</h3>
              <p>En cada pedido</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Soporte Tecnico</h3>
              <p>Disponibles en todo momento</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Pruductos Destacados</h2>
        <div className="container">
          {Homeproduct.map((curlElm) => {
            return (
              <div className="box" key={curlElm.id}>
                <div className="img_box">
                  <img src={curlElm.Img} alt={curlElm.Title} />
                  <div className="icon">
                    {isAuthenticated ? (
                      <li onClick={() => addtocart(curlElm)}>
                        <AiOutlineShoppingCart />
                      </li>
                    ) : (
                      <li onClick={() => loginWithRedirect()}>
                        <AiOutlineShoppingCart />
                      </li>
                    )}
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
                  <h4>${curlElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>Ultimos Productos Agregados</h4>
            <h3>Panelada de Limon en Polvo</h3>
            <p>$ 5.99</p>
            <Link to="/product" className="link">
              Comprar Ahora <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://tucentralonline.com/la-guaira-53/wp-content/uploads/sites/5/2022/05/100829191.jpg"
              alt="slideimg"
              width="360px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
