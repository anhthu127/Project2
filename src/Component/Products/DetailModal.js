import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, heigth: '50px',
                width: '50px', display: "block", background: '#f1bb2b'
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, heigth: '50px',
                width: '50px', display: "block", background: '#f1bb2b'
            }}
            onClick={onClick}
        />
    );
}

export default class DetailModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseImage: "../../Images/",
            arrSubUrl: "",

        }
    }
    componentDidMount(){
        this.checkSubUrl();
    }
    checkSubUrl() {
        if (this.props.sub_url) {
            console.log(JSON.stringify(this.props.sub_url))
            let arr = this.props.sub_url
        }
    }
    render() {
        let slide
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            pauseOnHover: true,
        }
        if (this.props.sub_url) {
            slide = this.props.sub_url.map((item, key) => {
                return (
                    <Slider {...settings} key={key}>
                        <div>
                            <Image src={require(this.state.baseImage + item.url)} thumbnail></Image>
                        </div>
                        <div>
                            <Image src={require('../../Images/may-no.jpg')} thumbnail></Image>
                        </div>
                        <div>
                            <Image src={require('../../Images/may-no.jpg')} thumbnail></Image>
                        </div>
                        <div>
                            <Image src={require('../../Images/may-no.jpg')} thumbnail></Image>
                        </div>
                    </Slider>
                )
            })
        }
        return (
            <div>
                <button type="button" className="btn-xemnhanh" data-toggle="modal" data-target={"#" + this.props.detail}>
                    <span> Xem nhanh </span>
                </button>
                <div className="modal" tabIndex="-1" id={this.props.detail} role="dialog">
                    <div className="modal-dialog" role="document">

                        <div className="modal-content">
                            <div className="modal-body">
                                <Row>
                                    <Col className="sm-col-3 lg-col-3 " >
                                        <div className="wrap-img">
                                            <div>
                                                <Image src={require('../../Images/may-no.jpg')} thumbnail></Image>
                                            </div>
                                            <div className="list-thumb-img">
                                                <div>
                                                    {slide}
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="sm-col-9 lg-col-9 " >
                                        <div>
                                            <button data-dismiss="modal"
                                            > X </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}