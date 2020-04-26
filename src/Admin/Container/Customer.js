import React from 'react'
import * as action from "../Action/CustomerAction"
import CustomerComponent from '../Components/CustomerAccount/CustomerAccount'
import { connect } from 'react-redux'

class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CustomerComponent {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ListAccount: state.Cus.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(action._GetListAccount())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customer)