import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
export default class ModalCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='wrap-search'>
                <section  >
                    <div className="header" 
                    style={{ 
                        background: '#ffc000',
                        textAlign: 'center' ,
                        width:'100%',
                        height: '50px',
                        paddingTop: '5px',
                        border: '3px solid #ffffff ',
                        fontFamily: 'Arial, Helvetica, sans-serif',

                        }}>
                        <h2>Quản lý sản phẩm</h2>
                    </div>
                </section>
                {/* <div style={{ width: "100%", height: "7px" }}></div> */}
                <section className="extension" >
                    <div>
                        <input placeholder="Tìm kiếm" style={{ width: "500px", height: "39px" }} />
                        <Button className="btn-search">
                            <FontAwesomeIcon icon={faSearch} size="1x" style={{ width: "25px", height: "25px" }} />
                        </Button>
                    </div>
                </section>
            </div>
        )
    }
}