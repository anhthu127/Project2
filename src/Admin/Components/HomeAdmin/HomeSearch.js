import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
export default class ModalSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='wrap-search'>
                <div style={{ width: "100%", height: "10px" }}></div>
                <section className="extension" >
                    <div>
                        <input placeholder="Tìm kiếm" style={{ paddingLeft: "10px", width: "500px", height: "39px" }} />
                        <Button className="btn-search">
                            <FontAwesomeIcon icon={faSearch} size="1x" style={{ width: "25px", height: "25px" }} />
                        </Button>
                    </div>
                </section>
            </div>
        )
    }
}