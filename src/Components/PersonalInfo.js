import joyProfile from "../Assets/Images/joy_profile.png";

function PersonalInfo() {
  return (
    <div className="col-xxl-3 col-xl-3">
      {/* <!--Bg is added here--> */}
      <div className="personal-info-area">
        <div className="personal-info-wrap">
          {/* <!-- img --> */}
          <div className="personal-info-img">
            <img src={joyProfile} alt="avatar" />
          </div>
          {/* <!-- name --> */}
          <h4 className="personal-info-name">
            <a href="#">Joydip Chakraborty</a>
          </h4>
          <span className="personal-info-bio mb-15">Unreal Developer</span>
          {/* <!-- socail link --> */}
          <ul className="personal-info-social-link mb-30">
            <li>
              <a href="https://github.com/xyonx" className="Github">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            {/* 
            <li>
              <a href="#" className="twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            
            <li>
              <a href="#" className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>*/}
            <li>
              <a
                href="https://www.linkedin.com/in/joydip-chakraborty/"
                className="linkedin"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          {/*  <!-- contact --> */}
          <div className="personal-info-contact mb-30">
            <div className="personal-info-contact-item phone">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div className="text">
                <span>Phone</span>
                <p>+91 9883608843</p>
              </div>
            </div>

            <div className="personal-info-contact-item email">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <span>Email</span>
                <p>joyydiip@gmail.com</p>
              </div>
            </div>

            <div className="personal-info-contact-item location">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <span>Location</span>
                <p>Kolkata</p>
              </div>
            </div>

            <div className="personal-info-contact-item calendar">
              <div className="icon">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div className="text">
                <span>Birthday</span>
                <p>October 6, 2000</p>
              </div>
            </div>
          </div>

          {/* <!-- cv button --> */}
          <div className="personal-info-btn">
            <a className="btn-1" href="#">
              <span className="icon">
                <i className="fa-solid fa-download"></i>
              </span>
              download cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
