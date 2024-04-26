import { createStore } from "redux";
import  bookingReducer from "./bookingReducer"

// To Do List : Pass a reducer function here
const store = createStore(bookingReducer);

export default store;