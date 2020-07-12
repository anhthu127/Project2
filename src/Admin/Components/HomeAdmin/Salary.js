import React from "react"
import HomeSearch from "../HomeAdmin/HomeSearch"
import DetailStaff from "./ButtonDetail";
import Unit from "../../../Unit"
export default class Salary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null,
            // staff: [{
            //     id: "",
            //     full_name: "",
            //     phone_num: "123456",
            //     address: "",
            //     identify: "",
            //     user_name: "",
            //     password: "",
            //     total_hours: "",
            //     salary: [
            //         {
            //             id: "",
            //             month: "",
            //             date: "",
            //             start_at: "",
            //             finish_at: "",
            //             salary_per_hour: "",
            //             total_hours_per_day: ""
            //         }
            //     ],
            //     total_salary: ""
            // }]
        }
    }
    componentDidMount() {
        this.props.initLoad();
    }

    render() {
        let show;
        console.log("salary: " + JSON.stringify(this.props.StaffAccount))
        if (this.props.StaffAccount) {
            show = this.props.StaffAccount.map((item, key) => {
                let update = "update" + key;
                let deleteData = "delete" + key
                return (
                    <tr key={key}>
                        <td colSpan="1" className="initLoad">{item.id} </td>
                        <td colSpan="1" className="initLoad">{item.full_name} </td>
                        <td colSpan="1" className="initLoad">{item.identify}</td>
                        <td colSpan="1" className="initLoad">{item.phone_num}</td>
                        <td colSpan="1" className="initLoad">{item.total_day}</td>
                <td colSpan="1" className="initLoad">{item.total_day*5}</td>
                        <td colSpan="1" className="initLoad">{item.salary_per_hour}</td>
                        <td colSpan="1" className="initLoad">{Unit.formatCurrency(parseInt(item.total_day*5*item.salary_per_hour))}</td>
                        <td colSpan="2" className="actions">
                            <DetailStaff item={item} update={update} {...this.props} />
                        </td>
                    </tr>
                )
            })
        }
        return (
            <div>
                <HomeSearch  {...this.props} />
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="">
                                <th>ID</th>
                                <th>Họ và Tên</th>
                                <th>CMT </th>
                                <th>Số điện thoại </th>
                                <th>Ngày làm</th>
                                <th>Giờ làm</th>
                                <th>Lương/giờ</th>
                                <th>Tổng Lương</th>
                                <th colSpan={2} >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}