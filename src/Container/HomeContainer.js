import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Home from '../Component/Home/Home';
import { connect } from 'react-redux';
import * as action from '../Actions/ActionHome'
class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: "",
            numProducts: "",
            category: {

            }
        }
    }

    render() {
        return (
            <div>
                <Home  {...this.props} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAdsProduct: () => {
            dispatch(action.getAdsProducts())
        }
    }
}
const mapStateToProps = (store) => {
    return {
        listProduct: store.home.listProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);