import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer id="footer-main" className="footer-main footer-main-1 services-section container-fluid">
          {/* Container */}
          <div className="container">
            <div className="services-item">
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="srv-box">
                  <i className="icon icon-Truck" /><h5>Free delivery</h5><i className="icon icon-Dollar" />
                  <span className="icon_close" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="srv-box">
                  <i className="icon icon-Goto" /><h5>Money Back</h5><i className="icon icon-Dollars" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="srv-box">
                  <i className="icon icon-Headset" /><h5>24/7 support</h5><i className="icon icon-Timer" />
                </div>
              </div>
            </div>
            {/* Widget About */}
            <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget widget_about">
              <a href="index.html" title="Max Shop">Max <span>Shop</span></a>
              <p>On the most sensational inspirational celbrational Muppetational... This is what we call Show. I have always wanted to have a neighbor just like you.</p>
              <ul className="social">
                <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
              </ul>
            </aside>{/* Widget About /- */}
            {/* Widget Links */}
            <aside className="col-md-2 col-sm-6 col-xs-6 ftr-widget widget_links">
              <h3 className="widget-title">Popular Links</h3>
              <ul>
                <li><a href="#product-section" title="Popular Products">Popular Products</a></li>
                <li><a href="#selling" title="Best Selling">Best Selling</a></li>
                <li><a href="about.html" title="About Us">About Us</a></li>
                <li><a href="#deal" title="Deal Of The Day">Deal Of The Day</a></li>
                <li><a href="#collection" title="Product Collections">Product Collections</a></li>
                <li><a href="contact-us.html" title="Contact Us">Contact Us</a></li>
              </ul>
            </aside>{/* Widget Links /- */}
            {/* Widget Account */}
            <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget widget_links widget_account">
              <h3 className="widget-title">my account</h3>
              <ul>
                <li><a href="#" title="My Order Details">My Order Details</a></li>
                <li><a href="#" title="My credit Offers">My credit Offers</a></li>
                <li><a href="#" title="My addresses">My addresses</a></li>
                <li><a href="#" title="My Personal Details">My Personal Details</a></li>
                <li><a href="#" title="My Account Details">My Account Details</a></li>
              </ul>
            </aside>{/* Widget Account /- */}
            {/* Widget Gallery */}
            <aside className="col-md-4 col-sm-6 col-xs-6 ftr-widget widget_gallery">
              <h3 className="widget-title">collections</h3>
              <ul>
                <li><a href="#" title><img src="images/ftr-latestpost-1.jpg" alt="ftr-latestpost" /></a></li>
                <li><a href="#" title><img src="images/ftr-latestpost-2.jpg" alt="ftr-latestpost" /></a></li>
                <li><a href="#" title><img src="images/ftr-latestpost-3.jpg" alt="ftr-latestpost" /></a></li>
                <li><a href="#" title><img src="images/ftr-latestpost-4.jpg" alt="ftr-latestpost" /></a></li>
                <li><a href="#" title><img src="images/ftr-latestpost-5.jpg" alt="ftr-latestpost" /></a></li>
                <li><a href="#" title><img src="images/ftr-latestpost-6.jpg" alt="ftr-latestpost" /></a></li>
              </ul>
            </aside>{/* Widget Gallery */}
            <div className="copyright-section">
              <div className="coyright-content">
                <p>© Max shop. all rights reserved</p>
              </div>	
              <ul>
                <li><a href="#" title="Delivery Information">Delivery Information</a></li>
                <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
                <li><a href="#" title="Terms & Condition">Terms &amp; Condition</a></li>
              </ul>
            </div>
          </div>{/* Container /- */}
        </footer>
      );
  }
}
