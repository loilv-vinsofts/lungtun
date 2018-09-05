import React, { Component } from 'react'

export default class Testimonial extends Component {
  render() {
    return (
        <div className="testimonial-section container-fluid">
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Happy Clients Says</h3>
              <p> our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>{/* Section Header /- */}
            {/* Main Carousel */}
            <div id="main-carousel1" className="carousel slide carousel-fade" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#main-carousel1" data-slide-to={0} className="active" />
                <li data-target="#main-carousel1" data-slide-to={1} />
                <li data-target="#main-carousel1" data-slide-to={2} />
              </ol>
              <div role="listbox" className="carousel-inner">
                <div className="item active">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>The final frontier. These are the voyages of the Starship Enterprise? As long as we live its you and me baby. There ain't nothin'  Beats all you've ever saw been in trouble with the law since the day. </p>
                    <img src="images/testi.jpg" alt="testi" />
                    <span className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </span>
                    <h3>Strahow stuart</h3>
                    <h5>Web Designer</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>The final frontier. These are the voyages of the Starship Enterprise? As long as we live its you and me baby. There ain't nothin'  Beats all you've ever saw been in trouble with the law since the day. </p>
                    <img src="images/testi.jpg" alt="testi" />
                    <span className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </span>
                    <h3>Strahow stuart</h3>
                    <h5>Web Designer</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>The final frontier. These are the voyages of the Starship Enterprise? As long as we live its you and me baby. There ain't nothin'  Beats all you've ever saw been in trouble with the law since the day. </p>
                    <img src="images/testi.jpg" alt="testi" />
                    <span className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </span>
                    <h3>Strahow stuart</h3>
                    <h5>Web Designer</h5>
                  </div>
                </div>
              </div>
            </div>{/* Main Carousel /-  */}
          </div>{/* Container /- */}
        </div>
      );
  }
}
