// src/components/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div style={{ marginLeft: "500px"  }}>
      <h2 style={{marginLeft:"100px"}} >Product Details</h2>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          width: "300px",
          border: "2px solid black",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "300px" }}
        />
        <h3>{product.title}</h3>
        <p>
          <span style={{fontWeight:"bold" }}>Price:-</span>${product.price}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Description:-</span>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
