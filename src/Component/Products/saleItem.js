import React from 'react'
import { Image } from 'react-bootstrap'
export default class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='nor-item'>
                <a>  <Image id='img' src={require('../../Images/may-no.jpg')} thumbnail ></Image> </a>
                <div className='title-box'>
                    <div><span>
                        {this.props.product_name}
                    </span></div>
                </div>
                <div className='price-box'>
                    <div>
                        <a>{this.props.discount_price}</a>
                    </div>
                </div>
            </div>
        )
    }
}