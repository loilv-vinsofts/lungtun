import React, { Component } from 'react'

export default class Selling extends Component {
  render() {
    return (
        <div id="selling" className="container-fluid no-padding woocommerce-selling woocommerce-selling1">
          <div className="col-md-6 col-sm-6 col-xs-6 selling-detail">
            {/* Section Header */}
            <div className="section-header">
              <h3>Best Selling Accessories</h3>
              <p> our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>{/* Section Header /- */}
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-1.jpg" alt="selling" />
                <div className="selling-content">
                  <h6><a href="#">mens casual belts</a></h6>
                  <span className="price"><del>$75</del> $49</span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-2.jpg" alt="selling" />
                <div className="selling-content">
                  <h6><a href="#">attractive chains</a></h6>
                  <span className="price"><del>$220</del> $149</span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-4.jpg" alt="selling" />
                <div className="selling-content">
                  <h6><a href="#">casual shirts</a></h6>
                  <span className="price"><del>$240</del> $179</span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-5.jpg" alt="selling" />
                <div className="selling-content">
                  <h6><a href="#">ladies wallets</a></h6>
                  <span className="price"><del>$120</del> $79</span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-2.jpg" alt="selling" />
                <div className="selling-content">
                  <h6><a href="#">attractive chains</a></h6>
                  <span className="price"><del>$220</del> $149</span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-6.jpg" alt="selling" />
                <div className="selling-content">
                  <h6><a href="#">huvai chappals</a></h6>
                  <span className="price"><del>$850</del> $550</span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 selling-img" data-image="images/selling-bg.jpg" />
        </div>
      );
  }
}
