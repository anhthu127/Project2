import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import * as page from '../Page';


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
          <div>
            <Switch>
              <Route path="/test" component={page.Test} />
              <Route exact path="/login/admin" component={page.AdminLogin} />
              <Route path="/admin" component={page.AdminHome} />
              <Route exact path="/" component={page.HomeContainer} />
              <Route path='/register' component={page.Register} />
              <Route path='/login' component={page.Login} />
              <Route path='/products' component={page.ProductContainer} />
              <Route exact path="/cart" component={page.Cart} />
              <Route path="/receipt " component={page.ReceiptUser} />
              <Route exact path="/Checkout" component={page.Checkout} />
              <Route path='/detail/:id' component={page.DetailProduct} />
              {/* <Route exact path='/products/:id' component={page.ProductContainer} /> */}
              <Route path='/product/best-selling' component={page.BestSelling} />
              <Route path='/product/new-product' component={page.NewProducts} />
              <Route path='/hot-news' component={page.HotNews} />
              <Route path='/Home/:id' component={page.HomeContainer} />
              <Route path='/Home' component={page.HomeContainer} />
              <Route path='/Example' component={page.Example} />
              <Route path='/product-admin' component={page.ProductManagement} />
              <Route path='/staff-admin' component={page.Staff} />
              <Route path='/customer-admin' component={page.Customer} />
              <Route path='/mnager-admin' component={page.Manager} />
              <Route path='/receipt-admin' component={page.Receipt} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
