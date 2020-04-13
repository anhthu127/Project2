import React from 'react'
import { Image } from 'react-bootstrap'
import '../../Styles/NorItem.css'
export default class NormalItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='nor-item'>
                <a>  <Image  id='img' src={require('../../Images/may-no.jpg')} thumbnail ></Image> </a>
                <div className='title-box'>
                    <div><span>
                        Máy nổ
                    </span></div>
                </div>
                <div className='price-box'>
                    <div>
                        <a>2.000.000đ</a>
                    </div>
                </div>
            </div>
        )
    }
}