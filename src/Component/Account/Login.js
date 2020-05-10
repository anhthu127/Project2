import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Component/Header';
import FooterOfHome from '../Component/FooterOfHome';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: {
                username: "",
                password: "",
            },
            link: "error",
            checkLogin: false,
        }
    }
    checkLogin() {

    }
    submitButton() {
        console.log("before check", this.state.link + "____" + this.state.account.username)
        if (this.state.account.username) {
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
            <div className="login-component">
                <div className="wrap-header-login">
                    <Header />
                </div>

                <div className="wrap-login">
                    <div className=" title">
                        <p>Đăng nhập</p>
                    </div>
                    <div style={{
                        width: "60%",
                        height: "1px",
                        background: "#70a1ff",
                    }}>
                    </div>
                    <div style={{
                        width: "100 %",
                        height: "15px"
                    }}>
                    </div>
                    <div className="box">
                        <div className="input-group">
                            <label className="login-label" htmlFor="username">Tên đăng nhập</label>
                            <input
                                value={this.state.account.username}
                                type="text"
                                name="username"
                                className="login-input"
                                placeholder="Tên đăng nhập"
                                onChange={e => {
                                    this.setState({
                                        ... this.state,
                                        account: {
                                            ... this.state.account,
                                            username: e.target.value
                                        }
                                    });
                                }} />
                        </div>
                        <div className="input-group">
                            <label className="login-label" htmlFor="password">Mật khẩu</label>
                            <input
                                value={this.state.account.password} type="password" name="password"
                                className="login-input"
                                placeholder="Mật khẩu"
                                onChange={e => {
                                    this.setState({
                                        ... this.state,
                                        account: {
                                            ... this.state.account,
                                            password: e.target.value
                                        }
                                    });
                                }} />
                        </div>
                        <button
                            type="button"
                            className="login-btn"
                            onClick={() => { this.submitButton(this.state.account) }}>
                            <Link to={this.state.link} >Đăng nhập</Link>
                        </button>

                    </div>
                </div>

                <div style={{ width: "100%", height: "30px" }}></div>
                <FooterOfHome {...this.state} />
            </div >
        )
    }
}