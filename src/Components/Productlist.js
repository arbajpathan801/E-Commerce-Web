import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Productlist = () => {
  const productsArr = [
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
  ];

  return (
    <>
      <Row xs={4} md={2} className=" g-4 m-5">
        {productsArr.map((item) => (
          <Col className=" mb-5 ">
            <Card border="light">
              <header className="text-center pt-5">
                <h3>{item.title}</h3>
              </header>
              <Card.Img
                style={{
                  paddingTop: "5%",
                  paddingLeft: "20%",
                  paddingRight: "20%",

                  paddingBottom: "20%",
                }}
                src={item.imageUrl}
                alt=""
              ></Card.Img>
              <footer
                style={{ paddingLeft: "18%", position: "absolute", top: "95%" }}
              >
                <h6>{`$${item.price}`}</h6>{" "}
              </footer>
              <Button
                style={{
                  backgroundColor: "#56CCF2",
                  marginLeft: "60%",
                  marginTop: "-15%",
                  marginRight: "18%",
                }}
              >
                {" "}
                ADD TO CART
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mb-4">
        <Button variant="secondary">See the Cart</Button>
      </div>
      <footer className="m-4 p-5" style={{ backgroundColor: "#56CCF2" }}>
        <Row>
          <Col xs={2} md={8}>
            <h1 className="text-white">The Generics</h1>
          </Col>
          <Col xs={2} md={1}>
            <a href="https://www.youtube.com">
              {" "}
              <img
                style={{ width: "100%", height: "50%" }}
                src="https://freelogopng.com/images/all_img/1656501415youtube-png-logo.png"
                alt=""
              ></img>
            </a>
          </Col>
          <Col md={1}>
            <a href="https://spotify.com">
              {" "}
              <img
                style={{ width: "100%", height: "50%" }}
                src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
                alt=""
              ></img>
            </a>
          </Col>
          <Col xs={2} md={1}>
            <a href="https://facebook.com">
              {" "}
              <img
                style={{ width: "100%", height: "50%" }}
                src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
                alt=""
              ></img>
            </a>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Productlist;
