import React from "react"
import "../../Styles/Login.css"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import GlobalLoading from "../GlobalLoading/GlobalLoading";
export default class AdminLogin extends React.Component {
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

    async submitLogin() {
        this.setState({ isPressedLogin: true })
        await this.props.CheckLogin(this.state.account)
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


    Login() {

        return (
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
            </div>

        )
    }
    render() {

        let LoginComponent = this.Login();

        if ((!this.props.StaffAccount || this.props.StaffAccount == "") && !this.state.isPressedLogin) {
            return (
                <div>
                    {LoginComponent}
                </div>
            )
        } else if (!this.props.StaffAccount && this.state.isPressedLogin) {
            return (
                <GlobalLoading />
            )
        } else {
            if (this.props.StaffAccount == "") {
                alert('sai mk')
                this.Clear()
                this.props.RefreshStore()
                return (
                    <div>
                        {LoginComponent}
                    </div>
                )
            } else {
                console.log('vao day')
                window.location.href = `http://localhost:3000/admin/` + this.state.account.username
                return null;
            }

        }

    }
}