import React from "react"
import Header from "./Component/Header"
import FooterOfHome from "./Component/FooterOfHome"

export default class Receipt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className='wrap-receipt'>
                    abcabc
                </div>
                <FooterOfHome></FooterOfHome>
            </div>
        )
    }
}