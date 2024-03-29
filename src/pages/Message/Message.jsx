import React from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./message.scss";

const Message = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });

    e.target[0].value = "";
  };

  return (
    <section className="message">
      <main>
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> - John Cena
        </span>

        {isLoading ? (
          "Loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="messages">
            {data.map((item) => (
              <div
                className={
                  item.userId === currentUser._id ? "owner item" : "item"
                }
                key={item._id}
              >
                <img src="/images/man.png" alt="profile" />
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleMsgSubmit}>
          <textarea
            name=""
            id=""
            placeholder="Write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </main>
    </section>
  );
};

export default Message;
