import React from "react";
import "./trustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted By:</span>
        <img src="/images/facebook-logo.png" alt="facebook" />
        <img src="/images/google.png" alt="google" />
        <img src="/images/netflix.png" alt="netflix" />
        <img src="/images/pg.png" alt="pandg" />
        <img src="/images/paypal.png" alt="paypal" />
      </div>
    </div>
  );
};

export default TrustedBy;
