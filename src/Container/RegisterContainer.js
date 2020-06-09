import React from 'react';
import Register from "../Component/Account/Register"
import { connect } from 'react-redux';
import { _RefreshReducer } from '../Admin/Action/RefreshStore'

import * as action from '../Actions/ActionAccount'

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Register {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    console.log("store: " + JSON.stringify(store.CusAccount.isLogin + ".... " + store.CusAccount.isLoading))
    return {
        data: store.CusAccount.res,
        isLogin: false,
        // store.CusAccount.isLogin,
        isLoading: true

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (data) => {
            dispatch(action._addNewAccoutn(data))

        },
        refreshStore: () => {
            dispatch(_RefreshReducer())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
