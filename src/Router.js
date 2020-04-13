import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as page from './Page';


export default class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="content">
        <BrowserRouter >
          <Switch>
          <Route exact path="/home-admin" component={page.AdminHome} />
            <Route exact path="/" component={page.HomeContainer} />
            <Route path='/login' component={page.Login} />
            <Route path='/register' component={page.Register} />
            <Route path='/Products' component={page.ProductContainer} />
            <Route path='/Home' component={page.HomeContainer} />
            <Route path='/Example' component = {page.Example}/>
            {/* <Route path='/Admin' component={page.Router} /> */}
            <Route exact path="/uni-product" component={page.UniProduct} />
            <Route path='/product-admin' component={page.Product} />
            <Route path='/staff-admin' component={page.Staff} />
            <Route path='/customer-admin' component={page.Customer} />
            <Route path='/mnager-admin' component={page.Manager} />
            <Route path='/receipt-admin' component={page.Receipt} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
