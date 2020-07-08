import React from "react"
import Header from "../Component/Header"
import FooterOfHome from "../Component/FooterOfHome"
import "../../Styles/Checkout.css"
import { Col, Row, Image, Alert } from "react-bootstrap"
import Address from './Selector'
import Unit from '../../Unit'
import { domain } from '../../Constant'
import NewReceipt from "../../FetchAPI/AddReceipt"
import deleteCart from "../../FetchAPI/deleteCart"
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            delevery: {
                fullname: "",
                email: "",
                phoneNum: "",
                address: "",
                provine: "",
                city: "",
                product: "",
                subtotal: "",
            },
            basicInfo: {
                fullname: "",
                email: "",
                phone: "",
                address: "",
            },
            formErrors: {
                fullname: "",
                phone: "",
                email: "",
                address: "",

            },
            nonreceipt: "block",
            receipt: "none",
        }
    }
    componentDidMount() {
        this.props.initLoad(window.sessionStorage.id);
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            basicInfo: {
                ...this.state.basicInfo,
                [name]: value,
            }
        })
        console.log("basicInfo: " + JSON.stringify(this.state.basicInfo))
        let formErrors = this.state.formErrors;
        switch (name) {
            case "fullname":
                if (formErrors.fullname = value.length < 3) {
                    formErrors.firstName = "Họ và tên"
                } else { formErrors.firstName = "" }
                break;
            case "phone":
                formErrors.phone =
                    (value.length <= 10) ? "" : "Điền số điện thoại có 10 chữ số";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Địa chỉ Email không hợp lệ";
                break;
            case "address":
                formErrors.address =
                    value.length > 3 ? "" : "Vui lòng nhập địa chỉ";
                break;
            default:
                break;
        }
    };

    async submitBtn() {
        let res;
         await this.setState({
            ... this.state,
            delevery: {
                ...this.state.delevery,
                product: this.props.cart[0].product,
                fullname: this.state.basicInfo.fullname,
                email: this.state.basicInfo.email,
                phoneNum: this.state.basicInfo.phone,
                address: this.state.basicInfo.addressm,

            }
        })
        if (this.state.basicInfo.fullname.length > 3 && this.state.basicInfo.email.length > 7 && this.state.basicInfo.phone.length == 10 && this.state.basicInfo.address.length > 3) {
            res = NewReceipt(this.state.delevery);
 
        } else {
            alert("Điền đầy đủ thông tin vận chuyển!")
        }
        if (res) {
            alert("Đặt hàng thành công!")
            await this.setState({
                delevery: {
                    ...this.state.delevery,
                    product:"",
                    fullname: this.state.basicInfo.fullname,
                    email: this.state.basicInfo.email,
                    phoneNum: this.state.basicInfo.phone,
                    address: this.state.basicInfo.addressm,
    
                }
            })
            // await this.props.updateCart(this.state.delevery)
            await this.setState({
                ... this.state,
                nonreceipt: "none",
                receipt: "block"
            })
            window.location.href="http://localhost:3000"
        }
     }
    render() {
        let a = "../../Images/";
        let url;
        let show;
        let count = 0
        let data;
        let price = [];
        // console.log("hii: " + JSON.stringify(this.props.cart) + '  ' + typeof (a))

        if (this.props.cart) {
            console.log(this.props.cart)
            this.props.cart.forEach(element => {
                data = element;
            })
            data = data.product
        }
        if (data) {
            show = data.map((item, key) => {
                url = a.concat(item.url)
                count += parseInt(item.quantity);
                price.push(parseInt(item.quantity) * parseInt(item.price))
                console.log("url : " + JSON.stringify(a + item.url))
                return (
                    <Row key={key} className='item' style={{ margin: '0px' }}>
                        <div className='wrap-image-summary'>
                            <img className='product-thumbnail-img' src={require('../../Images/may-no.jpg')} />
                            <div className='wrap-product-quantity'>
                                <span className='product-quantity'> {item.quantity}</span>
                            </div>

                        </div>
                        <div className='wrap-name-summary'>
                            <span className='name '>{item.name}
                            </span>
                            <br />
                            <span className='color'>{item.color}</span>
                        </div>
                        <div className='wrap-price-summary'>
                            {(item.price > 10) ? <span className='price'>{Unit.formatCurrency(parseInt(item.price))}</span> : ('0 đ')}
                        </div>
                    </Row>
                )
            })
        }
        let subtotal = 0;
        for (let index = 0; index < price.length; index++) {
            subtotal += price[index];
        }

        const { formErrors } = this.state;
        return (
            <div className='wrap-checkout-page'  >
                <Header></Header>
                <section className='wrap-content-checkout'>
                    <Row className='table-row'>
                        <Col style={{ height: ' 500px', padding: '0px' }}>
                            <div className='title-col-1'>Thông tin mua hàng</div>
                            <div className='wrap-fullname'>
                                <div className='wrap-item' >
                                    <input className={formErrors.fullname.length > 0 ? "error" : null} name='fullname'
                                        onChange={this.handleChange} placeholder='Họ và tên'></input>
                                    {formErrors.fullname.length > 0 && (
                                        <span className="errorMessage">{formErrors.fullname}</span>)}
                                </div>
                                <div className='wrap-item'>
                                    <input className={formErrors.email.length > 0 ? "error" : null} name='email'
                                        onChange={this.handleChange} placeholder='Email'></input>
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>)}
                                </div>
                                <div className='wrap-item'>
                                    <input className={formErrors.phone.length > 0 ? "error" : null} name='phone'
                                        onChange={this.handleChange} placeholder='Số điện thoại'></input>
                                    {formErrors.phone.length > 0 && (
                                        <span className="errorMessage">{formErrors.phone}</span>)}
                                </div>
                                <div className='wrap-item'>
                                    <input className={formErrors.address.length > 0 ? "error" : null} name='address'
                                        onChange={this.handleChange} placeholder='Địa chỉ'></input>
                                    {formErrors.address.length > 0 && (
                                        <span className="errorMessage">{formErrors.address}</span>)}
                                </div>
                                <Address />
                            </div>
                        </Col>
                        <Col style={{ height: ' 500px', padding: '0px', paddingRight: '20px' }}>
                            <div className='wrap-delevery'>
                                <div className='payment-header'>
                                    Vận chuyển
                                </div>
                                <div className='wrap-content-delevery'>
                                    <input className='radio-input' type='radio' checked></input>
                                    <label className='radio-title'>Giao hàng tận nơi</label>
                                    <h5 className='money-delevery'>{Unit.formatCurrency(40000)}</h5>
                                </div>
                            </div>

                            <div className='wrap-payment-method'>
                                <div className='payment-header'>
                                    Thanh toán
                                </div>
                                <div className='payment-content'>
                                    <div className='choosen-radio'>
                                        <input className='radio-input' type='radio' checked></input>
                                        <label className='radio-title'>Thanh toán khi nhận hàng (COD)</label>
                                        <i className='fa fa-money payment-icon-fa fa-1x' aria-hidden='true' style={{ color: '#1990c6' }} />
                                    </div>
                                    <div className='blank-slate'>
                                        <h5>Bạn chỉ thanh toán khi đã nhận hàng</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='side-bar' style={{ padding: '0px' }}>
                            <div className='title-side-bar' style={{display: this.state.nonreceipt}} >
                                Đơn hàng
                                    <span  >{' ('}  {count} sản phẩm )</span>
                            </div>
                            <div className='title-side-bar' style={{display: this.state.receipt}}>
                               Hóa đơn đặt hàng
                                     
                            </div>
                        <div style={{ width: '100%', height: '20px' }}></div>
                        <div className='wrap-order-summary'>
                            <div className='list-item'>
                                {show}
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '20px' }}></div>
                        <div className='wrap-total-receipt '>

                            <div className='wrap-price'>
                                <div style={{ width: '100%', height: '20px' }}></div>
                                <div className='wrap-sub-total'>
                                    <span className='total'>Tạm tính </span>
                                    <span style={{ width: '50px', height: '30px' }}></span>
                                    <span className='total-price'>  {Unit.formatCurrency(parseInt(subtotal))}</span>
                                </div>
                                <div className='wrap-shipping'>
                                    <span className='shipping'>Phí vận chuyển</span>
                                    <span style={{ width: '50px', height: '30px' }}></span>
                                    <span className='shipping-price'> {Unit.formatCurrency(parseInt(40000))}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '20px' }}></div>
                        <div className='wrap-total-receipt '>
                            <span className='title-receipt'>Tổng cộng: </span>
                            <span style={{ width: '30px', height: '30px' }}></span>
                            <span className='price-receipt'>{Unit.formatCurrency((parseInt(subtotal) + parseInt(40000)))
                            }</span>
                        </div>
                        <div style={{ width: '100%', height: '20px' }}></div>
                        <div className='btn-btn-action'>

                            <a href='http://localhost:3000/cart' className='link-1'> {'<'} Quay về giỏ hàng</a>
                            <button className='btn-2' style={{display:this.state.nonreceipt}}
                                onClick={async () => {
                                    await this.setState({
                                        ...this.state,
                                        delevery: {
                                            ...this.state.delevery,
                                            subtotal: subtotal
                                        }
                                    })
                                    console.log("subtotal: " + this.state.delevery.subtotal)
                                    this.submitBtn();
                                }}

                            >Đặt hàng</button>
                        </div>

                        </Col>
                    </Row>
                </section>
            <div style={{ width: '100%', height: '50px' }}></div>
            </div >
        )
    }
}