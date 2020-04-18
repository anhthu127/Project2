import React from "react"
import Header from "../Component/Header"
import FooterOfHome from "../Component/FooterOfHome"


class HotNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='hot-news-products-page'>
                hi im hot news
                <div className='router-header'>
                    <Header></Header>
                </div>
                {/* <body>
                    <section>

                    </section>
                </body>


                <footer>
                    <FooterOfHome />
                </footer> */}

            </div>
        )
    }
}
export default HotNews;