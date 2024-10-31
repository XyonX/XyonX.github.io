import ResumePage from "../Pages/ResumePage";
import AboutPage from "../Pages/AboutPage";
function MenuBar({ pageSetter }) {
  const onSelectMenuResume = () => {
    pageSetter("ResumePage");
  };
  const onSelectMenuAbout = () => {
    pageSetter("AboutPage");
  };
  return (
    <div className="col-xxl-1 d-xxl-block d-none">
      <div className="main-menu-wrap">
        <nav className="main-menu main_menu">
          <ul>
            <li className="active" onClick={onSelectMenuAbout}>
              <a>
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
                about
              </a>
            </li>
            <li onClick={onSelectMenuResume}>
              <a>
                <span>
                  <i className="fa-solid fa-file"></i>
                </span>
                Resume
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                Works
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i className="fa-solid fa-blog"></i>
                </span>
                Blogs
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuBar;
