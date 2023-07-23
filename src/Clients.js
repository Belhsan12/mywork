export default function clients(){
    return(
<section className="our-clients  mega-section   wow fadeInUp" id="our-clients" data-wow-delay="0.2s">
  <div className="container">
    <div className="sec-heading   centered ">
      <div className="content-area">
        <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">trusted by over 500 clients around the world</h2>
      </div>
    </div>
    <div className=" clients-logos d-flex align-items-center justify-content-around flex-wrap">
      {/*Swiper*/}
      <div className="swiper-container">
        <div className="swiper-wrapper clients-logo-wrapper wow fadeIn " data-wow-delay=".02s">
          {/* every client logo is located inside div  with clss name "swiper-slide ".
          if you want to add more logos please keep the strcture of the swiper-slide as showen below
          
          
          */}
          <div className="swiper-slide">
            <div className="client-logo  "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/1-white.png" alt=" " /></a></div>
          </div>
          <div className="swiper-slide">
            <div className="client-logo "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/2-white.png" alt=" " /></a></div>
          </div>
          <div className="swiper-slide">
            <div className="client-logo "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/3-white.png" alt=" " /></a></div>
          </div>
          <div className="swiper-slide">
            <div className="client-logo "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/4-white.png" alt=" " /></a></div>
          </div>
          <div className="swiper-slide">
            <div className="client-logo "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/5-white.png" alt=" " /></a></div>
          </div>
          <div className="swiper-slide">
            <div className="client-logo "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/6-white.png" alt=" " /></a></div>
          </div>
          <div className="swiper-slide">
            <div className="client-logo "><a href="#0"><img className="img-fluid logo " loading="lazy" src="assets/images/clients-logos/7-white.png" alt=" " /></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}