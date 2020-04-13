import React from 'react'
import ReceiptComponent from '../Components/Receipt'

export default class Manager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ReceiptComponent {...this.state} />
            </div>
        )
    }
}