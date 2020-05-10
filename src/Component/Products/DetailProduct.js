import React from 'react';
import { isNull } from 'util';

class DetailStaff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
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
