import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import Header from '../Component/Header';
import '../../Styles/Register.css'
import FooterOfHome from '../Component/FooterOfHome';
import { Row, Button, Col } from 'react-bootstrap';
import { input, Icon } from 'semantic-ui-react';
var lettersRegex = RegExp(/^[0-9a-zA-Z]+$/);
var phoneRegex = RegExp(/^[0-9]+$/);
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, user }) => {
    let invalid = false;

    Object.values(formErrors).forEach(val => {
        console.log("formError : " + JSON.stringify(formErrors))

        val.length > 0 && (invalid = false);
    });

    Object.values(user).forEach(val => {
        console.log("rét : " + JSON.stringify(user))
        val != null || (invalid = false);
        console.log(val != null)
    });
    return invalid;
};
export default class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: null,
                lastName: null,
                email: null,
                username: null,
                phoneNumber: null,
                password: null,
                confirmPassword: null,
                address: null,

                type_account: null,
                recipt_id: null,
                cart_id: null,
                creat_at: null,
                last_login: null,
                last_failed_login: null,
                ip: null,
                divice: null,
                times_of_order: null,
            },
            url: "#",
            code: "",
            isFlag: false,
            isHidden: "password",
            display: "none",
            capcha_valid: "valid capcha",
            border: "null",
            color: "#000",
            count: 0,
            onChange: 0,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                phoneNumberCheck0: "",
                phoneNumberCheckdigit: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
                address: "",

            },


        }
    }
    componentDidMount() {

        this._genCapcha();

    }
    handleChange = e => {
        console.log("state: " + JSON.stringify(this.state.user))
        e.preventDefault();

        const { name, value } = e.target;
        this.setState({
            ...this.state,
            user: {
                [name]: value,
            }
        })
        let formErrors = this.state.formErrors;
        switch (name) {
            case "firstName":
                if (formErrors.firstName = value.length < 3) {
                    formErrors.firstName = "Tối thiểu 3 kí tự"
                } else { formErrors.firstName = "" }
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "Tối thiểu 3 kí tự" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Địa chỉ Email không hợp lệ";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "Mật khẩu tối thiểu 6 kí tự" : "";
                break;
            case "username":
                formErrors.username =
                    value.length < 6 ? "Tên đăng nhập tối thiểu 6 kí tự" : "";
                break;
            case "phoneNumber":
                formErrors.phoneNumberCheck0 = (value.charAt(0) == "0") ? "" : "Số điện thoại bắt đầu bằng 0.";
                formErrors.phoneNumber = phoneRegex.test(value) ? "" : "Số điện thoại phải là chữ số.";
                formErrors.phoneNumberCheckdigit = value.length == 10 ? "" : "Số điện thoại phải là 10 chữ số";
                break;
            default:
                break;
        }
        // this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    _onClickRegister() {
        console.log(formValid(this.state))

        if (formValid(this.state)) {
            let curTime = new Date().toLocaleString()
            console.log("đayadyayd")
            // if (this.states.user)
            //     this.setState({
            //         ...this.state,
            //         user: {
            //             ...this.state.user,
            //             creat_at: curTime
            //         }
            //     })
            // this.props.createAccount(this.state.user)
        } else {
            alert("Điền đầy đủ các trường")
        }
        // }
    }
    async _genCapcha() {

        var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";

        var lengthOtp = 6;

        var captcha = [];

        for (var i = 0; i < lengthOtp; i++) {

            //below code will not allow Repetition of Characters

            var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array

            if (captcha.indexOf(charsArray[index]) == -1)

                captcha.push(charsArray[index]);

            else i--;

        }
        let temp = captcha.join("")
        await this.setState({
            code: temp
        });
    }
    render() {
        let count = 0;
        const { formErrors } = this.state;
        // if (this.props.isRegister) {
        //     return <Redirect to='/login'></Redirect>
        // }
        return (
            <div className="wrap-page-register">
                <Header {... this.props} />
                <div className='wrap-content'>
                    <section>
                        <div className='title'>
                            <h5> Đăng kí tài khoản</h5>
                        </div>
                        <div className='customer-form'>
                            <div id="custom-form"
                                className=" col-lg-9 col-md-9 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 nopadding-xs" >
                                <h5>Điền thông tin cá nhân</h5>
                                <Row style={{ margin: "0px" }}>
                                    <div className="firstName">
                                        <label htmlFor="firstName">Tên</label>
                                        <input
                                            value={this.state.user.firstName}
                                            className={formErrors.firstName.length > 0 ? "error" : null}
                                            placeholder="Điền tên"
                                            type="text"
                                            name="firstName"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.firstName.length > 0 && (
                                            <span className="errorMessage">{formErrors.firstName}</span>
                                        )}
                                    </div>
                                    <div className="lastName">
                                        <label htmlFor="lastName">Họ</label>
                                        <input // value={this.state.user.lastName}
                                            className={formErrors.lastName.length > 0 ? "error" : null}
                                            placeholder="Điền họ"
                                            type="text"
                                            name="lastName"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.lastName.length > 0 && (
                                            <span className="errorMessage">{formErrors.lastName}</span>
                                        )}
                                    </div>
                                </Row>

                                <Row style={{ margin: "0px" }}>
                                    <div className="email">
                                        <label htmlFor="email">Email</label>
                                        <input // value={this.state.user.email}
                                            className={formErrors.email.length > 0 ? "error" : null}
                                            placeholder="Điền địa chỉ Email"
                                            type="email"
                                            name="email"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )}
                                    </div>
                                    <div className="phoneNumber">
                                        <label htmlFor="phoneNumber">Số điện thoại </label>
                                        <input // value={this.state.user.phoneNumber}
                                            className={formErrors.phoneNumber ? "error" : null}
                                            placeholder={"Số điện thoại"}
                                            type="text"
                                            name="phoneNumber"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.phoneNumber.length > 0 && (
                                            <span className="errorMessage">{formErrors.phoneNumber}
                                                <br />
                                                {formErrors.phoneNumberCheck0}
                                                <br />
                                                {formErrors.phoneNumberCheckdigit}
                                            </span>
                                        )}
                                    </div>
                                </Row>
                                <div className="address">
                                    <label htmlFor="address">Địa chỉ</label>
                                    <input // value={this.state.user.address}
                                        className={formErrors.address.length > 0 ? "error" : null}
                                        placeholder="Địa chỉ"
                                        type="text"
                                        name="address"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.address.length > 0 && (
                                        <span className="errorMessage">{formErrors.address}</span>
                                    )}
                                </div>
                                <Row style={{ margin: "0px" }}>
                                    <div className="username">
                                        <label htmlFor="username">Tên đăng nhập</label>
                                        <input // value={this.state.user.username}
                                            className={formErrors.username.length > 0 ? "error" : null}
                                            placeholder="Điền lại mật khẩu"
                                            type="type"
                                            name="username"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.username.length > 0 && (
                                            <span className="errorMessage">{formErrors.username}</span>
                                        )}
                                    </div>

                                    <div className="password">
                                        <label htmlFor="password">Mật khẩu</label>
                                        <div>
                                            <input // value={this.state.user.password}
                                                icon={{ name: 'eye', }}
                                                className={formErrors.password.length > 0 ? "error" : null}
                                                placeholder="Điền mật khẩu"
                                                type={this.state.isHidden}
                                                name="password"
                                                noValidate
                                                onChange={this.handleChange}
                                            >
                                            </input>
                                            <Icon
                                                id="password-unhidden" className="fa fa-eye password-icon"
                                                onClick={() => {
                                                    console.log("onclick: " + count)
                                                    count = count + 1;
                                                    if (this.state.count % 2 == 0) {
                                                        this.setState({
                                                            ...this.state,
                                                            isHidden: "type"
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                        {formErrors.password.length > 0 && (
                                            <span className="errorMessage">{formErrors.password}</span>
                                        )}
                                    </div>

                                </Row>
                                <div>
                                    <label className='label-item'>Mã an toàn
                                        <span>(*)</span>
                                    </label>
                                    <input className="capcha-input " type='text ' ></input>
                                    <div style={{ width: "100px", display: "inline-block" }}></div>
                                    <label className="generated-capcha"> {this.state.code} </label>
                                </div>
                                <div style={{
                                    textAlign: "center",
                                    color: this.state.color,
                                    display: this.state.display
                                }}> {this.state.capcha_valid}</div>
                            </div>
                        </div >
                        <Row className="wrap-action-btn">
                            <Col className="col-lg-3 col-md-3 col-sm-4" id="btn-item"> </Col>
                            <Col className="col-lg-6 col-md-6 col-sm-6" id="btn-item">

                                <Button className="act-btn" onClick={() => {
                                    this._onClickRegister()
                                }}>
                                    <Link className="link" exact from="/register" to={this.state.url}>
                                        Đăng kí
                                </Link>
                                </Button>
                                <Icon style={{
                                    display: this.state.display,

                                }} className="fa fa-spinner"></Icon>

                                <Button className="act-btn">
                                    <Link className="link" to={"/"}>Thoát</Link>
                                </Button>
                            </Col>
                            <Col className="col-lg-4 col-md-4col-sm-4 " id="btn-item"> </Col>
                        </Row>
                    </section >
                </div >
                <FooterOfHome {...this.state} />
            </div >
        )
    }
}
