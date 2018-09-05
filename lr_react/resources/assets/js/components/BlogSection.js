import React, { Component } from 'react'

export default class BlogSection extends Component {
  render() {
    return (
      <div className="blog-section latest-blog1 container-fluid">
        {/* Container */}
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h3>Latest News</h3>
            <p>our vision is to be Earth's most customer centric company</p>
            <img src="images/section-seprator.png" alt="section-seprator" />
          </div>{/* Section Header /- */}
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-6 col-xs-6">
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-1.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />July 20</a></span>
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
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="type-post">
                <div className="entry-cover">
                  <a href="blog-post.html"><img src="images/blog-3.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />March 30</a></span>
                  <span className="look"><i className="icon icon-Eye" /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="type-post">
                <div className="entry-cover">
                  <a href="blog-post.html"><img src="images/blog-4.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />May 17</a></span>
                  <span className="look"><i className="icon icon-Eye" /></span>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <div className="type-post">
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="new Collectios are imported In Our shop." href="blog-post.html">Our shop visitor's <span>imported</span> new look</a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="224 Likes"><i className="fa fa-heart-o" />224 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post.html" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post.html"><img src="images/blog-2.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />June 26</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>{/* Container /- */}
      </div>
    );
  }
}
