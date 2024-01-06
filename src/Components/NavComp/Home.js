import React from "react";

import Playbtn from "../Playbtn";
import { Button, Container } from "react-bootstrap";
import TourList from "../List/TourList";

const Home = () => {

  return (
    <div>
      <div style={{ background: "#777", textAlign: "center" }}>
        <Button
          variant="outline-info"
          style={{
            background: "#777",
            width: "22%",
            color: "white",
            height: "56px",
            fontSize: "23px",
            fontFamily: "revert",
          }}
        >
          Get our Latest Album
        </Button>
        <Playbtn></Playbtn>
      </div>
      <Container
        className="p-5"
        style={{ fontFamily: "cursive", textAlign: "center" }}
      >
        <h1>TOURS</h1>
        
          <TourList/>
        
      </Container>
    </div>
  );
};

export default Home;
