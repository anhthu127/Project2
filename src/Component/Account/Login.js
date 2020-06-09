import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Component/Header';
import FooterOfHome from '../Component/FooterOfHome';
import GlobalLoading from '../../Admin/Components/GlobalLoading/GlobalLoading';
import loginAccount from '../../FetchAPI/loginAccount';
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            isLoading: false,
            isLogin: null,
            url: "#",
            account: {
                username: "",
                password: "",
            },
            isPressedLogin: false,

        }
    }

    async submitLogin(account) {
        this.setState({ isLoading: true })
        const response = await loginAccount(account);
        console.log(JSON.stringify(response))
        this.setState({ isLoading: false })
        if (response[0]) {
            window.sessionStorage.setItem('user', response[0].username)
            window.sessionStorage.setItem('pass', response[0].password)
            window.sessionStorage.setItem('id', response[0].id)
            window.sessionStorage.setItem('isLogin', true)
            window.location.href = `http://localhost:3000/Home/` + this.state.account.username
        } else {
            alert("Sai mat khau");
        }
    }


    Clear() {
        this.setState({
            ...this.state,
            count: 0,
            isPressedLogin: false,
            isLoading: false,
            url: "#",
            account: {
                username: "",
                password: "",
            }
        })
    }

    loginUI() {
        return (
            <div className="login-component">
                <div className="wrap-header-login">
                    <Header />
                </div>
                <div className="login-component">
                    <div className="wrap-login">
                        <div className=" title">
                            <p>Đăng nhập</p>
                        </div>
                        <div style={{
                            width: "60%",
                            height: "1px",
                            background: "#70a1ff",

                        }}></div>
                        <div style={{
                            width: "100 %",
                            height: "15px"
                        }}></div>
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
                                onClick={() => { this.submitLogin(this.state.account) }}>
                                <Link to={this.state.url} >Đăng nhập</Link>
                            </button>

                        </div>
                    </div>
                </div>       <div style={{ width: "100%", height: "30px" }}></div>
                <FooterOfHome {...this.state} />
            </div >

        )
    }
    render() {

        // let LoginComponent = this.loginUI();



        // if ((!this.props.loginAccount || this.props.loginAccount == "") && !this.state.isPressedLogin) {
        //     console.log("1")
        //     return (
        //         <div>
        //             {LoginComponent}
        //         </div>
        //     )
        // } else if (!this.props.loginAccount && this.state.isPressedLogin) {
        //     console.log("2")
        //     return (
        //         <GlobalLoading />
        //     )
        // } else {
        //     console.log("3")
        //     if (this.props.loginAccount == "") {
        //         alert('sai mk')
        //         this.Clear()
        //         this.props.RefreshStore()
        //         return (
        //             <div>
        //                 {LoginComponent}
        //             </div>
        //         )
        //     } else {
        //         console.log('vao day')
        //         window.sessionStorage.setItem('user', this.props.loginAccount.username)
        //         window.sessionStorage.setItem('pass', this.props.loginAccount.password)
        //         window.sessionStorage.setItem('id', this.props.loginAccount.id)
        //         window.sessionStorage.setItem('isLogin', true)
        //         window.location.href = `http://localhost:3000/Home/`
        //         console.log('cac')
        //             // + this.state.account.username
        //         return null;
        //     }

        // }
        return (
            <div className="login-component">
                <div className="wrap-header-login">
                    <Header />
                </div>
                <div className="login-component">
                    <div className="wrap-login">
                        <div className=" title">
                            <p>Đăng nhập</p>
                        </div>
                        <div style={{
                            width: "60%",
                            height: "1px",
                            background: "#70a1ff",

                        }}></div>
                        <div style={{
                            width: "100 %",
                            height: "15px"
                        }}></div>
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
                                onClick={() => this.submitLogin(this.state.account)}>
                                <Link to={this.state.url} >Đăng nhập</Link>
                            </button>

                        </div>
                    </div>
                </div>       <div style={{ width: "100%", height: "30px" }}></div>
                <FooterOfHome {...this.state} />
            </div >
        )
    }
}