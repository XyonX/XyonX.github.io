function Header() {
  return (
    <div className="header-area mb-30 z-index-5">
      <div className="container">
        <div className="header-wrap">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="header-menu-btn text-right">
                <div className="dark-btn dark-btn-stored dark-btn-icon">
                  <i className="fa-solid fa-sun"></i>
                  <i className="fa-solid fa-moon"></i>
                </div>
                <div class="menu-btn toggle_menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className="mobile-menu mobile_menu"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
