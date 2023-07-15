import React from "react";
import { Slider } from "infinite-react-carousel";
import "./gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="breadcrumbs">{`FIVERR > GRAPHICS > DESIGN`}</div>
          <h1>I can create AI Generated Art for You.</h1>

          <div className="user">
            <img src="/images/mobile.jpg" alt="user" className="profile" />
            <span>John Cena</span>
            <div className="stars">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowScroll={1} className="slider">
            <img src="/images/mobile.jpg" alt="slide" />
            <img src="/images/mobile.jpg" alt="slide" />
            <img src="/images/mobile.jpg" alt="slide" />
            <img src="/images/mobile.jpg" alt="slide" />
            <img src="/images/mobile.jpg" alt="slide" />
          </Slider>

          <h2>About this Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet
            quam, natus iusto quas totam incidunt. Laboriosam praesentium quidem
            iure quam repudiandae animi, ipsa officia illo sunt enim fugiat
            beatae!
          </p>

          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src="/images/mobile.jpg" alt="user" />
              <div className="info">
                <span>John Cena</span>
                <div className="stars">
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <div className="title">From</div>
                  <div className="desc">USA</div>
                </div>
                <div className="item">
                  <div className="title">Member Since</div>
                  <div className="desc">Jan 2021</div>
                </div>
                <div className="item">
                  <div className="title">Avg. Response Time</div>
                  <div className="desc">2 hours</div>
                </div>
                <div className="item">
                  <div className="title">Last Delivery</div>
                  <div className="desc">1 week ago</div>
                </div>
                <div className="item">
                  <div className="title">Languages</div>
                  <div className="desc">English, Spanish</div>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                omnis asperiores velit labore doloremque veritatis aperiam sunt
                tempore voluptate iure at, aliquam, perferendis consequuntur
                molestias totam unde natus repellat quisquam?
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="/images/mobile.jpg" alt="user" className="profile" />
                <div className="info">
                  <span>John Cena</span>
                  <div className="country">
                    <img src="/images/star.png" alt="star" />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores animi, voluptas ipsam reprehenderit cum totam fugit
                incidunt corporis consectetur dolorum magnam accusamus
                perferendis cumque corrupti soluta placeat ipsa. Maxime,
                tempore!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="like" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="/images/mobile.jpg" alt="user" className="profile" />
                <div className="info">
                  <span>John Cena</span>
                  <div className="country">
                    <img src="/images/star.png" alt="star" />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores animi, voluptas ipsam reprehenderit cum totam fugit
                incidunt corporis consectetur dolorum magnam accusamus
                perferendis cumque corrupti soluta placeat ipsa. Maxime,
                tempore!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="like" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="/images/mobile.jpg" alt="user" className="profile" />
                <div className="info">
                  <span>John Cena</span>
                  <div className="country">
                    <img src="/images/star.png" alt="star" />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores animi, voluptas ipsam reprehenderit cum totam fugit
                incidunt corporis consectetur dolorum magnam accusamus
                perferendis cumque corrupti soluta placeat ipsa. Maxime,
                tempore!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="like" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated Image</h3>
            <h3>$ 5.99</h3>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            explicabo non adipisci debitis natus maxime vitae eos molestiae. Ut
            eius fugit illo id facere perferendis culpa sed, vitae deleniti
            dolor!
          </p>
          <div className="details">
            <div className="item">
              <img src="/images/clock.png" alt="clock" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/images/recycle.png" alt="clock" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/images/greencheck.png" alt="check" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="check" />
              <span>Prompt Writing</span>
            </div>

            <div className="item">
              <img src="/images/greencheck.png" alt="check" />
              <span>Prompt Writing</span>
            </div>

            <div className="item">
              <img src="/images/greencheck.png" alt="check" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
