import React from "react";
import { Link } from "react-router-dom";
import "./Postcard.css";

const Post = ({ blog }) => {
  return (
    <div class="post-card">
      <div className="card">
        {/* <img src="..." class="card-img-top" alt="..." /> */}
        <div class="card-body">
          <h5 class="card-title">{blog.title.rendered}</h5>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content.rendered.substring(0, 40),
            }}
            class="card-text"
          ></div>
          <Link to={"/post/" + blog.id} class="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
