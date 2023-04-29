import React, { useContext } from "react";
import OrderItem from '../components/OrderItem';
import flechita from "@icons/flechita.svg";
import useInitialState from "../hooks/useInitialState.js";
import AppContext from "../context/AppContext.js";

//prueba
const MyOrder = () => {


  const { state:{cart}, addToCart } = useContext(AppContext);
  console.log(cart)

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
          <OrderItem cart={cart} key={cart.id}/>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
