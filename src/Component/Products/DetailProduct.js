import React from 'react';
import Header from '../Component/Header';
import { Col, Row, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../Styles/DetailProduct.css";
import unit from "../../Unit"
import { Link } from 'react-router-dom';
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
            input_value: "1",
            url: "",
            arrColor: [],
        }
    }
    componentDidMount() {
        this.checkStatus();
        this.checkColor();
        if (this.state.reciew.item.discount == "" || this.state.reciew.item.discount == "0") {
            this.setState({
                discount: "none"
            })
        }
    }
    async  checkColor() {
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
    async  Increase() {
        var temp = parseInt(this.state.input_value);
        temp++;
        await this.setState({
            input_value: temp
        })

    }
    async  Decrease() {
        var temp = parseInt(this.state.input_value);
        temp--;
        if (temp >= 0) {
            await this.setState({
                input_value: temp
            })
        } else {
            await this.setState({
                input_value: "0"
            })
        }

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
    addToCart(item) {
        window.sessionStorage.setItem(item.id, item);
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
                <button className="item-color" key={key} onClick={() => {
                    this.setState({
                        choosen_color: item
                    })
                    console.log(this.state.choosen_color)
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
                            <Row className="wrap-color-type">
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
                                <input value={this.state.input_value} maxLength="2" name="sell-quantity" className="quantity-input"></input>
                                <button className="button-increase"
                                    onClick={() => {
                                        this.Increase()
                                    }}
                                >+</button>
                            </Row>
                            <div className="btn-actions-choose" >
                                {/* <Link to={window}> */}
                                <button className="btn-add-to-cart" onClick={() => {
                                    this.addToCart(this.state.reciew.item)
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
