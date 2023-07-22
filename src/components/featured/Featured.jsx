import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./featured.scss";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSeaerch = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <section className="featured">
      <main>
        <div className="left">
          <h1>
            Get the best <span>freelancers</span> for your business.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/images/search.png" alt="search-img" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSeaerch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="/images/man.png" alt="man-img" />
        </div>
      </main>
    </section>
  );
};

export default Featured;
