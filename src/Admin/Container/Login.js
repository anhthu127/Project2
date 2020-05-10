import React from 'react'
import * as action from "../Action/LoginAction"
import { connect } from 'react-redux'
import Login from "../Components/Login/Login"
import { refresh_store_request } from '../../Constant'
import { _RefreshReducer } from '../Action/RefreshStore'

class HomeAdmin extends React.Component {

    render() {
        return (
            <div>
                <Login {...this.props} />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state: " + JSON.stringify(state.Account.payload))
    return {
        StaffAccount: state.Account.payload

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        CheckLogin: (data) => {
            console.log("container: " + JSON.stringify(data))
            dispatch(action._LoginAccount(data))
        },
        RefreshStore: () => {
            dispatch(_RefreshReducer())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeAdmin)
