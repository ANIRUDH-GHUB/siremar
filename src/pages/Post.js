import React, { useEffect } from "react";
import { useParams } from "react-router";
import Navbar2 from "../components/Navbar2";
import { blogSvc, hostName, postsSvc } from "../constants/ApiEndPoints";
import "./Post.css";

const Post = () => {
  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const defaultImg =
    "https://c1.wallpaperflare.com/preview/559/310/543/anchored-boat-coast-sea.jpg";

  const { id } = useParams();

  const fetchImage = (image) => {
    return image ? image : defaultImg;
  };

  useEffect(() => {
    setIsLoading(true);
    const postUrl = hostName + postsSvc + "/" + id;
    fetch(postUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar2 />
      <div className="blog-container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {post ? (
              <div>
                <div className="post-header">
                  <h1>{post.title}</h1>
                  <img src={fetchImage(post.featured_image.large)} />
                </div>
                <div>{post.date}</div>
                <div
                  className="post-body"
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                ></div>
              </div>
            ) : null}
          </>
        )}
      </div>
      )
    </div>
  );
};

export default Post;
