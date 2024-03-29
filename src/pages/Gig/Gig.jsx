import React from "react";
import { Slider } from "infinite-react-carousel";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import "./gig.scss";

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userID = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userID}`).then((res) => {
        return res.data;
      }),

    enabled: !!userID,
  });

  return (
    <section className="gig">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <main>
          <div className="left">
            <div className="breadcrumbs">{`FIVERR > GRAPHICS > DESIGN`}</div>
            <h1>{data.title}</h1>

            {isLoadingUser ? (
              "Loading user"
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className="user">
                <img
                  className="profile"
                  src={dataUser.image || "/images/noavatar.jpg"}
                  alt="user"
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((img, i) => (
                        <img key={i} src="/images/star.png" alt="star" />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}

            <Slider slidesToShow={1} arrowScroll={1} className="slider">
              {data.images.map((image) => (
                <img key={image} src={image} alt="slide-img" />
              ))}
            </Slider>

            <h2>About this Gig</h2>
            <p>{data.desc}</p>

            {isLoadingUser ? (
              "Loading user"
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className="seller">
                <h2>About the Seller</h2>
                <div className="user">
                  <img
                    src={dataUser.image || "/images/noavatar.jpg"}
                    alt="user"
                  />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((img, i) => (
                            <img key={i} src="/images/star.png" alt="star" />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>

                <div className="box">
                  <div className="items">
                    <div className="item">
                      <div className="title">From</div>
                      <div className="desc">{dataUser.country}</div>
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
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}

            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h3>$ {data.price}</h3>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/images/clock.png" alt="clock" />
                <span>{data.deliveryTime} days Delivery</span>
              </div>
              <div className="item">
                <img src="/images/recycle.png" alt="clock" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div key={feature} className="item">
                  <img src="/images/greencheck.png" alt="check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </main>
      )}
    </section>
  );
};

export default Gig;
