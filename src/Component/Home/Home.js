import React from 'react';
import "../../Styles/Home.css"
import BOH from './BOH'
import Header from "../Component/Header"
import 'font-awesome/css/font-awesome.min.css';
import FooterOfHome from "../Component/FooterOfHome";
import News from './NewOfHome';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numProducts: 0,
            category: {

            }
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className='home-page'>
                <header className='header '>
                    <Header  {...this.props}></Header>
                </header>
                <div style={{ height: "35px", width: "100%" }}></div>
                <div className="body-page">
                    <BOH  {...this.props}></BOH>

                    <section className="news" style={{
                        width: '100%',
                        height: '500px',
                        padding: "0px 100px"
                        // background: '#208a95 '
                    }}>
                        <News></News>
                    </section>

                </div>
                <footer style={{ clear: 'both' }}>
                    <FooterOfHome  {...this.props}>
                    </FooterOfHome>
                </footer>
            </div>
        )
    }
}