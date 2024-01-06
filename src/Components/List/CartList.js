import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import { Button, CloseButton, Container, Form, Table } from 'react-bootstrap';

const CartList = () => {
    const {state:{cart},dispatch,setShow}=CartState();
    const [total,setTotal]=useState()
    
    useEffect(()=> {
      
      setTotal(cart.reduce((acc,cur) => acc+Number(cur.price)*cur.qty,0));
      
    },[cart])
if (cart.length===0 ||cart.length===undefined){
  setShow(false)
}
  return (
    <div>
      <Container className='col-4'  style={{position:'absolute',top:'60px' ,right:'10px',background:'Menu'}}>
       
      <CloseButton style={{marginLeft:'90%'}} onClick={()=>setShow(false)}/>
        <span className="fw-bold fs-3 text" style={{ marginLeft: "170px" }}>
          CART
        </span>
        <Table >
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          {cart.map((prod) => (
            <tbody key={prod.id}>
              <tr>
                <td>
                  <img
                    style={{ width: "30%" }}
                    src={prod.imageUrl}
                    alt={prod.title}
                  />
                  <span>{prod.title}</span>
                </td>
                <td className="p-4 fw-bold">{`$${prod.price}`}</td>
                <td className=" fw-bold">
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                  <Button
                    onClick={() =>
                      dispatch({ type:"REMOVE", payload: prod })
                    }
                    className="bg-danger"
                    variant="danger"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <span style={{marginLeft:"60%", fontSize:"22px", fontWeight:'bold'}}>Total{`. .$${total}`}</span>
        <Button style={{marginLeft:'30%', marginTop:'20px' , marginBottom:'10px', width:'150px'}}>Purches</Button>
      </Container>
    </div>
  )
}

export default CartList
