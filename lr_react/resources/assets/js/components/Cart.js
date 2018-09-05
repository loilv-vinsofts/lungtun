import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
        <div>
          {/* Page Banner */}
          <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Cart</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Cart</li>
              </ol>
            </div>{/* Container /- */}
          </div>{/* Page Banner /- */}
          {/* Cart */}
          <div className="woocommerce-cart container-fluid no-left-padding no-right-padding">
            {/* Container */}
            <div className="container">
              {/* Cart Table */}
              <div className="col-md-12 col-sm-12 col-xs-12 cart-table">
                <form>
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Item</th>
                        <th className="product-name">Product Name</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-unit-price">Unit Price</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td data-title="Item" className="product-thumbnail"><a href="#"><img src="images/product-item.jpg" alt="Product" /></a></td>
                        <td data-title="Product Name" className="product-name"><a href="#">mens casual shoe</a></td>
                        <td data-title="Quantity" className="product-quantity">
                          <div className="prd-quantity" data-title="Quantity">
                            <input defaultValue="-" className="qtyminus btn" data-field="quantity1" type="button" />
                            <input name="quantity1" defaultValue={0} className="qty" type="text" />
                            <input defaultValue="+" className="qtyplus btn" data-field="quantity1" type="button" />
                          </div>
                        </td>
                        <td data-title="Unit Price" className="product-unit-price">$550</td>
                        <td data-title="Total" className="product-subtotal">$550</td>
                        <td data-title="Remove" className="product-remove"><a href="#"><i className="icon icon-Delete" /></a></td>
                      </tr>
                      <tr>
                        <td className="action" colSpan={6}>
                          <a href="#" title="Continue shopping">Continue shopping</a>
                          <a href="#" title="update shopping cart">update shopping cart</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>{/* Cart Table /- */}
              {/* Coupon */}
              <div className="col-md-offset-4 col-md-4 col-sm-6 col-xs-6 coupon">
                <div className="coupon-box">
                  <h4>coupon code</h4>
                  <h6>If You Have A Coupon Code Enter Here</h6>
                  <form>
                    <input type="text" className="form-control" placeholder="Coupon Code" />
                    <input type="submit" defaultValue="apply code" />
                  </form>
                </div>
              </div>{/* Coupon /- */}
              <div className="col-md-4 col-sm-6 col-xs-6 cart-collaterals">
                <div className="cart_totals">
                  <h3>cart totals</h3>
                  <table>
                    <tbody><tr>
                        <th>Sub Total</th>
                        <td>$550</td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <th>Grand Total</th>
                        <td>$550</td>
                      </tr>
                    </tbody></table>
                  <div className="wc-proceed-to-checkout">		
                    <a href="#" className="checkout-button button alt wc-forward">Proceed to Checkout</a>
                  </div>
                </div>
              </div>
            </div>{/* Container /- */}
          </div>{/* Cart /- */}
        </div>
      );
  }
}
