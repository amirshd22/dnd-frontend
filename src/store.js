import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listProduct } from "./reducers/productReducer";
import {
  userLoginReducer,
  userDetailsReducers,
  userRegisterReducers,
  userUpdateDetailsReducers,
} from "./reducers/userReducer";
import getCookie from "./utils/getCookie";
const reducer = combineReducers({
  products: listProduct,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdate: userUpdateDetailsReducers,
});

const userInfoFromStorage = getCookie("userInfo")
  ? getCookie("userInfo")
  : null;

const initialState = {
  // cart: {
  //   cartItems: cartItemsFromStorage,
  //   shippingAddress: shippingAddressInfoFromStorage,
  // },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
