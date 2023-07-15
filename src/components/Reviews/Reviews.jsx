import React from "react";
import Review from "../Review/Review";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./reviews.scss";

const Reviews = ({ gigId }) => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong"
        : data.map((review) => <Review key={review._id} review={review} />)}
      <hr />
    </div>
  );
};

export default Reviews;
