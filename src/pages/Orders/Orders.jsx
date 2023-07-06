import React from "react";
import "./orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "sonuA",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/delete.png" alt="img" />
            </td>
            <td>Gig1</td>
            <td>55</td>
            <td>12</td>
            <td>
              <img className="delete" src="/images/message.png" alt="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/delete.png" alt="img" />
            </td>
            <td>Gig1</td>
            <td>55</td>
            <td>12</td>
            <td>
              <img className="delete" src="/images/message.png" alt="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/delete.png" alt="img" />
            </td>
            <td>Gig1</td>
            <td>55</td>
            <td>12</td>
            <td>
              <img className="delete" src="/images/message.png" alt="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/delete.png" alt="img" />
            </td>
            <td>Gig1</td>
            <td>55</td>
            <td>12</td>
            <td>
              <img className="delete" src="/images/message.png" alt="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/delete.png" alt="img" />
            </td>
            <td>Gig1</td>
            <td>55</td>
            <td>12</td>
            <td>
              <img className="delete" src="/images/message.png" alt="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
