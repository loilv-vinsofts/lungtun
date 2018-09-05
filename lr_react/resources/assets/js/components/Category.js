import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
        <div className="category-section category-section1 container-fluid no-padding">
          {/* Container */}
          <div className="container">
            <div className="row">
              <div className="category-carousel1">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="category-box layout-1">
                    <img src="images/category-5.jpg" alt="category" />
                    <div className="category-content">
                      <p>shop the latest technologies</p>
                      <h5>save upto 40%</h5>
                      <a href="#" title="Shop Now">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 category-images no-left-padding">
                  <div className="category-box layout-3">
                    <img src="images/category-6.jpg" alt="category" />
                    <div className="category-content">
                      <p>new homemade Products</p>
                      <h5>big offers On</h5>
                      <a href="#" title="Shop Now">Shop Now</a>
                    </div>
                  </div>
                  <div className="category-box layout-4">
                    <img src="images/category-7.jpg" alt="category" />
                    <div className="category-content">
                      <p>special offers for kids</p>
                      <h5>save upto 60%</h5>
                      <a href="#" title="Shop Now">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* Row /- */}
          </div>{/* Container /- */}
        </div>
      );
  }
}
