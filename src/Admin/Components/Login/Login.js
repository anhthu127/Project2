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
            isLogin: false,
            url: "#",
            account: {
                username: "",
                password: "",
            }
        }
    }

    async submitLogin() {
        await this.setState({
            ...this.state,
            isLoading: true,
            count: 1,
        })
        console.log("count: " + JSON.stringify(this.state.count))

        await this.props.CheckLogin(this.state.account)
        await this.setState({
            ...this.state,
            count: 0,
        })

    }
    Clear() {
        this.setState({
            ...this.state,
            count: 0,
            isLoading: false,
            isLogin: false,
            url: "#",
            account: {
                username: "",
                password: "",
            }
        })
    }
    componentDidMount() {
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
        // if (this.state.isLoading) {
        //     LoginComponent = <GlobalLoading />
        // }
        // else {
        //     LoginComponent = this.Login()
        // }


        var keys;
        if (this.props.StaffAccount) {
            keys = Object.keys(this.props.StaffAccount);
            console.log("hihi: " + JSON.stringify(keys.length))
            if (keys.length > 0) {
                this.setState({
                    ... this.state,
                    isLogin: true,

                })
            }
            if (this.state.count === 1 && this.state.isLogin === false) {
                alert("tài khoản mật khẩu sai")

            }
        }

        if (this.state.isLogin) {
            this.setState({
                ... this.state,
                isLoading: false
            })
            window.location.href = `http://localhost:3000/admin/` + this.state.account.username
        }

        return (
            <div>
                {LoginComponent}
            </div>
        )
    }
}