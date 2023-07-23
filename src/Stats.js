export default function Stats(){
    return(
<section className="stats js-stats-counter mega-section">
  <div className="overlay-photo-image-bg" data-bg-img="assets/images/sections-bg-images/pattern-bg-3.jpg" data-bg-opacity=".2" />
  <div className="container">
    <div className="stats-inner">
      <div className="row ">
        {/*Info One*/}
        <div className="col-12 col-md-6 col-lg-3 stat-box ">
          <div className="stat-box-inner  " data-tilt="data-tilt"><i className="flaticon-project-management stat-icon" />
            <p className="stat-num "><span className="counter" data-from={10} data-to={750} data-speed={3000} data-refresh-interval={50} /><span className="sign">+</span></p><span className="stat-desc">finished projects</span>
          </div>
        </div>
        {/*Info Two*/}
        <div className="col-12 col-md-6 col-lg-3 stat-box ">
          <div className="stat-box-inner  " data-tilt="data-tilt"><i className="flaticon-content-management stat-icon" />
            <p className="stat-num "><span className="counter" data-from={0} data-to={23} data-speed={3000} data-refresh-interval={50} /><span className="sign">+</span></p><span className="stat-desc">Created jobs</span>
          </div>
        </div>
        {/*Info Three*/}
        <div className="col-12 col-md-6 col-lg-3 stat-box ">
          <div className="stat-box-inner  " data-tilt="data-tilt"><i className="flaticon-user stat-icon" />
            <p className="stat-num "><span className="counter" data-from={0} data-to={200} data-speed={3000} data-refresh-interval={50} /><span className="sign">+</span></p><span className="stat-desc">happy customers</span>
          </div>
        </div>
        {/*Info Four*/}
        <div className="col-12 col-md-6 col-lg-3 stat-box ">
          <div className="stat-box-inner  " data-tilt="data-tilt"><i className="flaticon-aim stat-icon" />
            <p className="stat-num "><span className="counter" data-from={0} data-to={28} data-speed={3000} data-refresh-interval={50} /><span className="sign">+</span></p><span className="stat-desc">years Of exprience</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}