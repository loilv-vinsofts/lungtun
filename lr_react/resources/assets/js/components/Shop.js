import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
        <div>
          {/* Page Banner */}
          <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Shop</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Shop</li>
              </ol>
            </div>{/* Container /- */}
          </div>{/* Page Banner /- */}
          {/* Product Section2 */}
          <div className="product-section product-section1 product-section2 container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="row">
                {/* Widget Area */}
                <div className="col-md-4 col-sm-4 col-xs-12 widget-area no-right-padding">
                  {/* Widget Search */}
                  <aside className="widget widget_search">
                    <h3 className="widget-title">Search</h3>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search You Wants. . ." />
                      <span className="input-group-btn">
                        <button className="btn btn-search" title="Search" type="button"><i className="icon icon-Search" /></button>
                      </span>
                    </div>
                  </aside>{/* Widget Search /- */}
                  {/* Widget Categories */}
                  <aside className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li><a href="#" title="Beautiful Chairs">Beautiful Chairs <span>(5)</span></a></li>
                      <li><a href="#" title="Creative Designs">Creative Designs <span>(6)</span></a></li>
                      <li><a href="#" title="Trendy Products">Trendy Products <span>(4)</span></a></li>
                      <li><a href="#" title="Interior Products">Interior Products <span>(2)</span></a></li>
                      <li><a href="#" title="Popular Products">Popular Products <span>(8)</span></a></li>
                      <li><a href="#" title="Casual Shirts">Casual Shirts <span>(7)</span></a></li>
                    </ul>
                  </aside>{/* Widget Categories /-  */}
                  {/* Widget Price */}
                  <aside className="widget widget_price_filter">
                    <h3 className="widget-title">filter by price</h3>
                    <div className="price-filter">
                      <div id="slider-range" />
                      <div className="price-input">									
                        <span id="amount" />
                        <span id="amount2" />
                      </div>
                      <a href="#" title="filter">Filter</a>
                    </div>
                  </aside>{/* Widget Price /- */}
                  {/* Widget Latest Post */}
                  <aside className="widget widget_latest_post">
                    <h3 className="widget-title">recent posts</h3>
                    <div className="latest-box">
                      <div className="post-box">
                        <a href="#"><img src="images/latest-post-1.jpg" alt="Post" /></a>
                        <h5><a href="#" title="need max shop.">I Phone 6s sales on</a></h5>
                        <div className="star-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <span className="price"><del>$955</del>$789</span>
                      </div>
                    </div>
                    <div className="latest-box">
                      <div className="post-box">
                        <a href="#"><img src="images/latest-post-2.jpg" alt="Post" /></a>
                        <h5><a href="#" title="need max shop.">mens casual footwear</a></h5>
                        <div className="star-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <span className="price"><del>$185</del>$120</span>
                      </div>
                    </div>
                    <div className="latest-box">
                      <div className="post-box">
                        <a href="#"><img src="images/latest-post-3.jpg" alt="Post" /></a>
                        <h5><a href="#" title="need max shop.">running shoes</a></h5>
                        <div className="star-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <span className="price"><del>$150</del>$85</span>
                      </div>
                    </div>
                  </aside>{/* Widget Latest Post /- */}
                  {/* Widget Tags */}
                  <aside className="widget widget_tags">
                    <h3 className="widget-title">popular tags</h3>
                    <div className="tags-box">
                      <a href="#" title="Chairs">Chairs</a>
                      <a href="#" title="Modern Designs">Modern Designs</a>
                      <a href="#" title="Watches">Watches</a>
                      <a href="#" title="Future">Future</a>
                      <a href="#" title="Popular Products">Popular Products</a>
                      <a href="#" title="Trendy">Trendy</a>
                      <a href="#" title="Interier">Interier</a>
                      <a href="#" title="Modern">Modern</a>
                    </div>
                  </aside>{/* Widget Tags */}
                </div>{/* Widget Area /- */}
                {/* Content Area */}
                <div className="col-md-8 col-sm-7 col-xs-12 content-area product-section2 no-left-padding">
                  {/* Products */}
                  <ul className="products">
                    {/* Product */}
                    <li className="product">
                      <a href="#">
                        <img src="images/product-10.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-11.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-12.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-13.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-14.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-15.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-16.jpg" alt="Product" />
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
                    <li className="product">
                      <a href="#">
                        <img src="images/product-17.jpg" alt="Product" />
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
                </div>{/* Content Area /- */}
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
          </div>{/* Product Section2 /- */}
        </div>
      );
  }
}
