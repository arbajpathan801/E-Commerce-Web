import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { Button, Card, Row, Table } from "react-bootstrap";
import Context from "../ContextApis/Context";

const Cart = () => {
  const { cartElements, Total } = useContext(Context);

  const ModalOverlay = () => {
    return (
      <Card
        border="danger"
        className="fixed-end col-4 float-end position-relative"
        style={{
          position: "fixed",
          top: "10vh",
          backgroundColor: "transparent",
          padding: "1px",
          borderRadius: "14px",
          zIndex: "80",
          width: "35%",
          opacity: "1.5",
        }}
      >
        <Button
          className="btn-close"
          style={{ position: "relative", left: "90%" }}
        />

        <Row className="text-center p-3">
          <h1>CART</h1>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cartElements.map((item) => (
              <tr key={item.title}>
                <td className="w-50 h-50">
                  <img className="w-25 h-25" src={item.imageUrl} alt=""></img>{" "}
                  {item.title}
                </td>
                <td>{`$${item.price}`}</td>
                <td>
                  {item.quantity} <Button variant="danger">Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div
          style={{
            marginLeft: "70%",
            fontSize: "22px",
            fontFamily: "sans-serif",
          }}
        >{`Total....$${Total}`}</div>
        <div className="mx-auto m-3 p-3 w-50 ">
          <Button className="float-end">Purchase</Button>
        </div>
      </Card>
    );
  };
  const portalOverlay = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalOverlay />, portalOverlay)}
    </Fragment>
  );
};

export default Cart;
