import React from 'react'
import "../../Styles/NewOfHome.css"
import { Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

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
                    <a href='#'>
                        Góc tin tức
                    </a>
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