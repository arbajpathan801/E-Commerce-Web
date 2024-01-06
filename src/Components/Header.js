import React from 'react'
import { Navbar } from 'react-bootstrap'
import { BrowserRouter,  Link,  Route, Routes } from 'react-router-dom'
import Home from './NavComp/Home'
import Store from './NavComp/Store'
import About from './NavComp/About'

const Header = () => {
  return (
    <BrowserRouter>
      <Navbar className='bg-dark 'style={{fontFamily:'serif'}} >
        <Navbar.Brand className='mx-auto fs-4' >
         <Link to='/home' className='text-white ' style={{paddingRight:'50px'}}> Home</Link>
         <Link to='/'className='text-white' style={{paddingRight:'50px'}}>Store</Link>
         <Link to='/about'className='text-white' style={{paddingRight:'50px'}}>About</Link>
        </Navbar.Brand>
      
      </Navbar>
      <div className='text-center text-white' style={{height:'120px',background:'#777',fontFamily:'serif',paddingBottom:'15%'}}> 
      <h1 style={{fontSize:'100px',fontWeight:'bold'}}>The Generics</h1>
       
      </div>
      <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/' element={<Store/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            </Routes>
    </BrowserRouter>
    
  )
}

export default Header
