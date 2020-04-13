import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../Styles/Filter.css'
export default class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Row lg={12} id='filter'>
                <Col lg={6} className='title' >
                    <h2 className='all-products'>
                        <a>Tất cả sản phẩm</a></h2>
                </Col>
                <Col lg={6} className='filter'>
                    <div className='sort-by'>
                        <label id='label'>Sắp xếp: </label>

                        <div className="title-sort">
                            <li> <span>Sắp xếp</span></li>
                        </div>

                        <ul className='wrap-item'>
                            <li className='sort-item'>Từ A-Z</li>
                            <li className='sort-item'>Từ Z-A</li>
                            <li className='sort-item'>Giá tăng dần</li>
                            <li className='sort-item'>Giá giảm dần</li>
                            <li className='sort-item'>Hàng mới nhất</li>
                            <li className='sort-item'>Hàng cũ nhất</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        )
    }
}