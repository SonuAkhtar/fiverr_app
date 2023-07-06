import React from "react";
import { Link } from "react-router-dom";
import "./message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> - John Cena
        </span>
        <div className="messages">
          <div className="item">
            <img src="/images/man.png" alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias quia consequatur doloribus inventore sapiente assumenda
              sint eaque quo sunt dolore eligendi et, praesentium modi
              aspernatur labore laboriosam? Ab, facilis sunt?
            </p>
          </div>
          <div className="item owner">
            <img src="/images/man.png" alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias quia consequatur doloribus inventore sapiente assumenda
              sint eaque quo sunt dolore eligendi et, praesentium modi
              aspernatur labore laboriosam? Ab, facilis sunt?
            </p>
          </div>
          <div className="item">
            <img src="/images/man.png" alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias quia consequatur doloribus inventore sapiente assumenda
              sint eaque quo sunt dolore eligendi et, praesentium modi
              aspernatur labore laboriosam? Ab, facilis sunt?
            </p>
          </div>
          <div className="item owner">
            <img src="/images/man.png" alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias quia consequatur doloribus inventore sapiente assumenda
              sint eaque quo sunt dolore eligendi et, praesentium modi
              aspernatur labore laboriosam? Ab, facilis sunt?
            </p>
          </div>
          <div className="item">
            <img src="/images/man.png" alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias quia consequatur doloribus inventore sapiente assumenda
              sint eaque quo sunt dolore eligendi et, praesentium modi
              aspernatur labore laboriosam? Ab, facilis sunt?
            </p>
          </div>
          <div className="item owner">
            <img src="/images/man.png" alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias quia consequatur doloribus inventore sapiente assumenda
              sint eaque quo sunt dolore eligendi et, praesentium modi
              aspernatur labore laboriosam? Ab, facilis sunt?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            placeholder="Write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
