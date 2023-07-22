import React from "react";
import "./home.scss";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/CatCard/CatCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
  return (
    <section className="home">
      <Featured />

      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <main>
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips.</h1>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every price point. No hourly rate,
              just project based pricing.
            </p>
          </div>

          <div className="item">
            <video src="/images/video.mp4" controls></video>
          </div>
        </main>
      </div>
      <TrustedBy />
      <div className="features dark">
        <main>
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Update to a curated experience packed with tools and banefits,
              dedicated to businesses.
            </p>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              Connect to freelancers with proven business experience.
            </div>
            <div className="title">
              <img src="/images/check.png" alt="check" />
              Connect to freelancers with proven business experience.
            </div>
            <div className="title">
              <img src="/images/check.png" alt="check" />
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
        </main>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </section>
  );
};

export default Home;
