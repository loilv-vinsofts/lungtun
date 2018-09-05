import React, { Component } from 'react'

export default class Checkout extends Component {
  render() {
    return (
        <div>
          {/* Page Banner */}
          <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Checkout</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Checkout</li>
              </ol>
            </div>{/* Container /- */}
          </div>{/* Page Banner /- */}
          {/* Checkout */}
          <div className="container-fluid no-left-padding no-right-padding woocommerce-checkout">
            {/* Container */}
            <div className="container">
              {/* Login */}
              <div className="col-md-12 col-sm-12 col-xs-12 login-block">
                <div className="login-check">
                  <h3>Your Contact Email</h3>
                  <div className="col-md-7 col-sm-6 col-xs-6 login-form">
                    <form>
                      <div className="form-group">
                        <input className="form-control" placeholder="Email *" type="text" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Password *" type="text" />
                      </div>
                      <input defaultValue="SIGN IN" type="submit" />
                      <a href="#" title="Forgot Password?">Forgot Password?</a>
                    </form>
                  </div>
                  <div className="col-md-5 col-sm-6 col-xs-6 check-details">								
                    <div className="check-detail">
                      <h5>Create An Account</h5>
                      <input name="payment" type="radio" />
                      <label>Register and checkout together</label>
                    </div>
                    <div className="check-detail">
                      <h5>Guest Checkout</h5>
                      <input name="payment" type="radio" />
                      <label>Checkout without registering</label>
                    </div>
                    <div className="check-detail">
                      <a href="#" title="continue" className="continue">Continue</a>
                    </div>
                  </div>
                </div>
              </div>{/* Login /- */}
              {/* Billing */}
              <div className="checkout-form">
                <form>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3>Billing Address</h3>
                    <div className="billing-field">
                      <div className="col-md-12 form-group">
                        <label>Country *</label>
                        <div className="select">
                          <select className="form-control">
                            <option>United States</option>
                            <option>United States</option>
                            <option>United States</option>
                            <option>United States</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>First name *</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Last name *</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Office / Home /  Others</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Address 1 *</label>
                        <input className="form-control" placeholder="Street Address" type="text" />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Address 2 (Optional)</label>
                        <input className="form-control" placeholder="Apartment, suite, unit, etc..." type="text" />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Town / City *</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>State / Country *</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Pincode/Zip *</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Email Address *</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Phone Number*</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12 woocommerce-info">
                      <input type="checkbox" />
                      <label>Create an Account ? or Sign in with</label>
                      <a href="#" className="fb" title="Facebook"><i className="fa fa-facebook-square" /></a>
                      <a href="#" className="gp" title="Facebook"><i className="fa fa-google-plus-square" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3>Your Order</h3>
                    <div className="shipping-fields">
                      <div className="checkout-order-table">
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="cart_item">
                              <td className="product-name">MENS CASUAL SHOE</td>
                              <td>$550.00</td>
                            </tr>
                            <tr className="cart-subtotal">
                              <th>Sub Total</th>
                              <td>$550.00</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Shipping</th>
                              <td>Free Shipping</td>
                            </tr>
                            <tr>
                              <th>Total Order</th>
                              <td>$550.00</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="checkout-payment">
                        <ul>
                          <li>
                            <input defaultValue="Direct Bank Transfer" defaultChecked type="radio" />
                            <label>Direct Bank Transfer</label>
                            <div className="payment_box">
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account.</p>
                            </div>
                          </li>
                          <li>
                            <input defaultValue="Paypal" type="radio" />
                            <label>Paypal <img src="images/paypal.jpg" alt="Paypal" /></label>
                          </li>
                        </ul>
                      </div>
                      <div className="place-order">
                        <input defaultValue="PLACE YOUR ORDER" type="submit" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>{/* Billing /- */}
            </div>{/* Container /- */}
          </div>{/* Checkout /- */}
        </div>
      );
  }
}
