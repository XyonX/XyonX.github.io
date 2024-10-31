import AboutPage from "../Pages/AboutPage";
import NotFoundPage from "../Pages/NotFoundPage";
import ResumePage from "../Pages/ResumePage";

function ContentSection({ pageState }) {
  const renderPage = () => {
    switch (pageState) {
      case "AboutPage":
        return <AboutPage />;
      case "ResumePage":
        return <ResumePage />;
      default:
        return <NotFoundPage />;
    }
  };

  return <div className="col-xxl-8 col-xl-9">{renderPage()}</div>;
}

export default ContentSection;
