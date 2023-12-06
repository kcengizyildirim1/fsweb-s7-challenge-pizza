import React from "react";
import { productData } from "../Datas/ProductData";
import "./Product.css";

const Product = () => {
  return (
    <>
      {productData.map((urun, i) => (
        <div className="product-container" key={i}>
          <h3>{urun.title}</h3>
          <div className="product-props">
            <span id="price">
              <b>{urun.price}₺</b>
            </span>
            <span id="rate">{urun.rate}</span>
            <span>({urun.comment})</span>
          </div>
          <p>{urun.description}</p>
        </div>
      ))}
    </>
  );
};

export default Product;
