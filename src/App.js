import React, { useState } from "react";
import Productlist from "./Components/Productlist";
import Cart from "./Components/Cart";
// import Rough from "./Overlay/Rough";
import ProductState from "./ContextApis/ProductState";
import Head from "./Components/Header/header";

const App = () => {
  return (
    <ProductState>
      {/* <Counter/> */}
      {/* <Register/> */}
      {/* <Userlist/> */}
      <Head></Head>
      {/* <Productlist /> */}
      {/* {show && <Cart hideCart={hideCart}/>} */}
    </ProductState>
  );
};
export default App;
