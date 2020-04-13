import React from 'react'
import '../../Styles/SiderBar.css'
export default class SiderBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
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
                                    <a href='#' className='nav-link'> Dụng cụ dùng pin</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'> Dụng cụ cơ khí</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'> Dụng cụ xây dựng</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'> Dụng cụ gia đình</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'> Dụng cụ cầm tay</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'> Máy nổ</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'> Máy cắt</a>
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