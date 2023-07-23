import React from "react";
import { cards, projects } from "../../data";

//components
import Hero from "../../components/Hero/Hero";
import Slide from "../../components/Slide/Slide";
import Features from "../../components/Features/Features";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Business from "../../components/Business/Business";
import CatCard from "../../components/CatCard/CatCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

//style
import "./homepage.scss";

const Homepage = () => {
  return (
    <section className="homepage">
      <Hero />

      <Slide slidesToShow={4} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

      <Features />

      <TrustedBy />
      <Business />

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </section>
  );
};

export default Homepage;
