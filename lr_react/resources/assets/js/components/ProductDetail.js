import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    return (
        <div>
          {/* Page Banner */}
          <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Shop Single</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Shop</li>
              </ol>
            </div>{/* Container /- */}
          </div>{/* Page Banner /- */}
          {/* Shop Single */}
          <div className="shop-single container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="product-views">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="carousel-item">
                    <div className="item">
                      <img src="images/product.jpg" alt="product" />
                    </div>
                    <div className="item">
                      <img src="images/product.jpg" alt="product" />
                    </div>
                    <div className="item">
                      <img src="images/product.jpg" alt="product" />
                    </div>
                  </div>
                </div>
                {/* Entry Summary */}
                <div className="col-md-6 col-sm-6 col-xs-12 entry-summary">
                  <h3 className="product_title">mens casual shoes</h3>
                  <div className="product-rating">
                    <div className="star-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                    <a href="#review-link" className="review-link">20 reviews</a>
                  </div>
                  <p className="stock in-stock"><span>Availablity:</span> in stock</p>
                  <div>
                    <p>So this is the tale of our castaways they're here for a long long time. They'll have to make the best of things its an uphill climb. Now were up in the big leagues getting' our turn at bat.</p>
                  </div>
                  <span className="price"><del>$850</del> $550</span>
                  <form>
                    <div className="product-attribute">
                      <div className="select">
                        <select>
                          <option>Color *</option>
                          <option>Black</option>
                          <option>Green</option>
                          <option>Blue</option>
                        </select>
                      </div>
                      <div className="select">
                        <select>
                          <option>Size *</option>
                          <option>L</option>
                          <option>M</option>
                          <option>XL</option>
                          <option>XXL</option>
                        </select>
                      </div>
                    </div>
                    <div className="product-quantity" data-title="Quantity">
                      <input type="button" defaultValue="-" className="qtyminus btn" data-field="quantity1" />
                      <input type="text" name="quantity1" defaultValue={0} className="qty btn" />
                      <input type="button" defaultValue="+" className="qtyplus btn" data-field="quantity1" />
                    </div>
                    <button title="Add To Cart" className="add_to_cart">Add To Cart</button>
                  </form>
                  <div className="product_meta">
                    <span className="posted_in">
                      <a href="#"><i className="fa fa-heart" /></a>
                      <a href="#"><i className="fa fa-retweet" /></a>
                      <a href="#"><i className="fa fa-envelope-o" /></a>
                    </span>
                    <ul className="social">
                      <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                      <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
                    </ul>
                  </div>
                </div>{/* Entry Summary /- */}
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 description">
                <h5>Description about this product</h5>
                <p>A shadowy flight into the dangerous world of a man who does not exist. And we'll do it our way yes our way. Make all our dreams come true for me and you. Makin their way the only way they know how. That's just a little bit more than the law will allow. Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now. We're gonna make our dreams come true Takin' a break from all your worries sure would help a lot. Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me. </p>
              </div>
              {/* Product Section */}
              <div className="product-section container-fluid no-padding">
                {/* Section Header */}
                <div className="section-header">
                  <h3>Related Products</h3>
                  <p>our vision is to be Earth's most customer centric company</p>
                  <img src="images/section-seprator.png" alt="section-seprator" />
                </div>{/* Section Header /- */}
                {/* Products */}
                <ul className="products">
                  {/* Product */}
                  <li className="product">
                    <a href="#">
                      <img src="images/product-1.jpg" alt="Product" />
                      <h5>Stylish Chair</h5>
                      <span className="price"><del>$200</del>$139</span>
                    </a>
                    <div className="wishlist-box">
                      <a href="#"><i className="fa fa-arrows-alt" /></a>
                      <a href="#"><i className="fa fa-heart-o" /></a>
                      <a href="#"><i className="fa fa-search" /></a>
                    </div>
                    <a href="#" className="addto-cart" title="Add To Cart">Add To Cart</a>
                  </li>{/* Product /- */}
                  {/* Product */}
                  <li className="product">
                    <a href="#">
                      <img src="images/product-2.jpg" alt="Product" />
                      <h5>men's casual shoes</h5>
                      <span className="price"><del>$150</del>$85</span>
                    </a>
                    <div className="wishlist-box">
                      <a href="#"><i className="fa fa-arrows-alt" /></a>
                      <a href="#"><i className="fa fa-heart-o" /></a>
                      <a href="#"><i className="fa fa-search" /></a>
                    </div>
                    <a href="#" className="addto-cart" title="Add To Cart">Add To Cart</a>
                  </li>{/* Product /- */}
                  {/* Product */}
                  <li className="product">
                    <a href="#">
                      <img src="images/product-3.jpg" alt="Product" />
                      <h5>Sun glass</h5>
                      <span className="price"><del>$100</del>$35</span>
                    </a>
                    <div className="wishlist-box">
                      <a href="#"><i className="fa fa-arrows-alt" /></a>
                      <a href="#"><i className="fa fa-heart-o" /></a>
                      <a href="#"><i className="fa fa-search" /></a>
                    </div>
                    <a href="#" className="addto-cart" title="Add To Cart">Add To Cart</a>
                  </li>{/* Product /- */}
                  {/* Product */}
                  <li className="product">
                    <a href="#">
                      <img src="images/product-4.jpg" alt="Product" />
                      <h5>tourist bags</h5>
                      <span className="price"><del>$350</del>$279</span>
                    </a>
                    <div className="wishlist-box">
                      <a href="#"><i className="fa fa-arrows-alt" /></a>
                      <a href="#"><i className="fa fa-heart-o" /></a>
                      <a href="#"><i className="fa fa-search" /></a>
                    </div>
                    <a href="#" className="addto-cart" title="Add To Cart">Add To Cart</a>
                  </li>{/* Product /- */}
                </ul>{/* Products /- */}
              </div>{/* Product Section /- */}
              <nav className="ow-pagination">
                <ul className="pager">
                  <li className="number"><a href="#">4</a></li>
                  <li className="load-more"><a href="#">Load More</a></li>
                  <li className="previous"><a href="#"><i className="fa fa-angle-right" /></a></li>
                  <li className="next"><a href="#"><i className="fa fa-angle-left" /></a></li>
                </ul>
              </nav>
            </div>{/* Container /- */}
          </div>{/* Shop Single /- */}
        </div>
      );
  }
}
