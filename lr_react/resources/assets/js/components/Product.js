import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div id="product-section" className="product-section product-section1 container-fluid no-padding">
          {/* Container */}
          <div className="container">
            {/* Row */}
            <div className="row">
              {/* Section Header */}
              <div className="section-header">
                <h3>Our Products</h3>
                <p>our vision is to be Earth's most customer centric company</p>
                <img src="images/section-seprator.png" alt="section-seprator" />
              </div>{/* Section Header /- */}
              <ul id="filters" className="products-categories no-left-padding">
                <li><a data-filter="*" className="active" href="#">All Products</a></li>
                <li><a data-filter=".design" href="#">jewellery</a></li>
                <li><a data-filter=".video" href="#">books</a></li>
                <li><a data-filter=".photography" href="#">watches</a></li>
                <li><a data-filter=".web" href="#">shoes</a></li>
                <li><a data-filter=".design" href="#">electronics</a></li>
                <li><a data-filter=".photography" href="#">mobiles</a></li>
                <li><a data-filter=".video" href="#">more<i className="fa fa-angle-down" /></a></li>
              </ul>
              {/* Products */}
              <ul className="products">
                {/* Product */}
                <li className="product design">
                  <a href="#">
                    <img src="images/product-1.jpg" alt="Product" />
                    <h5>Stylish Chair</h5>
                    <span className="price"><del>$200</del>$139</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product photography">
                  <a href="#">
                    <img src="images/product-2.jpg" alt="Product" />
                    <h5>men's casual shoes</h5>
                    <span className="price"><del>$200</del>$119</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product video">
                  <a href="#">
                    <img src="images/product-3.jpg" alt="Product" />
                    <h5>sun glass</h5>
                    <span className="price"><del>$150</del>$85</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product web">
                  <a href="#">
                    <img src="images/product-4.jpg" alt="Product" />
                    <h5>Stylish Chair</h5>
                    <span className="price"><del>$380</del>$259</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product design">
                  <a href="#">
                    <img src="images/product-9.jpg" alt="Product" />
                    <h5>latest headphone</h5>
                    <span className="price"><del>$900</del>$759</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product photography">
                  <a href="#">
                    <img src="images/product-6.jpg" alt="Product" />
                    <h5>men's jackets</h5>
                    <span className="price"><del>$350</del>$249</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product web">
                  <a href="#">
                    <img src="images/product-7.jpg" alt="Product" />
                    <h5>Model x12 computer</h5>
                    <span className="price"><del>$255</del>$139</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
                {/* Product */}
                <li className="product design">
                  <a href="#">
                    <img src="images/product-8.jpg" alt="Product" />
                    <h5>Stylish headset</h5>
                    <span className="price"><del>$85</del>$39</span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                  <div className="wishlist-box">
                    <a href="#"><i className="fa fa-arrows-alt" /></a>
                    <a href="#"><i className="fa fa-heart-o" /></a>
                    <a href="#"><i className="fa fa-search" /></a>
                  </div>
                </li>{/* Product /- */}
              </ul>{/* Products /- */}
            </div>{/* Row /- */}
            <nav className="ow-pagination">
              <ul className="pager">
                <li className="number"><a href="#">4</a></li>
                <li className="load-more"><a href="#">Load More</a></li>
                <li className="previous"><a href="#"><i className="fa fa-angle-right" /></a></li>
                <li className="next"><a href="#"><i className="fa fa-angle-left" /></a></li>
              </ul>
            </nav>
          </div>{/* Container /- */}
        </div>
      );
  }
}
