export default function Header(){
    return(
        <header className=" page-header   header-basic" id="page-header">
        <div className="header-search-box">
          <div className="close-search" />
          <form className="nav-search search-form" role="search" method="get" action="#">
            <div className="search-wrapper"> 
              <label className="search-lbl">Search for:</label>
              <input className="search-input" type="search" placeholder="Search..." name="searchInput" autofocus="autofocus" />
              <button className="search-btn" type="submit"><i className="bi bi-search icon" /></button>
            </div>
          </form>
        </div>
        <div className="container">
          <nav className="menu-navbar">
            <div className="header-logo"><a className="logo-link" href="#"><img className="logo-img light-logo" loading="lazy" src="assets/images/logo/logo-light.png" alt="logo" /><img className="logo-img  dark-logo" loading="lazy" src="assets/images/logo/logo-dark.png" alt="logo" /></a></div>
            <div className="links menu-wrapper ">
              <ul className="list-js links-list">
                <li className="menu-item has-sub-menu"><a className="menu-link   active" href="index.html">home <i> </i></a>
                </li>
                <li className="menu-item has-sub-menu"><a className="menu-link  " href="#services">services <i> </i></a>
                </li>
                <li className="menu-item"><a className="menu-link   " href="#about">about us</a></li>
                <li className="menu-item has-sub-menu"><a className="menu-link  " href="#team">team<i> </i></a>
                </li>
                <li className="menu-item"><a className="menu-link  " href="contact-us.html">contact us </a></li>
              </ul>
            </div>
            <div className="controls-box">
              {/*Menu Toggler button*/}
              <div className="control  menu-toggler"><span /><span /><span /></div>
              {/*search Icon button*/}
              <div className="control header-search-btn"><i className="bi bi-search icon" /></div>
              {/*Dark/Light mode button*/}
              <div className="mode-switcher ">
                <div className="switch-inner go-light " title="Switch To Light Mode "><i className="bi bi-sun icon " /></div>
                <div className="switch-inner go-dark" title="Switch To Dark Mode "><i className="bi bi-moon icon " /></div>
              </div>
              {/*mini shoping cart*/}
            </div>
          </nav>
        </div>
      </header> 
    )
}