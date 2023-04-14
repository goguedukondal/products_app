import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "red" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => {
            // {console.log(product)}
            return (
              <div className="cardStyle">
                <img
                  src={product.image}
                  alt="product_image"
                  width="200"
                  height="200"
                />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <Link to={`/productdetails/${product.id}`}>
                  <button>Product Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Products to Display</h2>
      )}
    </div>
  );
}

export default Products;
