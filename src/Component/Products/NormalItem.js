import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import '../../Styles/NorItem.css'
export default class NormalItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "block",
            undisplay: "none",
            onHover: "",
        }
    }
    maskHover() {
        console.log("hihi")
        return (

            <div className="nor-item">
                <Button>Tùy chọn</Button>
                <Button>Xem nhanh</Button>
            </div>
        )
    }
    detailProduct(item) {
        return (
            <div className="modal fade" id={item.id} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" style={{ color: "#007bff" }} >máy nổ</h3>
                        </div>
                        <div className="modal-body">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
    img() {

    }
    render() {
        let show;
        const baseImage = "../../Images/"
        if (this.props.product) {
            show = this.props.product.map((item, key) => {
                return (
                    <Col lg={4} xs={4} ms={4} className={'item-product' + this.state.onHover}>
                        <div className='nor-item' key={key}
                            onMouseEnter={() =>
                                this.maskHover()
                                // console.log('item-product' + this.state.onHover)
                            }
                        // onClick={() => { this.detailProduct(item) }}
                        >
                            <view hover >
                                < a >
                                    <Image src={require("../../Images/may-no.jpg")}
                                        id='img' thumbnail
                                    ></Image>
                                    {/* baseImage+item.url */}
                                </a >
                            </view>
                            <mask overlay="red-strong">

                            </mask>
                            <div style={{ display: this.state.display }}>
                                <div className='title-box'>
                                    <div>
                                        <span>
                                            {item.product_name}
                                        </span>
                                    </div>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <a>{item.price}</a>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <Button>
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                        </div>
                    </Col >
                )
            })
        }
        return (
            <Row className='wrap-item' >
                <div>
                    {show}
                </div>
            </Row>
        )
    }
}