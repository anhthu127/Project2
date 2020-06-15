import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../Styles/NorItem.css'
import DetailModal from './DetailModal';
export default class NormalItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "block",
            undisplay: "none",
            onHover: "",
        }
    }
    componentDidMount() {
        console.log("componenetDidmount: " + (this.props))
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

    render() {
        let show;
        const baseImage = "../../Images/"
        if (this.props.product) {
            show = this.props.product.map((item, key) => {
                let detail = "detail" + key;
                const sending = {
                    pathname: 'detail/' + item.product_name.replace(" ", "-"),
                    state: {
                        item: item,
                        hello: 'hello'
                    },
                }
                return (
                    <Col lg={4} xs={4} ms={4} className={'item-product' + this.state.onHover} key={key} >
                        <div className='nor-item'>
                            <div className="img-wrap">
                                <a  >
                                    <Image className="img" src={require("../../Images/may-no.jpg")}
                                        id='img' thumbnail
                                    ></Image>
                                    {/* baseImag+item.url */}
                                </a >
                            </div>
                            <div className="overlay" >
                                <div className="link-xemnhanh">
                                    <DetailModal item={item} detail={detail} />
                                </div>
                                <button className="btn-tuychon">
                                    <Link className="link-tuychon" to={sending}>  Tùy chọn</Link>
                                </button>
                            </div>
                        </div>
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