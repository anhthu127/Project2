import React from "react"
import { Link } from "react-router-dom"

export default class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={"/list/1"}>List 1</Link>
                    </li>
                    <li>
                        <Link to={"/list/2"}>List 2</Link>
                    </li>  <li>
                        <Link to={"/list/3"}>List 3</Link>
                    </li>  <li>
                        <Link to={"/list/4"}>List 4</Link>
                    </li>
                </ul>
            </div>
        )
    }
}