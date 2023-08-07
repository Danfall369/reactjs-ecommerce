import React, { useState } from "react";
import "./contact.css";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };

  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = users;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      "https://multitiendaseam-contact-default-rtdb.firebaseio.com/Message.json",
      options
    );
    if (res) {
      alert("Mensaje Enviado");
    } else {
      alert("Ocurrio un error");
    }
  };

  return (
    <>
      <div className="contact_container">
        <div className="contant">
          <h2># Ponte en contacto con nosotros</h2>
          <div className="form">
            <form method="POST">
              <input
                type="text"
                name="Name"
                value={users.name}
                placeholder="Nombre Completo"
                autoComplete="off"
                onChange={data}
                required
              />
              <input
                type="email"
                name="Email"
                value={users.Email}
                placeholder="Corre Electronico"
                autoComplete="off"
                onChange={data}
                required
              />
              <input
                type="text"
                name="Subject"
                value={users.Subject}
                placeholder="Dudas? Sugerencias? Reclamos?"
                autoComplete="off"
                onChange={data}
                required
              />
              <textarea
                name="Message"
                value={users.Message}
                placeholder="Cuentanos"
                autoComplete="off"
                onChange={data}
                required
              />
              {isAuthenticated ? (
                <button type="submit" onClick={senddata}>
                  Enviar
                </button>
              ) : (
                <button type="submit" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
