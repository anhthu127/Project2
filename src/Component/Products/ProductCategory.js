import React from "react"


export default class ProductCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="category-page">
                <header className='router-header'>
                    <Header></Header>
                </header>
                <div className='body-page-collection'>

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
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}