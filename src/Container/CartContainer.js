import React from 'react'
import { connect } from 'react-redux';
import Cart from '../Component/Cart/Cart'
import * as action from "../Actions/CartAction"
class CartContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    // componentDidMount(){
    //     this.props.initLoad()
    // }
    render() {
        // console.log("container: " + JSON.stringify(this.props))
        return (
            <div>
                <Cart {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        cart: store.Cart.cart
    }
}
const mapDispatchToProps = (dispatch) => {
     return {
        initLoad: (data) => {
            dispatch(action.GetCart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);