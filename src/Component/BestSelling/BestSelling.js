import React from 'react'
import Header from '../Component/Header'
import FooterOfHome from '../Component/FooterOfHome'
import SiderBar from '../Products/SiderBar'
import { Row, Col } from 'react-bootstrap'
import Filter from '../Products/Filter'

export default class BestSelling extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='best-selling-page'>
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
                            </section>
                        </Col>
                    </Row>
                </div>

                <div style={{ height: "5px", width: "100%" }}></div>
                <footer style={{ clear: 'both' }}>
                    <FooterOfHome>
                    </FooterOfHome>
                </footer>
            </div >
        )
    }

}