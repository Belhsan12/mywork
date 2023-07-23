export default function Blog(){
    return(
<section className="blog blog-home mega-section  " id="blog">
  <div className="container ">
    <div className="sec-heading  ">
      <div className="content-area"><span className=" pre-title       wow fadeInUp " data-wow-delay=".2s"> Work</span>
        <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">latest <span className="hollow-text">news</span></h2>
      </div>
      <div className=" cta-area  cta-area  wow fadeInUp" data-wow-delay=".8s"><a className="cta-btn btn-solid   cta-btn btn-solid  " href="blog-home-3-col.html">see all posts<i className="bi bi-arrow-right icon " /></a></div>
    </div>
    <div className="row ">
      <div className="col-12 "> 
        <div className="posts-grid ">
          <div className="row">
            <div className="col-12 col-lg-4 ">
              <div className="post-box">     <a className="post-link" href="post-single.html" title="How litespeed technology works to speed up your site "> 
                  <div className="post-img-wrapper  "><img className=" parallax-img   post-img" loading="lazy" src="assets/images/blog/post-images/1.jpg" alt /><span className="post-date"><span className="day">05 </span>oct 2022   </span></div></a>
                <div className="post-summary">
                  <div className="post-info"><a className="info post-cat" href="#"> <i className="bi bi-bookmark icon" />hosting</a><a className="info post-author" href="#"> <i className=" bi bi-person icon" />Allan Moore</a></div>
                  <div className="post-text"><a className="post-link" href="post-single.html"> 
                      <h2 className="post-title"> How litespeed technology works to speed up your site </h2></a>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ">         
              <div className="post-box">     <a className="post-link" href="post-single.html" title="give your website a new look and feel with themes"> 
                  <div className="post-img-wrapper  "><img className=" parallax-img   post-img" loading="lazy" src="assets/images/blog/post-images/2.jpg" alt /><span className="post-date"><span className="day">15 </span>sep 2022   </span></div></a>
                <div className="post-summary">
                  <div className="post-info"><a className="info post-cat" href="#"> <i className="bi bi-bookmark icon" />web dev</a><a className="info post-author" href="#"> <i className=" bi bi-person icon" />mhmd amin</a></div>
                  <div className="post-text"><a className="post-link" href="post-single.html"> 
                      <h2 className="post-title"> give your website a new look and feel with themes</h2></a>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ">         
              <div className="post-box">     <a className="post-link" href="post-single.html" title="the role of domain names in SEO world explained "> 
                  <div className="post-img-wrapper  "><img className=" parallax-img   post-img" loading="lazy" src="assets/images/blog/post-images/3.jpg" alt /><span className="post-date"><span className="day">27 </span>aug 2022   </span></div></a>
                <div className="post-summary">
                  <div className="post-info"><a className="info post-cat" href="#"> <i className="bi bi-bookmark icon" />SEO</a><a className="info post-author" href="#"> <i className=" bi bi-person icon" />yusuf amin</a></div>
                  <div className="post-text"><a className="post-link" href="post-single.html"> 
                      <h2 className="post-title"> the role of domain names in SEO world explained </h2></a>
                    <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}