import React from 'react'
import ManagerComponent from '../Components/Manager'

export default class Manager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ManagerComponent {...this.state} />
            </div>
        )
    }
}