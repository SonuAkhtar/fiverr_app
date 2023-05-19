import React from "react";
import "./home.scss";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/CatCard/CatCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips.</h1>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
          </div>

          <div className="item">
            <video src="../../../public/images/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Update to a curated experience packed with tools and banefits,
              dedicated to businesses.
            </p>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              Connect to freelancers with proven business experience.
            </div>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              Connect to freelancers with proven business experience.
            </div>
            <div className="title">
              <img src="../../../public/images/check.png" alt="check" />
              Connect to freelancers with proven business experience.
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://ychef.files.bbci.co.uk/1280x720/p0ff8hmx.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
