import React, { Component } from 'react';
import { NavLink,Route} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
                < div className="container-fluid no-padding menu-block" >
                    {/* Container */}
                    < div className="container" >
                        {/* nav */}
                        < nav className="navbar navbar-default ow-navigation" >
                            <div className="navbar-header">
                                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href="index.html" className="navbar-brand">Max <span>shop</span></a>
                            </div>
                            <div className="navbar-collapse collapse" id="navbar">
                                <ul className="nav navbar-nav">
                                    <li className="active dropdown">
                                        <NavLink to="/" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Home</NavLink>
                                        <i className="ddl-switch fa fa-angle-down" />
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html" title="home 1">home 1</a></li>
                                            <li><a href="index2.html" title="home 2">home 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <NavLink to="/category" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Categories </NavLink>
                                        <i className="ddl-switch fa fa-angle-down" />
                                        <ul className="dropdown-menu">
                                            <li><NavLink to="/cart" title="Cart">Cart</NavLink></li>
                                            <li><a href="checkout.html" title="Checkout">Checkout</a></li>
                                            <li><a href="404.html" title={404}>404</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#product-section" title="Products">Products</a></li>
                                    <li className="dropdown">
                                        <NavLink to="/shop" title="Shop" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Shop</NavLink>
                                        <i className="ddl-switch fa fa-angle-down" />
                                        <ul className="dropdown-menu">
                                            <li><a href="shop-single.html" title="Shop Single">Shop Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <NavLink to="/blog" title="Blog" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Blog</NavLink>
                                        <i className="ddl-switch fa fa-angle-down" />
                                        <ul className="dropdown-menu">
                                            <li><a href="blog-post.html" title="Blog Post">Blog Post</a></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/about" title="About Us">About Us</NavLink></li>
                                    <li><NavLink to="/contact" title="Contact Us">Contact Us</NavLink></li>
                                </ul>
                            </div>{/*/.nav-collapse */}
                        </nav > {/* nav /- */}
                    </div > {/* Container /- */}
                </div >
        )
    }
}
