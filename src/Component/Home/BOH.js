import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import "../../Styles/BOH.css"
import Slider from "react-slick";
import { Image } from 'react-bootstrap';
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

export default class BOH extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [{
                url: "../../Images/006994.png",
                title: 'Màu xanh',
                price: 20000
            },

            {
                url: "../../Images/img.png",
                title: 'Màu xanh',
                price: 20000
            },

            ]
        }
        // const user = window.sessionStorage.getItem('user');
        // if (!user) {
        //     window.location.href = "http://localhost:3000/Login";
        // }
    }



    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            pauseOnHover: true,

        };
        return (
            <div className="wrap-body">
                <section className="wrap-slider">
                    <div className='slider'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../Images/bg.jpg')}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../Images/favia.io.PNG')}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../Images/img.png')}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
                <div style={{ height: '20px', width: '100%', clear: 'both' }}></div>
                <section className="discount-products">
                    <Row className="wrap-discount-products">
                        <Col lg={2} id="discount-ads">
                            <h2 >
                                <a href='#' title="Sản phẩm khuyến mại">
                                    <span >Sản Phẩm</span>
                                    Khuyến mãi
                                    </a>
                            </h2>
                            <img src={require('../../Images/banner_product.jpg')} alt='' />
                        </Col>
                        <Col lg={10}> <div className='wrap-infor-products'>
                            <Slider id='slider-slick' {...settings}>
                                <div id='item-slick'>
                                    <img src={require('../../Images/may-khoan-dien-khong-day.jpg')}></img>
                                    <div className="icon"><a href="#"> <i className='fa fa-search'></i> </a></div>
                                    <div className='name-box'>
                                        <h3 className='name'>
                                            <a>Lux Anh Sang  </a>
                                        </h3>
                                    </div>
                                    <div className='price-box'>
                                        <span className='price'>6000000</span>
                                    </div>
                                </div>
                                <div id='item-slick'>
                                    <img src={require('../../Images/may-khoan-dien-khong-day.jpg')}></img>
                                    <div className="icon"><a href="#"> <i className='fa fa-search'>
                                    </i> </a></div>
                                    <div className='name-box'>
                                        <h3 className='name'>
                                            <a>Lux Anh Sang</a>
                                        </h3>
                                    </div>
                                    <div className='price-box'>
                                        <span className='price'>6000000</span>
                                    </div>
                                </div>
                                <div id='item-slick'>
                                    <img src={require('../../Images/may-khoan-dien-khong-day.jpg')}></img>
                                    <div className="icon"><a href="#"> <i className='fa fa-search'></i> </a></div>
                                    <div className='name-box'>
                                        <h3 className='name'>
                                            <a>Lux Anh Sang</a>
                                        </h3>
                                    </div>
                                    <div className='price-box'>
                                        <span className='price'>6000000</span>
                                    </div>
                                </div>
                                <div id='item-slick'>
                                    <img src={require('../../Images/may-khoan-dien-khong-day.jpg')}></img>
                                    <div className="icon"><a href="#"> <i className='fa fa-search'></i> </a></div>
                                    <div className='name-box'>
                                        <h3 className='name'>
                                            <a>Lux Anh Sang</a>
                                        </h3>
                                    </div>
                                    <div className='price-box'>
                                        <span className='price'>6000000</span>
                                    </div>
                                </div>
                                <div id='item-slick'>
                                    <img src={require('../../Images/may-khoan-dien-khong-day.jpg')}></img>
                                    <div className="icon"><a href="#"> <i className='fa fa-search'></i> </a></div>
                                    <div className='name-box'>
                                        <h3 className='name'>
                                            <a>Lux Anh Sang</a>
                                        </h3>
                                    </div>
                                    <div className='price-box'>
                                        <span className='price'>6000000</span>
                                    </div>
                                </div>
                                <div id='item-slick'>
                                    <img src={require('../../Images/may-khoan-dien-khong-day.jpg')}></img>
                                    <div className="icon"><a href="#">
                                        <i className='fa fa-search'></i>
                                    </a></div>
                                    <div className='name-box'>
                                        <h3 className='name'>
                                            <a>Lux Anh Sang</a>
                                        </h3>
                                    </div>
                                    <div className='price-box'>
                                        <span className='price'>6000000</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        </Col>
                    </Row>
                </section>
                <div style={{
                    width: '100%', height: '20px'
                }}></div>
                <section className="best-sell-products">
                    <div className="wrap-best-sell-product">
                        <div className='wrap-title'>
                            <h3 className="h-title">
                                <a href='#'>
                                    Sản phẩm
                            </a>
                            </h3>
                        </div>
                        <Row className="wrap-detail-products">
                            <Col lg={6} id="products-item">
                                <h2 className='box-title'>
                                    <Link to={"product/best-selling"} title='LINH KIEN CO KHI' >
                                        bán chạy
                                    </Link>
                                </h2>
                                <Row className='list-product-mini'>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">
                                                <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">
                                                <Image src={require('../../Images/may-no.jpg')} thumbnail></Image>
                                            </div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='list-product-mini'>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                            </Col>
                            <Col lg={6} id="products-item">
                                <h2 className='box-title'>
                                    <Link to={"product/new-product"} title='LINH KIEN CO KHI'>
                                        mới nhập
                                       </Link>

                                </h2>

                                <Row className='list-product-mini'>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className='list-product-mini'>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>


                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} id='wrap-title'>
                                        <div className="">
                                            <div className="wrap-img">   <Image src={require('../../Images/may-no.jpg')} thumbnail></Image></div>
                                            <div className='infor-product'>
                                                <h3 className='title-in-home'>
                                                    <a> may no</a>

                                                </h3>
                                                <div className='price-box'>
                                                    <span id="price">500000</span>
                                                    <span id='origin'> 100000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                    </div>
                </section>
                <div style={{ width: '100%', height: '50px' }}></div>
            </div>
        )
    }
}