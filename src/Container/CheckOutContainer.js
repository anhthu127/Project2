import React from 'react'
import { connect } from 'react-redux';
import * as action from "../Actions/CartAction"
import Checkout from '../Component/Cart/CheckOut';
class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Checkout {...this.props} />
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
        },
        updateCart: (data) => {
            dispatch(action.UpdateCart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);