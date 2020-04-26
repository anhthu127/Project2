import React from 'react';
import { domain } from "../../../Constant"
export default class DeleteUniProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      File: "",
      alt: '',
      content: '',

    }
  }

  _deleteUni() {
      this.props.delUniProduct(this.props.item.id)
}
render() {
  return (
    <span>
      <button type="button" className="btn btn-danger" data-toggle="modal"
        data-target={"#" + this.props.deleteData}
        onClick={() => {
          this.setState({
            id: this.props.item.id,
            file: "",
            imgUrl: domain + "/" + this.props.item.name,
            content: this.props.item.content,
            alt: this.props.item.alt
          })
        }}
      >Xóa</button>

      <div className="modal fade" id={this.props.deleteData} role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header" style={{ color: "red" }}>

              <h4 className="modal-title" style={{
                marginLeft: "30px",
              }} >Bạn có chắc chắn muốn xóa không ?</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <button type="button" className="btn btn-primary" data-dismiss="modal"
                onClick={() => this._deleteUni()}
                style={{
                  marginLeft: "35px",
                  width: "75px",
                  heigt: "50px"
                }} >Có</button>
              <button type="button" className="btn btn-danger"
                data-dismiss="modal" style={{
                  marginLeft: "10px",
                  width: "75px",
                  heigt: "50px"
                }}>Không</button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </span>

  )
}
}
 