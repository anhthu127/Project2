import React from 'react'
import CustomerComponent from '../Components/Customer'

export default class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CustomerComponent {...this.state} />
            </div>
        )
    }
}