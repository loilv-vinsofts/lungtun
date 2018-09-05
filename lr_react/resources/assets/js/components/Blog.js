import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
        <div>
          {/* Page Banner */}
          <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Our Blog</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Blog</li>
              </ol>
            </div>{/* Container /- */}
          </div>{/* Page Banner /- */}
          {/* Container */}
          <div className="container">
            {/* Content Area */}
            <div className="content-area blog-section col-md-8 col-sm-8 col-xs-12">
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-1.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />July 16</a></span>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="new Collectios are imported In Our shop." href="blog-post.html">new Collectios are <span>imported</span> In Our shop.</a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="224 Likes"><i className="fa fa-heart-o" />224 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post.html" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-2.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />May 22</a></span>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="Our shop visitor's new look" href="blog-post.html">Our shop visitor's <span>new look</span></a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="145 Likes"><i className="fa fa-heart-o" />145 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post.html" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-3.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />June 18</a></span>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="buyers are saying it's good shop" href="blog-post.html">buyers are saying it's <span>good shop</span></a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="150 Likes"><i className="fa fa-heart-o" />150 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post.html" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-4.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />July 14	</a></span>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="Happy Customers enjoying in the street" href="blog-post.html">Happy Customers <span>enjoying</span> in the street</a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="230 Likes"><i className="fa fa-heart-o" />230 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post.html" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-5.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />May 17</a></span>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="Best Solds in the this year was watches " href="blog-post.html">Best Solds in the this year was <span>watches</span> </a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="120 Likes"><i className="fa fa-heart-o" />120 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post.html" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>{/* Content Area /- */}
            {/* Widget Area */}
            <div className="col-md-4 col-sm-4 col-xs-12 widget-area">
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
              {/* Widget Latest Post */}
              <aside className="widget widget_latest_post">
                <h3 className="widget-title">recent posts</h3>
                <div className="latest-box">
                  <div className="post-box">
                    <a href="#"><img src="images/latest-post-1.jpg" alt="Post" /></a>
                    <h5><a href="#" title="need max shop.">need max shop</a></h5>
                    <span><a className="calendar" href="#"><i className="fa fa-calendar-o" />July 20, 2016</a><a href="#"><i className="fa fa-heart-o" /> 224 Likes</a><a href="#">Posted By Max</a></span>
                  </div>
                </div>
                <div className="latest-box">
                  <div className="post-box">
                    <a href="#"><img src="images/latest-post-2.jpg" alt="Post" /></a>
                    <h5><a href="#" title="Commenly use products">Commenly use products</a></h5>
                    <span><a className="calendar" href="#"><i className="fa fa-calendar-o" />June 18, 2016</a><a href="#"><i className="fa fa-heart-o" /> 224 Likes</a><a href="#">Posted By Max</a></span>
                  </div>
                </div>
                <div className="latest-box">
                  <div className="post-box">
                    <a href="#"><img src="images/latest-post-3.jpg" alt="Post" /></a>
                    <h5><a href="#" title="chairs are beautiful">chairs are beautiful</a></h5>
                    <span><a className="calendar" href="#"><i className="fa fa-calendar-o" />May 23, 2016</a><a href="#"><i className="fa fa-heart-o" /> 224 Likes</a><a href="#">Posted By Max</a></span>
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
              {/* Widget Tags */}
              <aside className="widget widget_tweets">
                <h3 className="widget-title">latest tweets</h3>
                {/* Main Carousel */}
                <div id="main-carousel1" className="carousel slide carousel-fade" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#main-carousel1" data-slide-to={0} className="active" />
                    <li data-target="#main-carousel1" data-slide-to={1} />
                    <li data-target="#main-carousel1" data-slide-to={2} />
                  </ol>
                  <div role="listbox" className="carousel-inner">
                    <div className="item active">
                      <h5>tweet@John max</h5>
                      <p>MAX SHOP - Creative Minimal Portfolio WordPress Theme by @ifathemes</p>
                      <a href="#">http://goo.gl/6CbMtH</a>
                      <span>5 Hours ago</span>
                    </div>
                    <div className="item">
                      <h5>tweet@John max</h5>
                      <p>MAX SHOP - Creative Minimal Portfolio WordPress Theme by @ifathemes</p>
                      <a href="#">http://goo.gl/6CbMtH</a>
                      <span>5 Hours ago</span>
                    </div>
                    <div className="item">
                      <h5>tweet@John max</h5>
                      <p>MAX SHOP - Creative Minimal Portfolio WordPress Theme by @ifathemes</p>
                      <a href="#">http://goo.gl/6CbMtH</a>
                      <span>5 Hours ago</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>{/* Widget Area /- */}
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
