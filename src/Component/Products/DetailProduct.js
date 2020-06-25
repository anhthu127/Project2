import React from 'react';
import Header from '../Component/Header';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../Styles/DetailProduct.css";
import unit from "../../Unit"
import { Link } from 'react-router-dom';
import { domain } from '../../Constant'
import { type } from 'os';
class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reciew: this.props.location.state,
            status: "Hết hàng",
            display: "inline-block",
            discount: "inline-block",
            color: "",
            choosen_color: "",
            discount_price: "",
            isPress: false,
            concat: 0,
            cart: {
                user_id: '',
                product: {
                    product_id: '',
                    url: '',
                    quantity: 1,
                    color: '',
                    name: '',
                    price: '',
                },
                total_money: '',
            },
            url: "",
            arrColor: [],
            cart_id: ''
        }
    }
    // data 
    componentDidMount() {
        console.log("color: " + JSON.stringify(this.state.cart.product.quantity))
        this.checkStatus();
        this.checkColor();
        if (this.state.reciew.item.discount == "" || this.state.reciew.item.discount == "0") {
            this.setState({
                discount: "none"
            })
        }
    }
    async checkColor() {
        if (this.state.reciew.item.cluster.color) {
            await this.setState({
                ... this.state,
                color: this.state.reciew.item.cluster.color,
            })
        }
        await this.setState({
            arrColor: this.state.color.toString().split(",")
        })
        // console.log("color: " + JSON.stringify(this.state.arrColor));
        // console.log("state.color: " + this.state.color);
    }
    async Increase() {
        var temp = this.state.cart.product.quantity;
        console.log("increase: " + this.state.cart.product.quantity)
        temp++;
        console.log("increase: " + temp)
        if (temp >= 0) {
            await this.setState({
                ...this.state,
                cart: {
                    ...   this.state.cart,
                    product: {
                        ...this.state.cart.product,
                        quantity: temp
                    }
                }
            })
        }
    }

    async Decrease() {
        var temp = parseInt(this.state.cart.product.quantity);
        console.log("decrease: " + this.state.cart.product.quantity)
        temp--;
        if (temp > 0) {
            await this.setState({

                ...this.state,
                cart: {
                    ... this.state.cart,
                    product: {
                        ...this.state.product,
                        quantity: temp
                    }
                }
            })
        } else {
            await this.setState({
                ...this.state,
                cart: {
                    ... this.state.cart,
                    product: {
                        ...this.state.product,
                        quantity: 1
                    }
                }
            })
        }

    }
    async choosenColor(item) {
        await this.setState({
            ... this.state,
            choosen_color: item,
            cart: {
                ...this.state.cart,
                product: {
                    ... this.state.cart.product,
                    color: item,
                }
            }
        })
        console.log("hihi: " + this.state.cart.product.color)


    }
    checkStatus() {
        if (this.state.reciew.item.quantity > 0) {
            this.setState({
                ... this.state,
                status: "Còn hàng"
            })
        }
        if (this.state.reciew.item.discount == 0) {
            this.setState({
                ... this.state,
                display: "none"
            })
        }
    }
    getCart(data) {
        return new Promise((resolve, reject) => {
            const url = domain + '/cart/?user_id=' + data
            fetch(url, {
                method: "GET",
                headers: { "Content-type": "application/json" },
                // body: JSON.stringify(product)
            })
                .then((response) => response.json())
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    fetchAPI(data, product) {
        console.log("fetchCart:  " + JSON.stringify(product))
        return new Promise((resolve, reject) => {
            const url = domain + '/cart/' + data
            fetch(url, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(product)
            })
                .then((response) => response.json())
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    buyNowButton() {

    }
    Tortur() {
        return (
            <div>
                <div>
                    <span className="bold-step"> Bước 1:</span>
                 Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
                 </div>
                <div>
                    <span className="bold-step"> 2:</span> Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau

                Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng

                Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng

                Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán

                </div>
                <div>
                    <span className="bold-step"> 3:</span> Lựa chọn thông tin tài khoản thanh toán

                Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống

                Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình

                Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản

                </div>
                <div>
                    <span className="bold-step"> 4:</span> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình
                    </div>
                <div>
                    <span className="bold-step"> 5:</span>Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng

                Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.

                Trân trọng cảm ơn. </div>
            </div>
        )
    }
    // async addToCartMore(item, count) {

    //     const user = window.sessionStorage.getItem('id');
    //     let cart;
    //     let product;
    //     console.log(".....: " + this.state.isPress + "...." + count)
    //     if (this.state.isPress == true && count > 1) {
    //         console.log("vào đây vào đây")
    //         cart = await this.getCart(user);
    //         console.log("cart: " + JSON.stringify(cart[0]))
    //         product = cart[0].product;
    //         console.log("product: " + JSON.stringify(product))
    //     }
    // let map = product.map((item, key) => {
    //     console.log(JSON.stringify(item))
    // })
    // }
    async addToCart(item) {

        const user_id = window.sessionStorage.getItem('id');
        if (!user_id) {
            window.location.href = "http://localhost:3000/Login";
        }
        else {
            await this.setState({
                ...this.state.cart,
                cart: {
                    user_id: user_id,
                    product: {
                        ... this.state.cart.product,
                        product_id: item.id,
                        url: item.url,
                        name: item.product_name,
                        price: item.price,
                    }
                }
            })
            let oldCart;
            let cart_id;
            let newProduct = [];

            let productInCart;
            oldCart = await this.getCart(user_id);
            oldCart = oldCart[0];
            console.log("oldCart: " + JSON.stringify(oldCart.id))
            cart_id = oldCart.id;
            if (oldCart.product) {
                productInCart = oldCart.product;
                console.log("product: " + JSON.stringify(productInCart))

            } else {
                productInCart = [];
            }
            console.log("productInCart: " + JSON.stringify(productInCart))
            console.log("productInCart: " + typeof (productInCart))
            let count = 0;
            await productInCart.map((value, key) => {
                newProduct.push(value);
                count++;
            })
            let index = Object.keys(productInCart).length;
            if (index == 0) {
                index = 0;
            } else { index = index + 1; }
            console.log("item: " + index)

            newProduct.push({
                product_id: this.state.cart.product.product_id, quantity: this.state.cart.product.quantity, color: this.state.cart.product.color,
                name: this.state.cart.product.name, price: this.state.cart.product.price, url: this.state.cart.product.url
            })
            console.log("newProduct: " + JSON.stringify(newProduct))

            let newCart = {
                user_id: user_id,
                product: newProduct,
                total_money: '',

            }
            console.log("newCart: " + JSON.stringify(newCart))

            this.fetchAPI(cart_id, newCart);
        }
    }
    handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        this.setState({
            ...this.state,
            product: {
                ...this.state,
                [name]: value,
            }
        })
        // console.log("this.state: " + JSON.stringify(this.state.cart.product))
    }

    render() {

        let sending = {
            pathname: "/cart",
            // state: {
            //     item: this.state.reciew.item,
            // }
        }

        let color = this.state.arrColor.map((item, key) => {
            return (
                <button className="item-color" key={key} name='color' onClick={() => {
                    this.choosenColor(item)
                    // console.log(JSON.stringify(item + ' ____ ' + this.state.choosen_color))
                }}>
                    {item}
                </button>
            )
        })

        return (
            <div>
                <Header>
                </Header>

                <div style={{
                    width: '100%',
                    height: '50px'
                }}></div>
                <section className="body-detail-page">
                    <Row className="wrap-row-detail">
                        <Col xs lg="3">
                            <div className="wrap-img-main">
                                <img className="image-main" src={require("../../Images/may-no.jpg")}
                                    alt="may-khoan"
                                />
                            </div>
                            <Slider>

                            </Slider>
                        </Col>
                        <Col xs lg="1"></Col>
                        <Col className="infor-detail" xs lg="4">
                            <Row className="title-name">
                                {this.state.reciew.item.product_name}
                            </Row>
                            <Row className="suplier">
                                <span className="suplier-title">Nhãn hiệu:  </span>
                                <span className="suplier-detail">    {this.state.reciew.item.suplier}  </span>
                            </Row>
                            <Row className="wrap-status">
                                <span className="status-title">Tình trạng: </span>
                                <span className="status-detail">  {this.state.status}  </span>
                            </Row>
                            <Row className="wrap-price">
                                <span className="price-detail-product">
                                    {unit.formatCurrency(parseInt(this.state.reciew.item.price))}</span>
                                <span style={{
                                    width: '50px',
                                    height: '30px',
                                    textAlign: "center",
                                    display: this.state.discount,
                                    marginLeft: '50px',
                                    background: '#ffc000'
                                }}>
                                    {unit.formatDiscount(parseInt(this.state.reciew.item.discount))}
                                </span>

                            </Row>
                            <Row className="describe">
                                {this.state.reciew.item.description}
                            </Row>
                            <Row className="wrap-color-type" onChange={this.handleChange}    >
                                <span> Màu sắc :  </span>
                                {color}
                            </Row>

                            <Row className="quantity">
                                <span className="quantity-title">Số lượng: </span>
                                <button className="button-decrease"
                                    onClick={() => {
                                        this.Decrease()
                                    }}
                                >-</button>
                                <input value={this.state.cart.product.quantity} name="input-quantity" onChange={this.handleChange}
                                    maxLength="2" name="quantity" className="quantity-input"></input>
                                <button className="button-increase"
                                    onClick={() => {
                                        this.Increase()
                                    }}
                                >+</button>
                            </Row>
                            <div className="btn-actions-choose" >
                                {/* <Link to={window}> */}
                                <button className="btn-add-to-cart" onClick={() => {
                                    let count = this.state.concat;
                                    count++;
                                    this.setState({
                                        ... this.state,
                                        isPress: true,
                                        concat: count
                                    })
                                    // if (this.state.isPress == true) {
                                    //     this.addToCartMore(this.state.reciew.item, count)
                                    // } else {
                                    this.addToCart(this.state.reciew.item)
                                    // }
                                }}>Thêm vào giỏ</button>
                                {/* </Link> */}
                                <Link to={"/cart"}>
                                    <button className="btn-buy-now" onClick={() => {
                                    }} >    Mua ngay </button>
                                </Link>
                            </div>

                            <div className="more-support">
                                <i className="fa fa-phone fa-2x" />
                                <span className="more-support-phone"> 0926866559</span>
                            </div>
                        </Col>
                        <Col xs lg="1"></Col>
                        <Col className="wrap-unique-news" style={{ background: "#ffc000" }} xs lg="3">

                        </Col>
                    </Row>
                    <div style={{ width: "100%", height: "30px" }}></div>
                    <Row stylle={{ height: '500px' }}>
                        <Col className="wrapcontent-body">
                            <section >
                                <div>
                                    <button className="btn-tutor">
                                        Hướng dẫn mua hàng
                                </button>
                                    <button className="btn-review">
                                        Đánh giá
                                </button>
                                </div>
                                <div className="choose-content">

                                </div>
                            </section>
                        </Col>
                        <Col className="wrap-best-sell">
                            <div style={{ background: "#cde567" }}></div>
                        </Col>
                    </Row>


                </section>
            </div>
        )
    }
}

export default DetailProduct;
