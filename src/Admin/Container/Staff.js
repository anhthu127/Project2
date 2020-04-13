import React from 'react'
import StaffComponent from '../Components/Manager'

export default class Staff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <StaffComponent {...this.state} />
            </div>
        )
    }
}