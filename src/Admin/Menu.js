import React, { Component } from 'react';
import history from './history'
import "./Styles/Menu.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
library.add(faCaretLeft)
export default class Menu extends Component {
    render() {
        const path = history.location.pathname;
        const homeClass = (path.match('^/admin') || path.match('^/Admin')) && "active";
        const products = path.match('^/product-admin') && "active";
        const staff = path.match('^/staff-admin') && "active";
        const customer = path.match('^/customer-admin') && "active";
        const receipt = path.match('^/receipt-admin') && "active";
        // const list = path.match('^/list-admin') && "active";
        const manager = path.match('^/manager-admin') && "active";
        return (
            <div>
                <div lg={2} className="sidebar">

                    <div className="img-item" > <img src={require("../Images/006994.png")} width="200px" alt="logo" /></div>
                    {/* Trang chu la thong ke */}
                    <div className="side-item">   <a className={homeClass} href="/admin">Trang Chủ  {homeClass === "active"
                        && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a></div>
                    <div className="side-item">   <a className={products} href="/product-admin">Sản phẩm{products === "active"
                        && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a></div>
                    <div className="side-item">   <a className={customer} href="/customer-admin" > Khách hàng{customer === "active"
                        && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a></div>
                    <div className="side-item">  <a className={receipt} href="/receipt-admin" > Hóa đơn{receipt === "active"
                        && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a></div>
                    <div className="side-item">  <a className={staff} href="/staff-admin" > Nhân viên {staff === "active"
                        && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a></div>
                    <div className="side-item">   <a className={manager} href="/manager-admin" >Quản lý{manager === "active"
                        && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a></div>
                </div>
               
            </div >
        );
    }

}
