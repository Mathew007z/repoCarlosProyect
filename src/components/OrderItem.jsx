import React from "react";
import "@styles/OrderItem.scss";
import iconClose from "@icons/icon_close.png";
import { useContext } from "react";
import AppContext from "../context/AppContext";


const OrderItem = () => {

  const { state:{cart}, addToCart } = useContext(AppContext);
console.log(cart)

  return (
    <div className="OrderItem">
         {cart.map((item,index) => (
          <li key={index}>
            <span>{item.title}</span>
            <span>${item.price}</span>
            <img src={item.images[0]} className='order-img'/>
          </li>
        ))}

      <img src={iconClose} alt="close" />
    </div>
  );
};

export default OrderItem;
