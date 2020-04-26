import React from 'react';
import { isNull } from 'util';

class DetailUniProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uniPro: {
                product_name: "",
                product_id: "",
                price: " ",
                description: " ",
                supplier: "",
                quantity: "",
                discount: "",
                discount_price: "",
                ori_price: "",
                id: "",
                tag: "",
                image: [{
                    file: null,
                    imgUrl: '',
                    alt: '',
                    content: '',
                    isDeleted: false
                }],
            },
            status: "",

        }
    }

    handleSelectedFile(file) {
        // Valid file extension
        if (file && file.name.match(/.(jpg|jpeg|png)$/gi)) {
            this.setState({
                ... this.state, file: file, imgUrl: URL.createObjectURL(file)
            })
        } else {
            this.setState({
                ... this.state, imgUrl: ''
            })
        }

    }
    componentDidMount() {
        let stock = 0;
        if (this.props.item.quantity > stock) {
            this.setState({
                ... this.state,
                status: "Đang bán"
            })
        }
        else {
            this.setState({
                ... this.state,
                status: "Hết hàng"
            })
        }
    }
    _updateUniProduct() {
         this.props.updateUniProduct(this.state.uniPro);
    }
    _Clear() {
        this.setState({

            ... this.state,
            // uniPro:{}
            product_name: "a",
            product_id: "a",
            price: " a",
            description: "a ",
            supplier: "a",
            status: "a",
            quantity: "a",
            discount: "a",
            discount_price: "a",
            ori_price: "a",
            id: "a",
            image: [{
                file: null,
                imgUrl: 'a',
                alt: 'a',
                content: 'a',
                isDeleted: false
            }],
        })
    }
    async convertState() {
        await this.setState({
            uniPro: {
                ... this.state.uniPro,
                product_name: this.props.item.product_name,
                product_id: this.props.item.product_id,
                price: this.props.item.price,
                description: this.props.item.description,
                supplier: this.props.item.supplier,
                quantity: this.props.item.quantity,
                discount: this.props.item.discount,
                id: this.props.item.id,
                discount_price: this.props.item.discount_price,
                ori_price: this.props.item.ori_price,
            }
        })
        console.log("states in model details: " + JSON.stringify(this.state.uniPro))

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
                                <h3 className="modal-title" style={{ color: "#007bff" }} >Chi tiết sản phẩm</h3>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div>
                                        <label className="name-label" >MSP</label>
                                        <input type="text" value={this.state.uniPro.product_id} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {

                                                this.setState({

                                                    uniPro: {
                                                        ...this.state.uniPro,

                                                        product_id: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Tên sản phẩm</label>
                                        <input type="text" value={this.state.uniPro.product_name} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({

                                                    uniPro: {
                                                        ...this.state.uniPro,

                                                        product_name: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Nhà cung cấp</label>
                                        <input type="text" value={this.state.uniPro.supplier} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({
                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        supplier: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Mô tả</label>
                                        <input type="text" value={this.state.uniPro.description} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                console.log("value: " + e.target.value)
                                                if (e.target.value != "" && e.target.value != undefined && e.target.value != isNull) {
                                                    this.setState({

                                                        uniPro: {
                                                            ...this.state.uniPro,
                                                            description: e.target.value
                                                        }
                                                    })
                                                }
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Giá bán</label>
                                        <input type="text" value={this.state.uniPro.price} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({

                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        price: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Giảm giá</label>
                                        <input type="text" value={this.state.uniPro.discount} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({
                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        discount: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Giá nhập</label>
                                        <input type="text" value={this.state.uniPro.ori_price} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({
                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        ori_price: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Tag</label>
                                        <input type="text" value={this.state.uniPro.tag} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({
                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        tag: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Số lượng</label>
                                        <input type="text" value={this.state.uniPro.quantity} className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({

                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        quantity: e.target.value
                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Giá đã giảm</label>
                                        <input type="text" value={this.state.uniPro.discount_price}
                                            className="form1" placeholder="Thêm mô tả"
                                            onChange={(e) => {
                                                this.setState({
                                                    uniPro: {
                                                        ...this.state.uniPro,
                                                        discount_price: e.target.value,

                                                    }
                                                })
                                            }} />
                                        <div className="clear" ></div>
                                    </div>
                                    <div>
                                        <label className="name-label" >Trạng thái</label>
                                        <input type="text"
                                            style={{ color: '#000' }}
                                            value={this.state.status} className="form1" disabled={true} />
                                        <div className="clear" ></div>
                                    </div>

                                    <div >
                                        <div>
                                            <label className="name-label" >Ảnh</label>
                                            <input type="file"
                                                className="form1"
                                                onChange={(e) => { this.handleSelectedFile(e.target.files[0]) }} />
                                            <div className="clear" ></div>
                                        </div>

                                    </div>
                                    {this.state.imgUrl &&
                                        <div >
                                            <div>
                                                <img src={this.state.imgUrl} style={{ width: "100%" }} />
                                                <div className="clear" ></div>
                                            </div>

                                        </div>
                                    }
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this._Clear()}>  Clear
                                        </button>
                                        <button
                                            type="button" data-dismiss="modal"

                                            onClick={() => {
                                                this._updateUniProduct()
                                            }}
                                            className="btn btn-primary"  >
                                            Cập nhật
                                    </button>
                                        <button type="button"
                                            data-dismiss="modal"
                                            className="btn btn-primary"  >
                                            Đóng </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span >

        )
    }
}
export default DetailUniProduct;
