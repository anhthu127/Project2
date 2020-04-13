import React from 'react'
import ProductComponent from '../Components/Product'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ProductComponent {...this.state} />
            </div>
        )
    }
}