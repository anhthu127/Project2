import React from "react"
import Header from "../Component/Header"
import FooterOfHome from "../Component/FooterOfHome"

export default class CartDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        const user = window.sessionStorage.getItem('user');
        if (!user) {
            window.location.href = "http://localhost:3000/Login";
        }
    }
    render() {
        let show= {}
        return (
            <div className="cart-page">
                <Header></Header>
                <section className="wrap-body-cart-page">
                    <div className="title-cart">
                    <h5>Giỏ hàng của bạn</h5>
                    </div>
                    <div className="wrap-content">
                    </div>
                </section>
                <FooterOfHome></FooterOfHome>
            </div>
        )
    }
}