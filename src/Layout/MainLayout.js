import Header from "../Components/Header";
import PersonalInfo from "../Components/PersonalInfo";
import ContentSection from "../Components/ContentSection";
import MenuBar from "../Components/MenuBar";
import { useState } from "react";

function MainLayout() {
  const [page, setPage] = useState("AboutPage");

  return (
    <div className="page-wrapper" id="page-wrapper">
      <Header pageSetter={setPage} />
      <div class="container z-index-3">
        <div class="row">
          <PersonalInfo />
          <ContentSection pageState={page} />
          <MenuBar pageSetter={setPage} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
