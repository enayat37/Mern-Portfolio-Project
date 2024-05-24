import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/enayat-khalili/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxl-linkedin-square"></i>
      </a>
      <a
        href="https://www.kaggle.com/enayatullah123"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxs-data"></i>
      </a>
      <a
        href="https://github.com/enayat37"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
