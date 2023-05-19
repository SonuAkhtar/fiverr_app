import React from "react";
import "./trustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted By:</span>
        <img src="../../public/images/facebook-logo.png" alt="facebook" />
        <img src="../../public/images/google.png" alt="google" />
        <img src="../../public/images/netflix.png" alt="netflix" />
        <img src="../../public/images/pg.png" alt="pandg" />
        <img src="../../public/images/paypal.png" alt="paypal" />
      </div>
    </div>
  );
};

export default TrustedBy;
