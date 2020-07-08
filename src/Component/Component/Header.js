import React from 'react'
import "../../Styles/Header.css"
import 'font-awesome/css/font-awesome.min.css';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: null,
            url: '#',
            user: {
                firstName: null,
                lastName: null,
                email: null,
                username: null,
                phoneNumber: null,
                password: null,
                address: null,
                type_account: null
            }
        }

    }

    componentDidMount() {
        this.setState({
            isLogin: window.sessionStorage.getItem('isLogin')
        })
        // console.log("hihi; " + this.state.isLogin + ' _ _ ' + window.sessionStorage.getItem('isLogin'))

    }
    _Logout() {
        window.sessionStorage.removeItem('user', '');
        window.sessionStorage.removeItem('pass', '');
        window.sessionStorage.removeItem('id', '');
        window.sessionStorage.removeItem('isLogin', 'null');
        window.location.href = 'http://localhost:3000/Home'
    }

    render() {

        const user = window.sessionStorage.getItem('user');
        return (
            <div>
                <section className='top-header'>
                    <div className="wrap-top-header">
                        <div id="say-hello">
                            <p>
                                Chào mừng bạn đến với chợ dụng cụ cơ khí
                            </p>
                        </div>

                        <div id='wrap-account'>
                            <span id="login" >
                                {this.state.isLogin ? <Link to={this.state.url} onClick={() => { this._Logout() }}>Đăng  xuất</Link> : <Link to={"/login"}>Đăng nhập</Link>}
                                  | </span>
                            <span id="regist"  >
                                {this.state.isLogin ?
                                    <Link to={'#'}> {user} </Link> : <Link to={'/register'}>Đăng kí</Link>}</span>
                        </div>
                    </div>

                </section>
                <div style={{
                    width: '100%',
                    height: '30px',
                    clear: "both",
                }}>

                </div>
                <section className="middle-header">
                    <div className='wrap-middle-header'>

                        <div className="logo">
                            <Link to={'/home'}>
                                <img src={require('../../Images/006994.png')}></img>
                            </Link>
                        </div>
                        <div className="addr">
                            <ul
                                className=" unlist"
                            >

                                <li >
                                    <div id="icon-top" >
                                        <i className='fa fa-map-marker fa-2x'
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
                                        <i className='fa fa-envelope fa-2x'
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
                                        <i className='fa fa-phone fa-2x'
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
                        </div>
                        <div className="cart" onClick={() => {

                        }} >
                            <Link to={"/cart"}>
                                <i className="fa fa-shopping-cart fa-3x">
                                </i></Link>
                            <div className="content-cart ">
                                <h6>
                                    <Link to={"/cart"} > Giỏ hàng </Link>
                                </h6>
                                <span> {this.state.numProducts} sản phẩm</span>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="bottom-header">
                    <div className="wrap-bottom-header">
                        <ul className='header-ul' >
                            <li className="item" id='category'>
                                <span href="default.asp">
                                    <i className='fa fa-bars' id="sub-menu"> </i>
                                Danh sách sản phẩm</span>
                                <div className='sub-menu'>
                                    <Link to={"/"}>Máy hàn </Link>
                                    <Link to={"/"}>Dụng cụ cầm tay </Link>
                                    <Link to={"/"}>Dụng cụ cơ khí </Link>
                                    <Link to={"/"}>Dụng cụ xây dựng </Link>
                                </div>
                            </li>

                            <li className="item">
                                <span >
                                    <Link to={"Home"}>Trang chủ</Link> </span>

                            </li>
                            <li className="item"><span href="/products">
                                <Link to={"/products"}>
                                    Sản phẩm
                                    </Link>
                            </span></li>
                            <li className="item">
                                <span href="/hot-news">
                                    <Link to={"hot-news"}>
                                        Thông tin
                                        </Link>
                                </span></li>
                        </ul>
                        <form className="search-bar">
                            <input className="input" type="search" placeholder="Tìm kiếm..."></input>
                            <button className="">
                                <img src="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/icon-search.png?1581935018801"
                                    alt="Tìm kiếm" width="18"></img>
                            </button>
                        </form>
                    </div>
                </section>
            </div >
        )
    }
}