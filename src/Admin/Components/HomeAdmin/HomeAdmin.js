import React, { Component } from 'react'
import "../../Styles/HomeAdmin.css"
import Menu from '../../Menu'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Salary from './Salary'
import GlobalLoading from '../GlobalLoading/GlobalLoading'

export default class AdminHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null,
            isLoading: true,
            staff: [{
                id: "",
                full_name: "",
                phone_num: "123456",
                address: "",
                identify: "",
                user_name: "",
                password: "",
                total_hours: "",
                salary: [
                    {
                        id: "",
                        month: "",
                        date: "",
                        start_at: "",
                        finish_at: "",
                        salary_per_hour: "",
                        total_hours_per_day: ""
                    }
                ],
                total_salary: ""
            }]
        }
    }

    componentDidMount() {
        // if(this.props.)
        // this.setState({
        //     isLoading: false,
        // })
    }
    render() {
        let content;
        switch (window.location.href) {
            case "http://localhost:3000/admin/salary-staff":
                 content = <Salary  {... this.props} />
                break;
            case "http://localhost:3000/admin/statistical":
                content = statistical
                break;
            case "http://localhost:3000/admin/suplier":
                content = suplier
                break;
            default:
                break;
        }


        let statistical = <div>this.state.statistical</div>
        let suplier = <div>im suplier</div>
        //   console.log("path: "+window.location.href)

        console.log(content)
        return (

            <div className="wrap-home-admin">
               
                <Row>
                    <Col lg={2} className="wrap-menu">
                        <Menu></Menu>
                    </Col>
                    <Col lg={10} className='wrap-content'>
                        <div className="body-content" >
                            <div className="wrap-top-nav">
                                <div className="top-navigation"><Link to={"/admin/salary-staff"}>Bảng lương</Link></div>
                                <div className="top-navigation"><Link to={"/admin/statistical"}>Thống kê</Link></div>
                                <div className="top-navigation"><Link to={"/admin/suplier"}>Nhà cung cấp</Link></div>
                            </div>
                            <section className="wrap-content">
                                <div>
                                    {content}
                                </div>
                            </section>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}