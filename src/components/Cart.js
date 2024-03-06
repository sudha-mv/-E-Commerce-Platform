// src/components/Cart.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../components/Style.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.map(item => (
          <div
            key={item.id}
            style={{
              margin: "10px",
              padding: "10px",
              width: "200px",
              border: "2px solid black",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{item.title}</h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Price:-</span> ${item.price}
            </p>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="continue">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Cart;
