import React, { Component } from 'react'
import Menu from './Menu';

export default class Header extends Component {
  render() {
    return(
      <header className="header-section header-section-1 container-fluid no-padding">
        {/* Top Header */}
        <div className="top-header top-header1 container-fluid no-padding">
          {/* Container */}
          <div className="container">
            <div className="col-md-7 col-sm-7 col-xs-7 dropdown-bar">
              <h5>Welcome To Max Shop</h5>
              <div className="language-dropdown dropdown">
                <button aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" title="languages" id="language" type="button" className="btn dropdown-toggle">English <span className="caret" /></button>
                <ul className="dropdown-menu no-padding">
                  <li><a title="Danish" href="#">Danish</a></li>
                  <li><a title="German" href="#">German</a></li>
                  <li><a title="French" href="#">French</a></li>
                </ul>
              </div>
              <div className="language-dropdown dropdown">
                <button aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" title="currency" id="currency" type="button" className="btn dropdown-toggle">US Dollar<span className="caret" /></button>
                <ul className="dropdown-menu no-padding">
                  <li><a title="Danish" href="#">Usd</a></li>
                  <li><a title="German" href="#">Ora</a></li>
                  <li><a title="French" href="#">Riyal</a></li>
                </ul>
              </div>
            </div>
            {/* Social */}
            <div className="col-md-5 col-sm-5 col-xs-5 header-social"> 
              <ul>
                <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
                <li><a href="#" title="Pinterest"><i className="fa fa-pinterest-p" /></a></li>
              </ul>
            </div>{/* Social /- */}
          </div>{/* Container /- */}
        </div>{/* Top Header /- */}
        {/* Middel Header */}
        <div className="middel-header">
          {/* Container */}
          <div className="container">
            {/* Logo Block */}
            <div className="col-md-4 col-sm-6 col-xs-12 logo-block">
              <a href="index.html" className="navbar-brand">Max <span>shop</span></a>
            </div>{/* Logo Block /- */}
            {/* Search Block */}
            <div className="col-md-5 col-sm-6 col-xs-6 search-block">
              <div className="input-group">
                <input className="form-control" placeholder="Search You Wants Here . . ." type="text" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button"><i className="icon icon-Search" /></button>
                </span>
              </div>
            </div>{/* Search Block /- */}
            {/* Menu Icon */}
            <div className="col-md-3 col-sm-6 col-xs-6 menu-icon">
              <ul className="cart">
                <li>
                  <a aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" id="cart" className="btn dropdown-toggle" title="Add To Cart" href="#"><i className="icon icon-ShoppingCart" /></a>
                  <ul className="dropdown-menu no-padding">
                    <li className="mini_cart_item">
                      <a title="Remove this item" className="remove" href="#">×</a>
                      <a href="#" className="shop-thumbnail">
                        <img alt="poster_2_up" className="attachment-shop_thumbnail" src="images/product-wishlist-1.jpg" />Flying Ninja
                      </a>
                      <span className="quantity">2 × <span className="amount">Rs.12.00</span></span>
                    </li>
                    <li className="mini_cart_item">
                      <a title="Remove this item" className="remove" href="#">×</a>
                      <a href="#" className="shop-thumbnail">
                        <img alt="poster_2_up" className="attachment-shop_thumbnail" src="images/product-wishlist-2.jpg" />Flying Ninja
                      </a>
                      <span className="quantity">2 × <span className="amount">Rs.12.00</span></span>
                    </li>
                    <li className="button">
                      <a href="#" title="View Cart">View Cart</a>
                      <a href="#" title="Check Out">Check out</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#" title="Like"><i className="icon icon-Heart" /></a></li>
                <li><a href="#" title="User"><i className="icon icon-User" /></a></li>
              </ul>
            </div>{/* Menu Icon /- */}
          </div>{/* Container /- */}
        </div>{/* Middel Header /- */}
        <Menu />
      </header>
    );
  }
}
