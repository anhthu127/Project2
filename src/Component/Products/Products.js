import React from 'react'
import Header from '../Component/Header'
import '../../Styles/Products.css'
import FooterOfHome from '../Component/FooterOfHome'
import { Row, Col } from 'react-bootstrap'
import SiderBar from './SiderBar'
import Filter from './Filter'
 import NormalItem from './item'
 import Item from './saleItem'

export default class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none",
            displayitem: "block",
            price: "",
            discount:"",
            src_img:"",
            price_sale:"",
            
        }
    }
    render() {
        return (

            <div className='products-page'>
                <header className='router-header'>
                    <Header></Header>
                </header>
                <div className='body-page-collection'>
                    <section className='bread-crum'>
                        <div className='container'>
                            <Row lg={12}>
                                <ul>
                                    <li>
                                        navigator
                                  </li>
                                </ul>
                            </Row>
                        </div>
                    </section>
                    <Row className='main-page'>
                        <Col lg={3}>
                            <aside className='nav-sidebar'>
                                <SiderBar></SiderBar>
                            </aside>
                        </Col>
                        <Col lg={9}>
                            <section className='sort-filter'>
                                <Filter></Filter>
                            </section>
                            <section className='product-collection'>

                                <Row className='wrap-item'>
                                    <Col className='item-product'>
                                        <div style={{ display: this.state.displayitem }}>
                                           <NormalItem></NormalItem>
                                        </div>
                                        <div style={{ display: this.state.display }}>
                                            <Item></Item>
                                        </div>
                                    </Col>
                                    <Col className='item-product'>
                                        <div style={{ display: this.state.displayitem }}>
                                        <NormalItem></NormalItem>
                                        </div>
                                        <div style={{ display: this.state.display }}>
                                            <Item></Item>
                                        </div>
                                    </Col>
                                    <Col className='item-product'>
                                        <div style={{ display: this.state.displayitem }}>
                                        <NormalItem></NormalItem>
                                        </div>
                                        <div style={{ display: this.state.display }}>
                                            <Item></Item>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </Row>
                    <div style={{
                        width: '100%', height: '50px'
                    }}></div>
                </div>
                <footer style={{ clear: 'both' }}>
                    <FooterOfHome>
                    </FooterOfHome>
                </footer>
            </div>
        )
    }
}