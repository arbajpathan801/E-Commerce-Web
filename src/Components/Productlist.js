import React, { useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Context from "../ContextApis/Context";
import Foot from "./Foot";


const Productlist = () => {
const {productsArr} = useContext(Context)
// console.log (productsArr)
  return (
    <>
      <Row xs={2} md={2} className="mx-auto">
        {productsArr.map((item) => (
          <Col className=" mb-5 justify-content-sm-between"  key={item.title}>
            <Card border="light" className="w-50 m-5 mx-auto">
              <header className="text-center pt-3 pb-3">
                <h3>{item.title}</h3>
              </header>
              <Card.Img className=" p-2" src={item.imageUrl} alt=""></Card.Img>
              <footer className="m-3">
                <h6 className="">
                  {`$${item.price}`}{" "}
                  <Button className="float-end"> ADD TO CART</Button>
                </h6>{" "}
              </footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mb-4">
        <Button variant="secondary" >
          See the Cart
        </Button>
      </div>

      <Foot/>
    </>
  );
};

export default Productlist;
