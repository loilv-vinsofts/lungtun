import React, { Component } from 'react'

export default class Deal extends Component {
  render() {
    return (
        <div id="deal" className="dealing-section container-fluid no-padding">
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Deals Of The Day</h3>
              <p>our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>{/* Section Header /- */}
          </div>{/* Container /- */}
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="dealing-img">
              <a href="#">
                <img src="images/deal-1.png" alt="deal" />
                <h5>mens casual shoes</h5>
                <span className="price"><del>$650</del>$459</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-6 saleup-img">
            <div data-date="2017/04/04" id="clock-1" className="clock" />
            <h5>mens casual shoes</h5>
            <p>The weather started getting rough the tossed. If not for the courage of the fearless crew the Minnow would be lost.  would be lost. </p>
            <a href="#" title="Shop Now" className="shop-now">Shop Now</a>
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="dealing-img dealing-img2">
              <a href="#">
                <img src="images/deal-2.png" alt="deal" />
                <h5>mens casual shoes</h5>
                <span className="price"><del>$850</del>$559</span>
              </a>
            </div>
          </div>
        </div>
      );
  }
}
