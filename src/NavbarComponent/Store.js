import React, { Component, useContext } from "react";
import { Button } from "react-bootstrap";
import Productlist from "../Components/Productlist";
import Cart from "../Components/Cart";
import Context from "../ContextApis/Context";

const Store = () => {
  const a = useContext(Context);
  console.log(a.show);
  return (
    <>
    <div className="bg-dark">
            <Button
            style={{
              position: "absolute",
              color: "#56CCF2",
              fontSize: " 18px",
              top: "5px",
              right: "2%",
            }}
              variant="dark"
              className="border-primary float-end"
              onClick={() => a.setShow(true)}
            >
              Cart{" "}
            </Button>
            <span
              style={{
                position: "absolute",
                color: "#56CCF2",
                fontSize: " 20px",
                top: "-5px",
                right: "1%",
              }}
            >
              3
            </span>
          </div>
    {/* <div classname="d-grid d-md-flex justify-content-md-end" >
    <Button variant="light"  className="me-md-2 border-primary" onClick={()=>a.setShow(true)} >Cart</Button>
   
  </div> */}
      <Productlist />
      {a.show && <Cart />}
    </>
  );
};
export default Store;
