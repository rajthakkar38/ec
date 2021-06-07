import userRedux from "./user/user-redux";
import { combineReducers } from "redux";
import cartRedux from "./cart/cart-reducer";

export default combineReducers({ user: userRedux, cart: cartRedux });
