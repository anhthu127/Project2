import React from 'react'

import "../../Styles/ModalCreate.css"
export default class ModalCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: "",
            product_id: "",
            price: " ",
            description: " ",
            supplier: "",
            status: "",
            color: "",
            quantity: "",
            discount: "",
            discount_price: "",
            ori_price: "",
            // image: [{
            //     file: null,
            //     imgUrl: '',
            //     alt: '',
            //     content: '',
            //     isDeleted: false
            // }]
        }
    }
    _dataClear() {
        this.setState({
            product_name: "",
            product_id: "",
            price: " ",
            description: " ",
            supplier: "",
            status: "",
            color: "",
            quantity: "",
            discount: "",
            discount_price: "",
            ori_price: "",
        });
    }

    _addUniProduct() {
        let data;
        if (this.state.quantity <= 0) {
            this.setState({
                status: "off"
            })
        } else {
            this.setState({
                status: "on"
            })
        }
        data = this.state;
        console.log("state: "+JSON.stringify(this.state))
        console.log("data: "+JSON.stringify(data))
        this.props.createUniProduct(data);
        this._dataClear();
    }
    componentDidMount() {
    }
    render() {
        return (
            <div> 
                <button type="button" className="btn btn-success"
                    data-toggle="modal" data-target="#myModal">Thêm</button>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" style={{ color: "#28a745" }} >Thêm sản phẩm mới</h4>
                                <button type="button" className="close" data-dismiss="modal"
                                    onClick={() => this._dataClear()}>×</button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label className="name-label" >Tên sản phẩm </label>
                                    <input className="form1" placeholder="Tên sản phẩm" value={this.state.product_name}
                                        onChange={(e) => { this.setState({ product_name: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>

                                <div >
                                    <label className="name-label" >Nhà phân phối</label>
                                    <input className="form1" placeholder="Nhà phân phối " value={this.state.supplier}
                                        onChange={(e) => { this.setState({ supplier: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                                <div style={{ marginTop: "18px" }} >
                                    <label className="name-label" >Giá nhập</label>
                                    <input className="form1" placeholder="Giá nhập" value={this.state.price}
                                        onChange={(e) => { this.setState({ price: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                                <div style={{ marginTop: "18px" }} >
                                    <label className="name-label" >Số lượng </label>
                                    <input className="form1" placeholder="Số lượng" value={this.state.quantity}
                                        onChange={(e) => { this.setState({ quantity: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                                <div style={{ marginTop: "18px" }} >
                                    <label className="name-label" >Giá bán</label>
                                    <input className="form1" placeholder="Giá bán" value={this.state.price}
                                        onChange={(e) => { this.setState({ price: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                                <div style={{ marginTop: "18px" }} >
                                    <label className="name-label" >Giảm giá </label>
                                    <input className="form1" placeholder="Giảm giá %" value={this.state.discount}
                                        onChange={(e) => { this.setState({ discount: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                                <div style={{ marginTop: "18px" }} >
                                    <label className="name-label" >Giá bán đã giảm</label>
                                    <input className="form1" placeholder="Giá đã giảm" value={this.state.discount_price}
                                        onChange={(e) => { this.setState({ discount_price: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                                <div style={{ marginTop: "18px" }} >
                                    <label className="name-label" > Miêu tả </label>
                                    <input className="form1" placeholder=" Miêu tả sản phẩm" value={this.state.description}
                                        onChange={(e) => { this.setState({ description: e.target.value }) }} />
                                    <div className="clear" ></div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button" onClick={this.handleAdd}
                                    className="btn btn-primary">AddForm</button>

                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this._addUniProduct()}>Thêm</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this._dataClear()} >Close</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}