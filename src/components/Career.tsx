import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer</h4>
                <h5>IStem Labs</h5>
              </div>
              <h3>2025-PRESENT</h3>
            </div>
            <p>
              Building reusable components and scalable frontend systems with
              TypeScript, Tailwind CSS, and Styled Components. Developing
              dynamic applications with Next.js and TanStack Query, while
              contributing to monorepo workflows and code quality practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer (Part-time)</h4>
                <h5>Mero Party - Remote</h5>
              </div>
              <h3>2024-PRESENT</h3>
            </div>
            <p>
              Developed and maintained a mobile-responsive booking platform using
              React and TypeScript. Improved app performance with TanStack Query,
              built polished UI with Tailwind CSS, and collaborated closely with
              cross-functional teams to ship reliable features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer</h4>
                <h5>COL Thinkspace</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built responsive web and mobile interfaces with React and React
              Native, shipped app updates to iOS and Android stores, and improved
              stability through debugging, testing, and reusable architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer Intern</h4>
                <h5>Treeleaf Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on chatbot and analytics web apps by integrating APIs,
              transforming Figma designs into React interfaces, and building data
              visualizations with charting libraries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Intern</h4>
                <h5>KARYATHALO</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Collaborated on user-friendly web interfaces, responsive design,
              and legacy codebase refactors that improved performance and reduced
              bugs through better team code review practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
