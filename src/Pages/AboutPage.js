function AboutPage() {
  return (
    <div className="page-content-wrap">
      {/* <!-- page title --> */}
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="page-title-wrap mb-35">
          <h2 className="page-title">About Me</h2>
          <p>
            I am an Unreal Engine Developer specializing in game development. I
            have extensive experience with the following technologies:
          </p>
          <ul>
            <li>
              <strong>Game Development</strong>: Unreal Engine
            </li>
            <li>
              <strong>Programming Languages</strong>: C++, Python, HTML, CSS,
              JavaScript
            </li>
            <li>
              <strong>Machine Learning</strong>: ML
            </li>
            <li>
              <strong>Backend Development</strong>
            </li>
          </ul>
          <p>
            I am always open to new project ideas, so feel free to reach out! I
            am interested in web development, game development, and low-level
            development.
          </p>
        </div>
      </div>
      {/* <!-- what-do --> */}
      <div className="section-wrapper pl-60 pr-60">
        <div className="section-title-wrap mb-30">
          <h3 className="section-title">What I do!</h3>
        </div>

        <div className="what-do-wrap mb-30">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="what-do-item bg-prink bg-blue">
                <div className="icon">
                  <i className="unreal-icon"></i>
                </div>
                <div className="text">
                  <h4 className="title">Game Development</h4>
                  <p>
                    Created immersive, interactive experiences and games,
                    leveraging Unreal Engine’s powerful tools for high-quality
                    graphics and performance
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- single item --> */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="what-do-item bg-prink bg-blue">
                <div className="icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div className="text">
                  <h4 className="title">Web Development</h4>
                  <p>
                    Developed responsive, user-friendly websites and
                    applications using modern frameworks and technologies,
                    ensuring optimal performance and user experience
                  </p>
                </div>
              </div>
            </div>
            {/*  <!-- single item --> */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="what-do-item bg-prink bg-blue">
                <div className="icon">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <div className="text">
                  <h4 className="title">Machine Learning</h4>
                  <p>
                    Developed predictive models and intelligent systems using
                    various ML frameworks, focusing on data analysis and
                    algorithm implementation.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- single item --> */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="what-do-item bg-prink bg-blue">
                <div className="icon">
                  <i className="fa-solid fa-network-wired"></i>
                </div>
                <div className="text">
                  <h4 className="title">IOT</h4>
                  <p>
                    Designed and implemented IoT solutions, integrating sensors
                    and devices to create smart, connected systems for various
                    applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
