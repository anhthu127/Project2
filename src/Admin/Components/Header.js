import React from "react"
import { Link } from "react-router-dom"
import "../Styles/header.css"
import { Button } from "react-bootstrap"
export default class Hearder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: "false"
        }
    }

    render() {
        let header;
        if (this.state.isLogin == "false") {
            return (
                header =
                <div className="header">
                    <div style={{
                        paddingLeft: "50px",
                        width: "700px",
                        height: "20px",
                        display: "inline-block",
                        float: "left",
                    }}>
                        <p>Chào mừng đến chợ cơ khí</p>
                    </div>
                    <div
                        style={{
                            width: "200px",
                            height: "20px",
                            float: "left"
                        }}>
                        <Link className="admin-login" to={"/admin/login"}>Đăng nhập</Link>
                    </div>
                  
                </div>
            )
        } else {
            return (
                header = <div></div>
            )
        }
        return (
            <div></div>
        )
    }
}