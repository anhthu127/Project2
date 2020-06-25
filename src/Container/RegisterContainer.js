import React from 'react';
import Register from "../Component/Account/Register"
import { connect } from 'react-redux';
import { _RefreshReducer } from '../Admin/Action/RefreshStore'

import * as action from '../Actions/ActionAccount'
import { data } from 'autoprefixer';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Register {... this.props} />
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    console.log("store: " + JSON.stringify(store.CusAccount.isLogin + ".... " + store.CusAccount.isLoading))
    console.log("store: "+JSON.stringify(store.CusAccount.res))
    return {
        data: store.CusAccount.res,
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
