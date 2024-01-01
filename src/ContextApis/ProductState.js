import React, { useState } from "react";
import Context from "./Context";

const ProductState = (props) => {
  const [show, setShow] = useState(false);

  const List = {
    cartElements: [
      {
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
      },
      {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
      },
      {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
      },
    ],
    productsArr: [
      {
        title: "Colors",

        price: 100,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },

      {
        title: "Black and white Colors",

        price: 50,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },

      {
        title: "Yellow and Black Colors",

        price: 70,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },

      {
        title: "Blue Color",

        price: 100,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    ],
    Total: 220,
    setShow,
    show,
  };
  return <Context.Provider value={List}>{props.children}</Context.Provider>;
};

export default ProductState;
