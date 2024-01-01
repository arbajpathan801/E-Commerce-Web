import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../NavbarComponent/Home";
import About from "../../NavbarComponent/About";
import Store from "../../NavbarComponent/Store";

const Head = () => {
 

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container className="text-center fw-bold fs-5">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
         
        </Container>
      </Navbar>

      <header
      style={{fontSize:'80px', fontFamily:'serif'}}
        className="text-center  pt-5 pb-2 text-white bg-secondary "
      >
        The Generics
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default Head;
