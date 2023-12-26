import React from 'react'
import  { Button, ButtonGroup, Container, Navbar, NavbarBrand, Row,Col}  from 'react-bootstrap';
import Counter from './Components/Counter';
import Register from './Components/Register';
import Userlist from './Components/Userlist';
import Productlist from './Components/Productlist';

const App =() => {


  return (
    <>
      <Navbar expand='sm' bg='dark' >  
        <ButtonGroup  className='mx-auto' size='lg' >
          <Button variant='dark' href='#home' >Home </Button>
          <Button variant='dark' href='#store' >Store </Button>
          <Button variant='dark' href='#about'>About </Button>
         
        </ButtonGroup>
        <Button variant='dark' size='md' href='#cart'>Cart </Button>
  
      </Navbar>
      <Navbar expand='lg' bg='secondary' className='m-1 p-5' >
        <Container >
          <Row className='justify-content-md-center'></Row>
          <Col md='auto' lg={8} >
          <h1 className='text-white ' >The Generics</h1>
          </Col>
        
        </Container>
      </Navbar>
      {/* justify-content- */}
      {/* <Counter/> */}
      {/* <Register/> */}
      {/* <Userlist/> */}
      <Productlist/>
    </>
  )
} 
export default App;