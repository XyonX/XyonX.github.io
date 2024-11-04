import React, { useState, useEffect } from "react";

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Move state definition here

  useEffect(() => {
    // On component mount, get theme preference from local storage
    const storedTheme = JSON.parse(localStorage.getItem("darkTheme"));
    if (storedTheme) {
      setIsDarkTheme(storedTheme);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const toggleDarkTheme = () => {
    // Toggle dark theme
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("darkTheme", newTheme);
      document.body.classList.toggle("dark-theme", newTheme);
      return newTheme;
    });
  };

  return (
    <div className="header-area mb-30 z-index-5">
      <div className="container">
        <div className="header-wrap">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="header-menu-btn text-right">
                <div
                  className="dark-btn dark-btn-stored dark-btn-icon"
                  onClick={toggleDarkTheme}
                >
                  <i
                    className={`fa-solid ${
                      isDarkTheme ? "fa-sun" : "fa-circle-half-stroke"
                    }`}
                  ></i>
                </div>
                <div className="menu-btn toggle_menu">
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
