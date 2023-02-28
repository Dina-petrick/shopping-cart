import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="Shop">
      <div className="container">
        <div className="products">
          {PRODUCTS.map((product, key) => (
            <Product data={product} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
