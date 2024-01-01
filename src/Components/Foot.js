import React from 'react';
import { Row, Col  } from "react-bootstrap";

const Foot = () => {
  return (
    <footer className="m-3  p-5" style={{ backgroundColor: "#56CCF2" }}>
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
  )
}

export default Foot
