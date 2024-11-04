import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Move state definition here
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  // Hide mobile menu on window resize if width is greater than 1400px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1400) {
        setShowMobileMenu(false); // Close the menu if window width is >= 1400px
      }
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Initial check if the component is mounted with a large screen size
    handleResize();

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                <div
                  className="menu-btn toggle_menu"
                  onClick={toggleMobileMenu}
                >
                  <i class="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row-12">
            <div
              className="m-menu-wrapper"
              style={{ display: showMobileMenu ? "flex" : "none" }}
            >
              <MobileMenu />
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
