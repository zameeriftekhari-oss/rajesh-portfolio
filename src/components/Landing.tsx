import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ZAMIR IFTEKHARI
              <br />
              <span>CHITYAL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Graphic Designer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Product Developer</div>
              <div className="landing-h2-2">Innovator & Creator</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Product Developer</div>
              <div className="landing-h2-info-1">Innovator & Creator</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
