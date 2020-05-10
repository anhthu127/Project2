import React from 'react'
import { connect } from 'react-redux';
import * as action from "../Admin/Action/ProductAction"
import Products from "../Component/Products/Products"

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Products  {...this.props} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(action._GetListProduct())
        }
    }
}
const mapStateToProps = (store) => {
    return {
        product: store.uni.payload
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);