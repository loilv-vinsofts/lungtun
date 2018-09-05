import React, { Component } from 'react'

export default class Collection extends Component {
  render() {
    return (
        <div id="collection" className="collection-section container-fluid no-padding">
          <div className="col-md-6 col-sm-6 col-xs-12 no-padding">
            <div className="img-box">
              <img src="images/collection-1.jpg" alt="collection" />
            </div>
            <div className="collection-content">
              <h5>mens collectios</h5>
              <p>new looks arrivad</p>
              <a href="#" title="Shop Now">shop Now</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 no-padding">
            <div className="img-box">
              <img src="images/collection-2.jpg" alt="collection" />
            </div>
            <div className="collection-content">
              <h5>kids collectios</h5>
              <p>new looks arrivad</p>
              <a href="#" title="Shop Now">shop Now</a>
            </div>
          </div>
        </div>
      );
  }
}
