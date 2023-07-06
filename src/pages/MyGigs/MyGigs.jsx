import React from "react";
import { Link } from "react-router-dom";
import "./myGigs.scss";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/delete.png" alt="img" />
            </td>
            <td>Gig1</td>
            <td>55</td>
            <td>12</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="delete" />
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
              <img className="delete" src="/images/delete.png" alt="delete" />
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
              <img className="delete" src="/images/delete.png" alt="delete" />
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
              <img className="delete" src="/images/delete.png" alt="delete" />
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
              <img className="delete" src="/images/delete.png" alt="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
