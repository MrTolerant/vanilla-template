/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


const Index = () => {
  return (
    <div>
      <div className="fixed-side-navbar">
        <ul className="nav flex-column">
          <li className="nav-item"><a className="nav-link" href="#home"><span>Intro</span></a></li>
          <li className="nav-item"><a className="nav-link" href="#services"><span>Services</span></a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio"><span>Portfolio</span></a></li>
          <li className="nav-item"><a className="nav-link" href="#our-story"><span>Our Story</span></a></li>
          <li className="nav-item"><a className="nav-link" href="#contact-us"><span>Contact Us</span></a></li>
        </ul>
      </div>

      <div className="parallax-content baner-content" id="home">
        <div className="container">
          <div className="first-content">
            <h1>Vanilla</h1>
            <span><em>Bootstrap</em> Theme</span>
            <div className="primary-button">
              <a href="#services">Discover More</a>
            </div>
          </div>
        </div>
      </div>


      <div className="service-content" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-text">
                <h4>More About Vanilla</h4>
                <div className="line-dec" />
                <p>Vanilla is free HTML CSS template with Bootstrap v4.2.1 and you can apply this theme for your sites.
                        Please share our <a rel="nofollow" href="https://skillcrucial.com">website</a> to your friends or collegues. Thank you.
                </p>
                <ul>
                  <li>-  Praesent porta urna id eros</li>
                  <li>-  Curabitur consectetur malesuada</li>
                  <li>-  Nam pretium imperdiet enim</li>
                  <li>-  Sed viverra arcu non nisi efficitur</li>
                </ul>
                <div className="primary-button">
                  <a href="#portfolio">Learn More About Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>classNameic Modern Design</h4>
                    <div className="line-dec" />
                    <p>Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Unique &amp; Creative Ideas</h4>
                    <div className="line-dec" />
                    <p>Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Effective Team Work</h4>
                    <div className="line-dec" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Fast Support 24/7</h4>
                    <div className="line-dec" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="parallax-content projects-content" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="owl-testimonials" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonials-item">
                    <a href="1st-big-item.jpg" data-lightbox="image-1"><img src="images/1st-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Awesome Note Book</h4>
                      <span>$18.00</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/2nd-big-item.jpg" data-lightbox="image-1"><img src="images/2nd-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Antique Decoration Photo</h4>
                      <span>$27.00</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/3rd-big-item.jpg" data-lightbox="image-1"><img src="images/3rd-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Work Hand Bag</h4>
                      <span>$36.00</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/4th-big-item.jpg" data-lightbox="image-1"><img src="images/4th-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Smart Watch</h4>
                      <span>$45.00</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/5th-big-item.jpg" data-lightbox="image-1"><img src="images/5th-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>PC Tablet Draw</h4>
                      <span>$63.00</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/6th-big-item.jpg" data-lightbox="image-1"><img src="images/6th-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Healthy Milkshake</h4>
                      <span>$77.00</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/2nd-big-item.jpg" data-lightbox="image-1"><img src="images/2nd-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Antique Decoration Photo</h4>
                      <span>$84.50</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <a href="images/1st-big-item.jpg" data-lightbox="image-1"><img src="images/1st-item.jpg" alt="" /></a>
                    <div className="text-content">
                      <h4>Awesome Notes Book</h4>
                      <span>$96.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="tabs-content" id="our-story">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="wrapper">
                <section id="first-tab-group" className="tabgroup">
                  <div id="tab1">
                    <img src="images/1st-tab.jpg" alt="" />
                    <p>Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.</p>
                  </div>
                  <div id="tab2">
                    <img src="images/2nd-tab.jpg" alt="" />
                    <p>Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. </p>
                    <p>Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.</p>
                  </div>
                  <div id="tab3">
                    <img src="images/3rd-tab.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.</p>
                  </div>
                  <div id="tab4">
                    <img src="images/4th-tab.jpg" alt="" />
                    <p>Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.</p>
                  </div>
                </section>
                <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                  <li><a href="#tab1" className="active">2008 - 2014</a></li>
                  <li><a href="#tab2">2014 - 2016</a></li>
                  <li><a href="#tab3">2016 - 2019</a></li>
                  <li><a href="#tab4">2019 - Now</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="parallax-content contact-content" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form">
                <div className="row">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-md-12">
                        <fieldset>
                          <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required="" />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required="" />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="btn">Send Message</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map">
                {/*  How to change your own map point
                        1. Go to Google Maps
                        2. Click on your location point
                        3. Click "Share" and choose "Embed map" tab
                        4. Copy only URL and paste it within the src="" field below
                    */}

                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQBpAG2ahYAR_6128GcTUEo&key=AIzaSyAGI8-ZozKEFZMuAuHmaTvQXlw4Rbp2Agw"
                  width="100%"
                  height="390"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="myFrame"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="primary-button">
                <a href="#home">Back To Top</a>
              </div>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-google" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
              <p>Copyright &copy; 2019 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
