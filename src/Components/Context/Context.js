import React, { createContext, useContext, useReducer, useState } from 'react'
import Reducer from '../Reducer'


 const CartContext=createContext()
const Context = ({children}) => {
const [show, setShow]=useState(false)
  const [state,dispatch]=useReducer(Reducer,{
    cart:[]
  })

  return (
    <CartContext.Provider value={{state,dispatch,show,setShow}}>
      {children}
    </CartContext.Provider>
  )
}

export default Context
export const CartState=()=> {
    return useContext(CartContext)
}