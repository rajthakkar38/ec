export const toggleCart = () => ({
  type: "Toggle_Cart",
});

export const addItem = (item) => ({
  type: "Add_Item",
  payload: item,
});
