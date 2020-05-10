import React from 'react'
import Header from '../Component/Header'
import '../../Styles/Products.css'
import FooterOfHome from '../Component/FooterOfHome'
import { Row, Col } from 'react-bootstrap'
import SiderBar from './SiderBar'
import Filter from './Filter'
import CoKhi from './CoKhi'
import NormalItem from './NormalItem'
import Item from './saleItem'
import DungPin from './DungPin'

export default class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none",
            product_type: null,
            displayitem: "block",
            price: null,
            discount: null,
            src_img: null,
            price_sale: null,

        }
    }

    componentDidMount() {
        this.props.initLoad()
    }
    _mainProduct() {
        return (
            <div>              
                        <div style={{ display: this.state.displayitem }}>
                            <NormalItem {...this.props} />
                        </div>
                        <div style={{ display: this.state.display }}>
                            <Item {...this.props} />
                        </div>
            </div>
        )
    }
    render() {
        let content;
        let url = window.location.href;
        if (this.props.product) {
            switch (url) {
                case "http://localhost:3000/products":
                    content = this._mainProduct();
                    break;
                case "http://localhost:3000/products/dung-cu-dung-pin":
                    content = <DungPin {...this.props}/>;
                    break;
                case "http://localhost:3000/products/dung-cu-co-khi":
                    content = <CoKhi {...this.props} />;
                    break;
                case "http://localhost:3000/products/dung-cu-xay-dung":

                    break;
                case "http://localhost:3000/product/dung-cu-gia-dinh":

                    break;
                case "http://localhost:3000/product/dung-cu-cam-tay":

                    break;
                case "http://localhost:3000/product/may-no":

                    break;
                case "http://localhost:3000/product/may-cat":

                    break;
            }
        }
        console.log("state: " + JSON.stringify(this.state))

        return (
            <div className='products-page' >
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
                                {content}
                                <div className="wrap-pagination">
                                    <div>
                                    
                                    </div>
                                </div>
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