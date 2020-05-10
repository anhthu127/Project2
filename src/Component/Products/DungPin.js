import React from "react"
import { Row, Col } from "react-bootstrap"
import { Image } from 'react-bootstrap'

export default class DungPin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none",
            displayitem: "block",
            content: null,
            data: null,
            isFetching: false,
        }
    }
    componentWillMount() {
        fetch('http://localhost:3001/product?type=01', {
            method: "GET",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify()
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Something went wrong...')
            }
        })
            .then(data => this.setState({
                data: data,
                isLoading: false
            }))
            .catch(error =>
                console.log(JSON.stringify(error))
            )
    }
    render() {
        console.log("hihi: " + JSON.stringify(this.state.data))
        let show;
        {
            if (this.state.data) {
                show = this.state.data.map((item, key) => {
                    return (
                        <Col lg={4} xs={4} ms={4} className='item-product' key={key}>
                            <div className='nor-item' >
                                <a>
                                    <Image src={require("../../Images/may-no.jpg")}
                                        id='img' thumbnail ></Image>
                                    {/* baseImage+item.url */}
                                </a>
                                <div className='title-box'>
                                    <div>
                                        <span>
                                            {item.product_name}
                                        </span>
                                    </div>
                                </div>
                                <div className='price-box'>
                                    <div>
                                        <a>{item.price}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        }
        return (
            <div>
                {show}
            </div>
        )
    }
}