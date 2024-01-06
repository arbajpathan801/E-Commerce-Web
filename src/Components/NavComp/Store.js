import React from "react";
import { Button } from "react-bootstrap";
import ProductList from "../List/ProductList";
import CartList from "../List/CartList";
import { CartState } from "../Context/Context";

const Store = () => {
  const {state:{cart},show,setShow}=CartState();
  return (
    <div>
      <Button
        variant="outline-info"
        onClick={()=>setShow(true)}
        className="p-2 bg-dark text-white"
        style={{
          position: "absolute",
          right: "14px",
          top: "14px",
          fontFamily: "serif",
          borderRadius:'10px',
          fontSize:'14px'
        }}
      >
        CART
      </Button>
      <span
        className="text-info"
        style={{
          fontFamily: "serif",
          position: "absolute",
          right: "4px",
          top: "-4px",
          fontSize: "18px",
        }}
      >
        {cart.length}
      </span>
      <ProductList/>
     {show && <CartList/>}
    </div>
  );
};

export default Store;
