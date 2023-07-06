import React from "react";
import { Link } from "react-router-dom";
import "./messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "sonuA",
    isSeller: true,
  };

  const message = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Perspiciatis repellendus asperiores minima provident maiores
  dolorem, repudiandae, voluptatem temporibus cumque atque dolores
  magnam placeat enim? Maiores, adipisci! Qui aperiam odio ipsa.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Steve Jobs</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Steve Jobs</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          <tr>
            <td>Steve Jobs</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          <tr>
            <td>Steve Jobs</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
