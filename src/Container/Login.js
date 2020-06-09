import React from 'react'
import { connect } from 'react-redux';
import * as action from "../Actions/ActionLogin"
import LoginComponent from '../Component/Account/Login';
import { _RefreshReducer } from '../Admin/Action/RefreshStore'


class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <LoginComponent {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log("state: " + JSON.stringify(store.CusAccount.res))
    return {
        loginAccount: store.CusAccount.res,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (data) => {
            dispatch(action._clientLogin(data))
        },
        RefreshStore: () => {
            dispatch(_RefreshReducer())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);