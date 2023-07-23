export default function Footer(){
    return(
<footer className="page-footer dark-color-footer" id="page-footer">
  <div className="overlay-photo-image-bg" data-bg-img="assets/images/sections-bg-images/footer-bg-1.jpg" data-bg-opacity=".25" />
  <div className="container">
    <div className="row footer-cols">
      <div className="col-12 col-md-8 col-lg-4  footer-col "><img className="img-fluid footer-logo" loading="lazy" src="assets/images/logo/logo-colored.png" alt="logo" />
        <div className="footer-col-content-wrapper">        
          <p className="footer-text-about-us ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus facere modi possimus dignissimos, 
            aliquam nobis eaque? Voluptatem magnam quisquam rem.
          </p>
        </div>
        <div className="form-area ">
          <div className="mailchimp-form ">
            <form className="one-field-form" method="post" action="#0">
              <div className="field-group ">
                <label className="email-label" htmlFor="email-input"> Subscribe to our news letter</label>
                <input className="email-input " type="email" defaultValue name="EMAIL" id="email-input" placeholder="Email Address" autoComplete="off" />
                <div className="cta-area">
                  <input className="btn-solid subscribe-btn" type="submit" defaultValue="Subscribe" name="subscribe" />
                </div>
              </div><span className="email-notice">*we will not share your personal info</span>
            </form>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-2  footer-col ">
        <h2 className=" footer-col-title    ">useful links</h2>
        <div className="footer-col-content-wrapper">
          <ul className="footer-menu ">
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Google</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Dribbble</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">linkedIn</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">wikipedia</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6 col-lg-2 footer-col ">
        <h2 className=" footer-col-title    ">Resources</h2>
        <div className="footer-col-content-wrapper">
          <ul className="footer-menu">
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">support</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">dashboard</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">drivers</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12     col-lg-4 footer-col ">
        <h2 className=" footer-col-title    ">contact information</h2>
        <div className="footer-col-content-wrapper">       
          <div className="contact-info-card"><i className="bi bi-envelope icon" /><a className="text-lowercase  info" href="mailto:example@support.com">example@support.com</a></div>
          <div className="contact-info-card"><i className="bi bi-geo-alt icon" /><span className="text-lowercase  info">5 Xyz st., Abc, alexandria, egypt.</span></div>
          <div className="contact-info-card"><i className="bi bi-phone icon" /><a className="info" href="tel:+20123456789">+20123456789</a></div>
          <div className="contact-info-card">
            <div className="social-icons">
              <div className="sc-wrapper dir-row sc-size-32">
                <ul className="sc-list">
                  <li className="sc-item " title="Facebook"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-facebook-f sc-icon" /></a></li>
                  <li className="sc-item " title="youtube"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-youtube sc-icon" /></a></li>
                  <li className="sc-item " title="instagram"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-instagram sc-icon" /></a></li>
                  <li className="sc-item " title="twitter"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-twitter sc-icon" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyrights ">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-start">
          <p className="creadits">
            © 2023
            Created by:
            <a className="link" href="#0">Digitaly Tn</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}