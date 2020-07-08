import React from 'react'
import { connect } from 'react-redux';
import * as action from "../Actions/CartAction"
import DetailProduct from '../Component/Products/DetailProduct'
class DetailProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <DetailProduct {...this.props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailProductContainer);