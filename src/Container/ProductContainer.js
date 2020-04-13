import React from 'react'
import { connect } from 'react-redux';
import Products from "../Component/Products/Products"

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Products  {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);