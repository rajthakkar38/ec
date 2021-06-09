import ShopData from "./shopdata.js";

const Initial_State = {
  Shop_Data: ShopData,
};

const shopRedux = (state = Initial_State, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopRedux;
