import Home from "./Home"
import { combineReducers } from "redux"
import UniProduct from "../Admin/Reducers/UniProduct"
export default combineReducers({
    home:Home,
    uni: UniProduct,
})