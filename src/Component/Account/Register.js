import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Header from '../Header';
import '../../Styles/Register.css'
import FooterOfHome from '../FooterOfHome';
import { Row, Button, Col } from 'react-bootstrap';
import { TRUE } from 'node-sass';
var lettersRegex = RegExp(/^[0-9a-zA-Z]+$/);
var phoneRegex = RegExp(/^[0-9]+$/);
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
export default class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: null,
                lastName: null,
                email: null,
                phoneNumber: null,
                password: null,
                confirmPassword: null,
                address: null,


            },
            code: "",
            isFlag: false,
            hidden: true,
            display: false,
            capcha_valid: "valid capcha",
            border: "null",
            color: "#000",

            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
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
        console.log("this.props: " + JSON.stringify(this.props))
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "Tối thiểu 3 kí tự" : "";
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
            case "confirmPassword":
                if (this.state.password != value) {
                    formErrors.confirmPassword = "Mật khẩu nhập lại chưa đúng!";
                } else { formErrors.confirmPassword = "" }
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
    _checkPhoneNum(value, formErrors) {

    }
    _onClickRegister() {
      
        this.props.createAccount(this.state.user)
    }

    _unHiddePassWord() {
        this.setState({ hidden: !this.state.hidden });
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
        const { formErrors } = this.state;
        if (this.props.isRegister) {
            return <Redirect to='/login'></Redirect>
        }


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
                                        <input
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
                                        <input
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
                                        <input
                                            className={formErrors.phoneNumber.length > 0 ? "error" : null}
                                            placeholder="Số điện thoại"
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
                                    <input
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
                                    <div className="password">
                                        <label htmlFor="password">Mật khẩu</label>
                                        <input
                                            className={formErrors.password.length > 0 ? "error" : null}
                                            placeholder="Điền mật khẩu"
                                            type="password"
                                            name="password"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.password.length > 0 && (
                                            <span className="errorMessage">{formErrors.password}</span>
                                        )}
                                    </div>
                                    <div className="confirmPassword">
                                        <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                                        <input
                                            className={formErrors.confirmPassword.length > 0 ? "error" : null}
                                            placeholder="Điền lại mật khẩu"
                                            type="password"
                                            name="confirmPassword"
                                            noValidate
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.password.length > 0 && (
                                            <span className="errorMessage">{formErrors.password}</span>
                                        )}
                                    </div>
                                </Row>
                                <div>
                                    <label className='label-item'>Mã an toàn
                                        <span>(*)</span>
                                    </label>
                                    <input className="capcha-input" type='text ' ></input>
                                    <div style={{ width: "100px", display: "inline-block" }}></div>
                                    <label className="generated-capcha"> {this.state.code} </label>
                                </div>
                                <div style={{
                                    textAlign: "center",
                                    color: this.state.color,
                                    display: "none"
                                }}> {this.state.capcha_valid}</div>
                            </div>
                        </div >
                        <Row className="wrap-action-btn">
                            <Col className="col-lg-3 col-md-3 col-sm-4" id="btn-item"> </Col>
                            <Col className="col-lg-4 col-md-4col-sm-4" id="btn-item">

                                <Button className="act-btn" onClick={() => {
                                    this._onClickRegister()
                                }}> Đăng kí</Button>
                                <Button className="act-btn">Thoát</Button>
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
 