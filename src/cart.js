import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ cart, setCart }) => {
  // incrase qty
  const incqty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty + 1 }
          : curElm;
      })
    );
  };

  //decrease qty
  const decqty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty - 1 }
          : curElm;
      })
    );
  };

  //remoce cart product
  const removeproduct = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  //total price
  const Totaprice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );

  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Comprar Ahora
            </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((curElm) => {
            return (
              <div className="cart_item">
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>Precio: ${curElm.Price}</p>
                    <div className="qty">
                      <button className="decqty" onClick={() => decqty(curElm)}>
                        -
                      </button>
                      <input type="text" value={curElm.qty}></input>
                      <button className="incqty" onClick={() => incqty(curElm)}>
                        +
                      </button>
                    </div>
                    <h4 className="subtotal">
                      Sub Total: ${curElm.Price * curElm.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button onClick={() => removeproduct(curElm)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="totalprice">Total: $ {Totaprice} </h2>
            <button className="checkout">Facturar</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
