import React from 'react'
import * as action from "../Action/HomeAction"
import HomeAdmin from '../Components/HomeAdmin/HomeAdmin'
import { connect } from 'react-redux'
import { isBuffer } from 'util'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HomeAdmin {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        StaffAccount: state.homeAdmin.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    let count = 0;
    return {
        initLoad: () => {
            switch (window.location.href) {
                case "http://localhost:3000/admin/salary-staff":
                    dispatch(action._GetListStaffAccount());
                    // count++;
                    break;
                case "http://localhost:3000/admin/statistical":
                    break;
                case "http://localhost:3000/admin/suplier":
                    dispatch(action._GetListSuplier())
                    break;
                default:
                    break;
            }
            // if (count == 1) {
            // }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)