import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            link: "error",
            username: "",
        }
    }
    checkLogin(username) {
        console.log("before check", this.state.link + "____" + this.state.username)
        if (username.localeCompare("admin")) {
            this.routePage();

        }
    }
    routePage() {
        this.setState({
            link: "/uni-product"
        })
        console.log("check", this.state.link + "____" + this.state.username)

    }
    render() {
        return (
            <div className="wrap-login">
                <section className="logo-login">
                    <div className="logo">
                        <a>
                            <img src={require('./../../Images/006994.png')}></img>
                        </a>
                    </div>
                </section>
                
                <section className="content-login">
                    <div className="username">
                        <label >Tên đăng nhập</label>
                        <input type={"text"} placeholder="Tên đăng nhập"
                            onChange={e => {
                                this.setState({
                                    username: e.target.value
                                });
                            }} />
                    </div>
                    <div className="password">
                        <label >Mật khẩu</label>
                        <input placeholder="Mật khẩu" />
                    </div>
                    <div className="btn-dangnhap">
                        <Button onClick={() => {
                            this.checkLogin(this.state.username)
                        }} >
                            <Link to={this.state.link}>

                                Đăng nhập
                        </Link></Button>
                    </div>
                </section>
            </div>
        )
    }
}