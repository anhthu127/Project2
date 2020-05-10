import React from 'react'
import history from '../../Admin/history'
import '../../Styles/SiderBar.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretLeft)

export default class SiderBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const path = history.location.pathname;
        const dungpin = path.match('^/products/dung-cu-dung-pin') && "active";
        const cokhi = path.match('^/products/dung-cu-co-khi') && "active";
        const xaydung = path.match('^/products/dung-cu-xay-dung') && "active";
        const giadinh = path.match('^/products/dung-cu-gia-dinh') && "active";
        const camtay = path.match('^/products/dung-cu-cam-tay') && "active";
        const mayno = path.match('^/products/dung-cu-may-no') && "active";
        const maycat = path.match('^/products/dung-cu-may-cat') && "active";
        return (
            <aside className='wrap-nav-sidebar'>
                <h2 className='title-nav-side'>
                    <i className='fa fa-bars'></i>
                        Danh mục sản phẩm
                </h2>
                <div className="nav-category">
                    <nav className='wrap-nav-category'>
                        <ul className='nav-ul'>
                            <li className='nav-item'>
                                <a className={dungpin} href="/products/dung-cu-dung-pin"> Dụng cụ dùng pin  {dungpin === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a>
                            </li>
                            <li className='nav-item'>
                                <a className={cokhi} href="/products/dung-cu-co-khi">Dụng cụ cơ khí{cokhi === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />}  </a>
                            </li>
                            <li className='nav-item'>
                                <a className={xaydung} href="/products/dung-cu-xay-dung">Dụng cụ xây dựng{xaydung === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />}  </a>
                            </li>
                            <li className='nav-item'>
                                <a className={giadinh} href="/products/dung-cu-gia-dinh">Dụng cụ gia đình{giadinh === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a>
                            </li>
                            <li className='nav-item'>
                                <a className={camtay} href="/products/dung-cu-cam-tay">Dụng cụ cầm tay{camtay === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />}  </a>
                            </li>
                            <li className='nav-item'>
                                <a className={mayno} href="/products/dung-cu-may-no"> Máy nổ{mayno === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />} </a>
                            </li>
                            <li className='nav-item'>
                                <a className={maycat} href="/products/dung-cu-may-cat">Máy cắt{maycat === "active"
                                    && <FontAwesomeIcon style={{ float: "right" }} icon={faCaretLeft} />}  </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{
                    width: '100%', height: '30px'
                }}></div>
                <div className='nav-schema-price'>
                    <div className='nav-radio'>
                        <div className='title-price'>
                            <h2>Mức giá</h2>
                        </div>
                        <form className='form-radio'>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1" />
                                    <div className='padding'></div>
                                        Dưới 100.000đ
                                                 </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option2" />
                                    <div className='padding'></div>
                                        100.000đ - 200.000đ
                                                 </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                    <div className='padding'></div>
                                        200.000đ - 300.000đ
                                                 </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                    <div className='padding'></div>
                                        300.000đ - 500.000đ
                                                </label>
                            </div>

                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                    <div className='padding'></div>
                                        500.000đ - 1.000.000đ
                                                  </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                    <div className='padding'></div>
                                        Trên 1.000.000đđ
                                                  </label>
                            </div>
                        </form>
                    </div>
                    <div style={{
                        width: '100%', height: '30px'
                    }}></div>
                    <div className='nav-schema-price'>
                        <div className='nav-radio'>
                            <div className='title-price'>
                                <h2>Kích thước</h2>
                            </div>
                            <form className='form-radio'>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" />
                                        <div className='padding'></div>
                                            Lớn
                                                 </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option2" />
                                        <div className='padding'></div>
                                            Nhỏ
                                                 </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option3" />
                                        <div className='padding'></div>
                                            Vừa
                                                 </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>

        )
    }
}