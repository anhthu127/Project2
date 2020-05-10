import React from 'react';
import Register from "../Component/Account/Register"
import { connect } from 'react-redux';
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
                <Register {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (data) => {
             dispatch(action._addNewAccoutn(data))

        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
