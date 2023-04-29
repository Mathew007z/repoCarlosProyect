import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import useInitialState from "../hooks/useInitialState";
const ProductItem = ({ product }) => {
  const { state:{cart}, addToCart } = useContext(AppContext);


  const handleAddToCart = (product) => {
    addToCart(product);
  };


  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleAddToCart(product)}>
          <img src={addToCartImage} alt="add" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
