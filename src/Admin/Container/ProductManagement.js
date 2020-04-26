import React from 'react'
import ProductManagement from '../Components/ProductManagement/ProductManagement'
import { connect } from 'react-redux'
import * as action from "../Action/ProductAction"

class Product extends React.Component {

    componentDidMount() {
        console.log("props: " + this.props)
        this.props.initLoad();
    }
    render() {
        return (
            <div>
                <ProductManagement {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("state: "+JSON.stringify(state.uni) )
    return {
        listUniProduct: state.uni.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(action._GetListUniProduct())
        },
        createUniProduct: (data) => {
            dispatch(action._CreateUniProduct(data))
        },
        updateUniProduct: (data) => {
            dispatch(action._UpdateUniProduct(data))
        },
        delUniProduct: (data) => {
            dispatch(action._DeleteUniProduct(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)