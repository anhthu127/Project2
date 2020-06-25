import React from "react"
import Header from "../Component/Header"
import FooterOfHome from "../Component/FooterOfHome"
import { Row, Col } from 'react-bootstrap'
import '../../Styles/Cart.css'
import { domain } from '../../Constant'

export default class CartDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: window.sessionStorage.getItem('id')
        }

        const user = window.sessionStorage.getItem('user');
        if (!user) {
            window.location.href = "http://localhost:3000/Login";
        }
    }

    componentDidMount() {
        this.props.initLoad(this.state.user_id)
    }
    render() {
        let count = 0;
        let show;
        let data = this.props.cart;
        if (data) {
            data = data[0].product;
        }
        console.log('cart: ' + JSON.stringify(data));
        console.log('cart: ' + typeof (data));
        let temp = (window.sessionStorage.getItem('product' + count));
        if (data) {
            show =
                data.map((item, key) => {
                    // item=item.product
                    console.log(JSON.stringify(item))
                    return (
                        <Row key={key} className="initLoad">
                            <div style={{ width: '18%' }}  >{item.url} </div>
                            <div style={{ width: '32%' }}    >{item.name} {item.color}</div>
                            <div style={{ width: '14%' }}    >{item.price}</div>
                            <div style={{ width: '14%' }}    >
                                {item.quantity}
                            </div>
                            <div style={{ width: '5%' }}    ><button>Xoa</button> </div>
                        </Row>
                    )
                })
        }
        return (
            <div className="cart-page">
                <Header></Header>
                <section className="wrap-body-cart-page">
                    <div className="title-cart">
                        <h5>Giỏ hàng của bạn</h5>
                    </div>
                    <Col className="wrap-init">
                        {show}
                    </Col>
                    <div className="wrap-content">
                    </div>
                </section>
                <FooterOfHome></FooterOfHome>
            </div>
        )
    }
}