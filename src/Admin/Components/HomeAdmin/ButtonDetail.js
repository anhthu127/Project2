import React from 'react';
import { isNull } from 'util';

class DetailStaff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    async convertState() {
        await this.setState({
            ...this.state.staff,
            id: this.props.item.id,
            full_name: this.props.item.full_name,
            phone_num: "123456",
            address: "",
            identify: "",
            user_name: "",
            password: "",
            total_hours: "",
        })
    }
    render() {
        return (
            <span>
                <button type="button" className="btn btn-primary"
                    data-toggle="modal" data-target={"#" + this.props.update}
                    onClick={() => this.convertState()
                    }>Chi tiết</button>
                <div className="modal fade" id={this.props.update} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" style={{ color: "#007bff" }} >Bảng lương chi tiết</h3>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div>
                                        <label className="name-label" >ID</label>
                                        <input type="text" value={this.state.staff.id} className="form1" placeholder=""
                                            onChange={(e) => {

                                                this.setState({


                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Họ và tên</label>
                                        <input type="text" value={this.state.staff.full_name} className="form1" placeholder=" "
                                            onChange={(e) => {
                                                this.setState({


                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Chọn ngày</label>
                                        <input type="text" value={this.state.staff.full_name} className="form1" placeholder=" "
                                            onChange={(e) => {
                                                
                                                this.setState({
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

export default DetailStaff;
