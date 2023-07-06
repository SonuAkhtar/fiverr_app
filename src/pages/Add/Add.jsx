import React from "react";
import "./add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add new Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="I will do something I'm really good at"
            />

            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />

            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Bried description to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="one-page web design" />

            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your services"
            ></textarea>

            <label htmlFor="">Delivery Time</label>
            <input type="number" min={1} />

            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />

            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="Page Design" />
            <input type="text" placeholder="File Uploading" />
            <input type="text" placeholder="Setting up a domain" />
            <input type="text" placeholder="Hosting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
