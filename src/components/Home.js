// src/components/Home.js
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../components/Style.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = product => {
    addToCart(product);
  };

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  // Filter products based on the entered search input
  const filteredProducts = products.filter(product =>
    product.id.toString().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <center>
        <h2>Products</h2>
        <input
          className="search"
          type="text"
          placeholder="Search by ID"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <Link to="/cart">
          <button className="ViewCart">View Cart</button>
        </Link>
      </center>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              margin: "10px",
              padding: "10px",
              width: "200px",
              border: "2px solid black",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px" }}
            />
            <div style={{ height: "120px" }}>
              <h3>{product.title}</h3>
            </div>
            <p>
              <span style={{ fontWeight: "bold" }}>Price:</span>${product.price}
            </p>
            <button
              className="AddCartBtn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`}>
              <button className="ViewDetails">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
