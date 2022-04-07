import React from "react";
import { Link } from "react-router-dom";
import "./Postcard.css";

const Post = ({ blog }) => {
  return (
    <div className="post-card">
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{blog.title.rendered}</h5>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content.rendered.substring(0, 40),
            }}
            className="card-text"
          ></div>
          <Link to={"/post/" + blog.id} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
