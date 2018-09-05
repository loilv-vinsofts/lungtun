import React, { Component } from 'react'

export default class Blogpost extends Component {
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
            <div className="content-area blog-section blog-post col-md-8 col-sm-8 col-xs-12">
              <article className="type-post">
                <div className="entry-cover">
                  <img src="images/blog-6.jpg" alt="blog" />
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />July 16</a></span>
                </div>
                <div className="blog-content">
                  <h3 className="entry-title">Our shop visitor's <span>imported</span> new look</h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="224 Likes"><i className="fa fa-heart-o" />224 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By <a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>You wanna be where you can see our troubles are all the same. You wanna be where everybody knows You name. So lets make the most of this beautiful day. Since we're together. , We're gonna do it. On your marksget set and go now. Got a dream and we just know now we're gonna make our dream come true? Sunday is Monday Happy Days. Tuesday Wednesday Happy Days. Thursday Friday Happy Days.Saturday what a days Groovin' all week with you! Now were up in the big leagues getting' our turn at bat. Knight Rider.</p>
                    <blockquote>
                      <i className="fa fa-quote-left" />
                      Were gonna pay a call on the Addams Family. I have always wanted to have a question            neighbor just like you. I've wanted to live in a neighborhood with you.
                    </blockquote>
                    <p>Give us any rule we'll break it. We're gonna make our dreams come true. Here he comes Here comes Speed Racer. He's a demon on wheels. Makin' your way in the world today takes everything you've got. Takin' a break from all your worries sure would help a lot. Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me.</p>
                    <p>Give us any rule we'll break it. We're gonna make our dreams come true. Here he comes Here comes Speed Racer. He's a demon on wheels. Makin' your way in the world today takes everything you've got. </p>
                    <div className="tags">
                      <a href="#" title="Chairs">Chairs</a>
                      <a href="#" title="Watches">Watches</a>
                      <a href="#" title="Future">Future</a>
                      <ul className="social">
                        <li><a href="#" title="facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" title="facebook"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" title="facebook"><i className="fa fa-tumblr" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              {/* Comment Section */}
              <div className="comment-section">
                <div className="section-heading">
                  <h3>comments are here<span>(3)</span></h3>
                </div>
                <ul className="media-list">
                  <li className="media">
                    <div className="media-left">
                      <a href="#" title="Chris Evans"><img src="images/avtar-1.jpg" alt="comment" /></a>								
                    </div>
                    <div className="media-body">
                      <div className="media-content">
                        <h4 className="media-heading">Posted By Max</h4>
                        <span><i className="fa fa-calendar-o" />June 18, 2016</span>
                        <p>So this is the tale of our castaways they're here for a long long time. They'll have to make the best of things its an uphill climb. </p>
                        <a href="#" title="Reply">Reply</a>
                      </div> 
                    </div>
                  </li>
                  <li className="media media-even">
                    <div className="media-left">
                      <a href="#" title="Ben Afflick"><img src="images/avtar-2.jpg" alt="comment" /></a>
                    </div>
                    <div className="media-body">
                      <div className="media-content">
                        <h4 className="media-heading">Posted By Smith</h4>
                        <span><i className="fa fa-calendar-o" />June 18, 2016</span>
                        <p>So this is the tale of our castaways they're here for a long long time.</p>
                        <a href="#" title="Reply">Reply</a>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <div className="media-left">
                      <a href="#" title="Andrew Garfield"><img src="images/avtar-3.jpg" alt="comment" /></a>
                    </div>
                    <div className="media-body">
                      <div className="media-content">
                        <h4 className="media-heading">Posted By Jhon</h4>
                        <span><i className="fa fa-calendar-o" />June 21, 2016</span>
                        <p>So this is the tale of our castaways they're here for a long long time. They'll have to make the best of things its an uphill climb. </p>
                        <a href="#" title="Reply">Reply</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{/* Comment Section /- */}
              {/* Comment Form */}
              <div className="comment-form">
                <div className="section-heading">
                  <h3>Write Your Comments</h3>
                </div>
                <form className="row">
                  <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <input type="text" required placeholder="Enter Your Name *" className="form-control" />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <input type="text" required placeholder="Enter Your Email *" className="form-control" />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <input type="text" required placeholder="Enter Your website" className="form-control" />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea placeholder="Enter Your Comment . . ." rows={3} className="form-control" defaultValue={""} />
                  </div>
                  <input type="submit" title="send" defaultValue="send" name="send" />
                </form>
              </div>{/* Comment Form /- */}
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
          </div>{/* Container /- */}
        </div>
      );
  }
}
