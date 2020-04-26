import React from 'react'
import "../../Styles/NewOfHome.css"
import { Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='wrap-news'>
                <h2 className='title-box'>
                    <Link to={"/hot-news"}>
                        Góc tin tức
                    </Link>
                </h2>
                <div>
                    <Row>
                        <Col lg={4}>
                            <Image></Image>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}