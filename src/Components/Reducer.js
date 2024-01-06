const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
     
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };

    default:
      return state;
  }
};

export default Reducer;
