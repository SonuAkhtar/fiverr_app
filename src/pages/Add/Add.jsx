import React, { useReducer, useState } from "react";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import "./add.scss";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);

    try {
      const coverImage = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);

      dispatch({ type: "ADD_IMAGES", payload: { coverImage, images } });
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);

    navigate("/myGigs");
  };

  return (
    <section className="add">
      <main>
        <h1>Add new Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="I will do something I'm really good at"
              onChange={handleChange}
            />

            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "Uploading" : "Upload"}
              </button>
            </div>

            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="shortTitle">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="one-page web design"
              onChange={handleChange}
            />

            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              name="shortDesc"
              id="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short description of your services"
              onChange={handleChange}
            ></textarea>

            <label htmlFor="deliveryTime">Delivery Time</label>
            <input
              id="deliveryTime"
              name="deliveryTime"
              type="number"
              min={1}
              onChange={handleChange}
            />

            <label htmlFor="revisionNumber">Revision Number</label>
            <input
              id="revisionNumber"
              name="revisionNumber"
              type="number"
              min={1}
              onChange={handleChange}
            />

            <label htmlFor="feature">Add Features</label>
            <form onSubmit={handleFeature} className="add">
              <input id="feature" type="text" placeholder="eg. Page Design" />
              <button type="submit">Add</button>
            </form>

            <div className="addedFeatures">
              {state?.features?.map((feature) => (
                <div className="item" key={feature}>
                  <button>
                    {feature}
                    <span
                      onClick={() =>
                        dispatch({ type: "REMOVE_FEATURE", payload: feature })
                      }
                    >
                      x
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleChange}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Add;
