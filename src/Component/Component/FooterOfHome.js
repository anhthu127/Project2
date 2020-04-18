import React from 'react'
import { Carousel, Row, Col, Form } from 'react-bootstrap';
import '../../Styles/FooterOfHome.css'
import { Image } from 'react-bootstrap';
export default class FooterOfHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='wrap-footer'>
                <section className="more-infor">
                    <div className='subcribe-and-social'>
                        <Row>
                            <Col lg={6}>
                                <div className='title-subcribe'>
                                    <h4>Đăng kí nhận thông tin</h4>
                                    <p>Bạn có muốn là người đầu tiên nhận khuyến mãi từ chúng tôi</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Form className='form'>
                                    <input placeholder="Email nhận tin" className='input-email'></input>
                                    <button type='submit' className=' btn-subscribe'>
                                        Đăng kí ngay
                                        </button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </section>
                <Row className= "wrap-bottom">
                    <Col lg={4} className="logo">
                        <a>   <Image src={require('../../Images/006994.png')} thumbnail></Image>
                        </a>
                        <div className='social'>
                            <p>Kênh thông tin</p>
                        </div>
                    </Col>
                    <Col lg={2} className="information-policy">
                        <h4 className='infor'>
                            Thông tin
                        </h4>
                        <ul className='list-menu'>
                            <li className='menu-item'>
                                <a id='a' hre='#' title='trang chủ'>Trang chủ</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Giới thiệu</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Sản phẩm</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Tin tức</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Liên hệ</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2} className="information-policy">
                        <h4 className='infor'>
                            Chính sách
                        </h4>
                        <ul className='list-menu'>
                            <li className='menu-item'>
                                <a id='a' hre='#' title='trang chủ'>Trang chủ</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Giới thiệu</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Sản phẩm</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Tin tức</a>
                            </li>
                            <li className='menu-item'>
                                <a id='a' hre='#'>Liên hệ</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} className="about-contact">
                        <h4 className='contact'>
                            Thông tin liên hệ
                        </h4>
                        <ul className='menu-contact'>
                            <li>
                                <div id="icon-top" >
                                    <i className='fa fa-map-marker fa-1,5x'
                                        aria-hidden='true'
                                    >
                                    </i>
                                </div>
                                <div className="span-top">
                                    <span >
                                        Địa chỉ
                                        </span>
                                    <h6> Số 12, Phan Đình Giót, Hà Nội</h6>
                                </div>
                            </li>
                            <li >
                                <div id="icon-top">
                                    <i className='fa fa-envelope fa-1,5x'
                                        aria-hidden='true'>
                                    </i></div>
                                <div className="span-top">
                                    <span >
                                        Email
                                            </span>
                                    <h6>email@gamil.com</h6>
                                </div>
                            </li>
                            <li >
                                <div id="icon-top">
                                    <i className='fa fa-phone fa-1,5x'
                                        aria-hidden='true'>
                                    </i>
                                </div>
                                <div className="span-top">
                                    <span >
                                        Hỗ trợ
                                        </span>
                                    <h6>092438723</h6>
                                </div>
                            </li>
                        </ul>


                    </Col >
                </Row >
            </div >
        )
    }

}