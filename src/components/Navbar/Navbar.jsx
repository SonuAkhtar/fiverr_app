import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const currentUser = {
    id: 1,
    userName: "sonu A",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser && (
            <div className="user" onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQijI6Sf7U-nKAfhHFmFBhVVVIxOfzI3QBeHqEjXJ7qcqbu98eqykx0UdmHrvt9Wx5hKilfZROD0mR85gk"
                alt="user-image"
              />
              <span>{currentUser?.userName}</span>
              {menuOpen && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/myGigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link" to="/">
                Graphics & Design
              </Link>
              <Link className="link" to="/">
                Video & Animation
              </Link>
              <Link className="link" to="/">
                AI Services
              </Link>
              <Link className="link" to="/">
                Digital Marketing
              </Link>
              <Link className="link" to="/">
                Music & Audio
              </Link>
              <Link className="link" to="/">
                Programming & Tech
              </Link>
              <Link className="link" to="/">
                Business
              </Link>
              <Link className="link" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        ))}
    </div>
  );
};

export default Navbar;
