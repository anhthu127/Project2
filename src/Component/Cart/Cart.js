import React from "react"
import Header from "../Component/Header"
import FooterOfHome from "../Component/FooterOfHome"
import { Row, Col, Alert } from 'react-bootstrap'
import '../../Styles/Cart.css'
import Unit from "../../Unit"
import { domain } from '../../Constant'
import { icon } from "@fortawesome/fontawesome-svg-core"

export default class CartDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: "",
            isPress: false,
            decrease: false,
            cart: {
                user_id: "",
                product: "",
                total_money: "",
                id: "",
            },
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
    async Increase(quantity) {
        console.log("increase: " + JSON.stringify(this.state.quantity))
        var temp = quantity;
        temp++;
        console.log("increase: " + temp)
        if (temp >= 0) {
            await this.setState({
                ...this.state,
                quantity: temp

            })
        }

        return this.state.quantity
    }

    async Decrease(quantity) {
        console.log("decrease: " + quantity)
        var temp = parseInt(quantity);
        temp--;

        if (temp > 0) {
            await this.setState({

                ...this.state,
                quantity: temp
            })
            console.log("decrease: " + this.state.quantity)

        } else {
            await this.setState({
                ...this.state,

                quantity: 1
            })
        }
        await this.setState({
            ... this.state,
            decrease: true
        })
        return this.state.quantity

    }
    async delete(data) {
        let new_product = [];
        let new_total = 0;
        let old_product = this.props.cart[0].product;

        old_product.map((item, key) => {
            if (item.product_id != data.product_id) {
                new_product.push(item)
                new_total += ((parseInt(item.price)) * (parseInt(item.quantity)))
            }
        })
        await this.setState({
            ... this.state,
            cart: {
                user_id: this.props.cart[0].user_id,
                product: new_product,
                total_money: new_total,
                id: this.props.cart[0].id,
            }
        })
        this.props.updateCart(this.state.cart)

    }

    render() {
        if (this.props.cart) {

            let subTotal = 0;
            let show;
            let data = this.props.cart[0].product;
            console.log('data ' + JSON.stringify(data))


            let price = [];
            let quantity = [];

            if (data) {
                show = data.map((item, key) => {
                    quantity[key] = item.quantity;

                    price.push(item.price * quantity[key])
                    subTotal += parseInt(price);
                    console.log("subTotal: " + JSON.stringify(subTotal))
                    return (
                        <div className="wrap-item-initLoad" key={key} >
                            <div style={{ width: '18%' }} className="cart-initLoad" > <img src={item.url}></img></div>
                            <div style={{ width: '18%' }} className="cart-initLoad" >
                                <span> {item.name} </span>
                                <br />
                                <span style={{ color: '#cfcfcf' }}>{item.color}</span>
                            </div>
                            < div style={{ width: '18%' }} className="cart-initLoad" > {Unit.formatCurrency(parseInt(item.price))} </div>
                            < div style={{ width: '14%' }} className="cart-initLoad" >
                                <button className="btn-change" onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        isPress: true,
                                    })
                                    this.Decrease(quantity[key])
                                }}> -</button>
                                <input className="cart-input" value={quantity[key]} onChange={(e) => {
                                    quantity[key] = e.target.value
                                }}></input>
                                <button className="btn-change" onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        isPress: true,

                                    })
                                    this.Increase(quantity[key])
                                }} > +</button>
                            </div>
                            < div style={{ width: '18%' }} className="cart-initLoad" > {Unit.formatCurrency(parseInt(item.price * quantity[key]))} </div>
                            <div style={{ width: '8%', borderRight: '1px solid #cfcfcf' }} className="cart-initLoad"
                                onClick={() => {
                                    this.delete(item)
                                }
                                }
                            >
                                <button style={{ background: '#ffffff', border: 'none' }}>
                                    <i className='fa fa-trash fa-1x' /></button>
                            </div >
                        </div >
                    )
                })
            }
            return (
                <div className="cart-page" >
                    <Header> </Header>
                    <section className="wrap-body-cart-page" >
                        <div className="title-cart" >
                            <h5 style={{ margin: 'auto', fontSize: '20px', fontWeight: '700' }}> Giỏ hàng của bạn </h5>
                        </div>
                        <div style={{ width: '100%', height: '30px' }}></div>
                        <div className=" wrap-table-cart" >
                            <Col className=" Row " >
                                <Row className="title-table" >
                                    <div style={{ width: '18%' }} className="title-item" > Ảnh sản phẩm </div>
                                    <div style={{ width: '18%' }} className="title-item" > Tên sản phẩm </div>
                                    <div style={{ width: '18%' }} className="title-item" > Đơn giá </div>
                                    < div div style={{ width: '14%' }} className="title-item" > Số lượng </div>
                                    <div div style={{ width: '18%' }} className="title-item" > Thành tiền </div>
                                    < div div style={{ width: '8%', borderRight: '1px solid #cfcfcf' }} className="title-item" > Xóa </div>
                                </Row>

                                <Row> {show} </Row>
                            </Col>
                        </div>
                        <div className="wrap-bottom-table" >
                            <div className="back-to-products">
                                <button onClick={() => {
                                    window.location.href = 'http://localhost:3000/products'
                                }} >Tiếp tục mua hàng
                            </button>
                            </div>
                            <div style={{ flexGrow: '6' }}></div>
                            <div className='sub-total'>
                                <div className="title-sub-total">Tổng tiền thanh toán</div>
                                <div className="content-sub-total">{(subTotal > 10) ? Unit.formatCurrency(subTotal) : ("0 đ")}</div>
                            </div>
                        </div>
                        <div className="btn-to-receipt">
                            <button onClick={() => {
                                window.location.href = 'http://localhost:3000/Checkout'
                                window.localStorage.setItem('total_receipt', subTotal)
                                console.log("Đặt hàng thành công")
                            }} >
                                Tiến hành thanh toán</button></div>
                        <div className="wrap-content" >
                        </div>
                    </section>
                    <FooterOfHome > </FooterOfHome>
                </div>
            )
        } else {
            return (
                <h1>Loading</h1>
            )
        }
    }
}