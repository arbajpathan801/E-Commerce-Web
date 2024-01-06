import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { CartState } from "../Context/Context";
import CartList from "./CartList";

const ProductList = () => {
  const products = [
    {
      id: Math.random(),
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      inStock: 5,
    },

    {
      id: Math.random(),
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      inStock: 5,
    },

    {
      id: Math.random(),
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      inStock: 5,
    },

    {
      id: Math.random(),
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      inStock: 5,
    },
  ];
  const {
    state: { cart },
    dispatch,
    setShow,
    show,
  } = CartState();
  console.log(cart);
  return (
    <div>
      <Row xs={2} md={2} className="mx-auto">
        {products.map((prod) => (
          <Col
            className=" mb-5 justify-content-sm-between"
            key={prod.title}
            id={prod.title}
          >
            <Card border="light" className="w-50 m-5 mx-auto">
              <header className="text-center pt-3 pb-3">
                <h3>{prod.title}</h3>
              </header>
              <Card.Img className=" p-2" src={prod.imageUrl} alt=""></Card.Img>
              <footer className="m-3">
                <span className="">
                  {`$${prod.price}`}
{cart.some(p=>p.id===prod.id)?(<Button
                    variant="danger"
                    className="float-end"
                    onClick={() => dispatch({ type: "REMOVE", payload: prod })}
                  >
                    REMOVE FROM CART
                  </Button>):(<Button
                    variant="info"
                    className="float-end"
                    onClick={() => dispatch({ type: "ADD", payload: prod })}
                  >
                    ADD TO CART
                  </Button>)}
                  
                </span>
              </footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={() => setShow(true)}>
          See the Cart
        </Button>
        {show && <CartList />}
      </div>
    </div>
  );
};

export default ProductList;
