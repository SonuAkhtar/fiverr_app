import React from "react";
import { useLocation } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="footer">
      <main>
        <div
          className={`top ${
            pathname === "/login" || pathname === "/register" ? "hide" : ""
          }`}
        >
          <div className="item">
            <h2>Categories</h2>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Business</span>
            <span>LifeStyle</span>
            <span>Photography</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Business</span>
            <span>LifeStyle</span>
            <span>Photography</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Business</span>
            <span>LifeStyle</span>
            <span>Photography</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Business</span>
            <span>LifeStyle</span>
            <span>Photography</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Fiverr</h2>
            <span>Fiverr international Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="twitter" />
              <img src="/images/facebook.png" alt="facebook" />
              <img src="/images/linkedin.png" alt="linkedin" />
              <img src="/images/pinterest.png" alt="pinterest" />
              <img src="/images/instagram.png" alt="instagram" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
