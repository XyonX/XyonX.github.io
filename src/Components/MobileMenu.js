function MobileMenu() {
  return (
    <div className="mobile-menu-content">
      <div className="mobile-menu-item">
        <i className="fas fa-user"></i> {/* Icon */}
        <span>About</span>
      </div>
      <div className="mobile-menu-item">
        <i className="fas fa-file-alt"></i> {/* Icon */}
        <span>Resume</span>
      </div>
      <div className="mobile-menu-item">
        <i className="fas fa-briefcase"></i> {/* Icon */}
        <span>Works</span>
      </div>
      <div className="mobile-menu-item">
        <i className="fas fa-blog"></i> {/* Icon */}
        <span>Blog</span>
      </div>
      <div className="mobile-menu-item">
        <i className="fas fa-envelope"></i> {/* Icon */}
        <span>Contact</span>
      </div>
    </div>
  );
}

export default MobileMenu;
