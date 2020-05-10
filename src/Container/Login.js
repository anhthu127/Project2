import React from 'react'
import { connect } from 'react-redux';
import * as action from "../Actions/ActionLogin"
import Login from '../Component/Account/Login';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Login {...this.state.props} />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        loginAccount: store.CusAccount.payload,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CheckLoginClient: () => {
            dispatch(action._clientLogin)
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);