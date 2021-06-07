const Initial_State = {
  hidden: true,
  cart: [],
};

const addItem = (prevcart, newcart) => {
  const exists = prevcart.find((cartItems) => cartItems.id === newcart.id);

  if (exists) {
    return prevcart.map((c) =>
      c.id === newcart.id ? { ...c, quantity: c.quantity + 1 } : c
    );
  } else {
    return [...prevcart, { ...newcart, quantity: 1 }];
  }
};

const cartRedux = (state = Initial_State, action) => {
  switch (action.type) {
    case "Toggle_Cart":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "Add_Item":
      return {
        ...state,
        cart: addItem(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default cartRedux;
