import React from 'react'
import UniqueProduct from '../Components/UniProduct/UniqueProduct'
  import { connect } from 'react-redux'
import * as action from "../Action/UniProductAction"

class UniProduct extends React.Component {

    componentDidMount() {

        this.props.initLoad();
    }
    render() {
        return (
            <div>
                 <UniqueProduct {...this.props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(UniProduct)