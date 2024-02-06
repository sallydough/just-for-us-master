import React, { useState } from "react";

import "./watchtv.css";

function Television() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleTvButtonClick = () => {
    console.log("TV button clicked");
  };

  const handleButtonHover = () => {
    setIsButtonHovered(!isButtonHovered);
  };
  return (
    <div>
      {/* <Link to="/" className="linkStyle tvLink">
        <div className="up-arrow tvArrowUp">
          <IoIosArrowUp size={90} className="arrow-up" />
        </div>
        <div className="down-arrow tvArrowDown">
          <IoIosArrowDown size={90} className="arrow-down" />
        </div>
      </Link> */}
      <div id="tv" className="settings">
        <button
          className={`button ${isButtonHovered ? "hovered" : ""}`}
          onClick={handleTvButtonClick}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonHover}>
          <h1 className="card-name-live-tv">LIVE TV</h1>
        </button>
      </div>
    </div>
  );
}

export default Television;
