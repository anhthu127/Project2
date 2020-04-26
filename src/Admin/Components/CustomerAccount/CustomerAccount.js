import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Menu from '../../Menu'
import ModalSearch from './ModalSearch'
import "../../Styles/CustomerAccount.css"
export default class CustomerAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: {
                id: "",
                full_name: "",
                username: "",
                hash_password: "",
                phone_number: "",
                email: "",
                address: "",
                creat_at: "",
                last_login: "",
                last_failed_login: "",
                type: "normal",
                ip: "",
                divice: "",
            },


        }
    }
    componentDidMount() {
        this.props.initLoad();
    }
    _TypeCustomer() {
        if (this.props.ListAccount.time_of_order >= 10) {
            this.setState({
                ...this.state.account,
                type: "VIP"
            })
        }
    }
    render() {
        let show;
        if (this.props.ListAccount) {
            show = this.props.ListAccount.map((item, key) => {
                return (
                    <tr key={key}>
                        <td colSpan="1" className="initLoad">{item.id} </td>
                        <td colSpan="1" className="initLoad">{item.full_name} </td>
                        <td colSpan="1" className="initLoad"> {item.phone_number}</td>
                        <td colSpan="1" className="initLoad"> {item.email}</td>
                        <td colSpan="1" className="initLoad"> {item.username}</td>
                        <td colSpan="1" className="initLoad"> {item.address}</td>
                        <td colSpan="1" className="initLoad"> {this.state.type}</td>
                        <td colSpan="1" className="initLoad"> button button</td>
                    </tr>
                )
            })
        }
        return (
            <div className="wrap-account">

                <Row>
                    <Col lg={2} className="wrap-menu">
                        <Menu  ></Menu>
                    </Col>
                    <Col lg={10} className='wrap-content'>
                        <section className="body-content" >
                            <ModalSearch {...this.props} />
                        </section>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="">
                                        <th>ID</th>
                                        <th>Họ và Tên</th>
                                        <th>Số điện thoại</th>
                                        <th>Email</th>
                                        <th>Tên đăng nhập</th>
                                        <th>Địa chỉ</th>
                                        <th>Type</th>
                                        <th colSpan={2} >Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {show}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}