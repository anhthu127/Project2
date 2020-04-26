import Home from "./Home"
import { combineReducers } from "redux"
import UniProduct from "../Admin/Reducers/UniProduct"
import Customer from "../Admin/Reducers/CustomerAccount"
import HomeAdmin from "../Admin/Reducers/HomeAdmin"
import Account from "../Admin/Reducers/Account"
export default combineReducers({
    home: Home,
    uni: UniProduct,
    Cus: Customer,
    homeAdmin: HomeAdmin,
    Account: Account,
})