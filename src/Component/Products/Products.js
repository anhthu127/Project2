import React from 'react'
import Header from '../Component/Header'
import '../../Styles/Products.css'
import FooterOfHome from '../Component/FooterOfHome'
import { Row, Col, Alert, Pagination } from 'react-bootstrap'
import SiderBar from './SiderBar'
import Filter from './Filter'
import CoKhi from './CoKhi'
import NormalItem from './NormalItem'
import Item from './saleItem'
import DungPin from './DungPin'
import { values } from 'json-server-auth'


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
            background: 'none',
            active: 0,
            pager: '',
            totalPage: '',
            data: [],
            items: [],
        }
    }

    componentDidMount() {
        this.props.initLoad()

    }

    _mainProduct() {
        return (
            <div>
                <div style={{ display: this.state.displayitem }}>
                    <NormalItem {... this.props}
                    />
                </div>
                <div style={{ display: this.state.display }}>
                    <Item {... this.props} />
                </div>
            </div>
        )
    }
    render() {
        let content;
        let url = window.location.href;
        let items = [];
        // if (this.props.product) {
        //     this.props.product.forEach(element => {
        //         items.push(element);
        //     });
        // }
        // let totalPage = parseInt(8 / 6) + 1;
        // let page = []
        // for (let i = 1; i <= totalPage; i++) {
        //     page.push(i);
        // }
        // console.log("page: " + page.length)
        // if (this.props.product) {
        //     this.props.product.forEach(element => {
        //         items.push(element);
        //     });
        // }
        console.log("hihi: " + items.length)
        if (this.props.product) {
            switch (url) {
                case "http://localhost:3000/products":
                    content = this._mainProduct();
                    break;
                case "http://localhost:3000/products/dung-cu-dung-pin":
                    content = <DungPin {...this.props} />;
                    break;
                case "http://localhost:3000/products/dung-cu-co-khi":
                    content = <CoKhi {...this.props} />;
                    break;
                case "http://localhost:3000/products/dung-cu-xay-dung":
                    Alert("Chưa làm")
                    break;
                case "http://localhost:3000/product/dung-cu-gia-dinh":
                    Alert("Chưa làm")

                    break;
                case "http://localhost:3000/product/dung-cu-cam-tay":
                    Alert("Chưa làm")

                    break;
                case "http://localhost:3000/product/may-no":
                    Alert("Chưa làm")

                    break;
                case "http://localhost:3000/product/may-cat":
                    Alert("Chưa làm")

                    break;
            }
        }

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
                                    {/* <li>
                                        navigator
                                  </li> */}
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
                            </section>
                            <div style={{ width: '100%', height: '50px' }}></div>
                            <div className="wrap-pagination">
                                <ul
                                    className="paginate">
                                    {/* <li className='item'>
                                        <a className='page-link'> «</a>
                                    </li>
                                    {
                                        page.map((value, key) => {
                                            return (
                                                <li className='item' key={key}   >
                                                    <a className='page-link'>
                                                        {value}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                    <li className='item'>
                                        <a className='page-link'> »</a>
                                    </li> */}
                                </ul>

                            </div>
                        </Col>
                    </Row>

                    <div style={{
                        width: '100%', height: '50px'
                    }}></div>
                </div >
                <footer style={{ clear: 'both' }}>
                    <FooterOfHome>
                    </FooterOfHome>
                </footer>
            </div >
        )
    }
}