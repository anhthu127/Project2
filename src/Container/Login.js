import React from 'react'
import { connect } from 'react-redux';
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
           <Login></Login>    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mapStateToProps = (store) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);