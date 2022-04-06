import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Post from "../components/Postcard";
import { postsSvc, hostName } from "../constants/ApiEndPoints";
import "./Blog.css";

const ArticleSkeleton = () => {
  return (
    <div className="blog-article">
      <div>
        <Skeleton height={250} />
      </div>
      <h3 className="blog-article-title">
        <Skeleton />
      </h3>
      <div className="blog-article-date">
        <Skeleton />
      </div>
      <p className="blog-article-content">
        <Skeleton />
      </p>
      <a>
        <Skeleton />
      </a>
    </div>
  );
};
function Blog() {
  const [blogs, setBlogs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const defaultImg =
    "https://c1.wallpaperflare.com/preview/559/310/543/anchored-boat-coast-sea.jpg";

  useEffect(() => {
    document.title = "Blog";
    const blogUrl = hostName + postsSvc;
    fetch(blogUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setBlogs(data);
      });
  }, []);

  const fetchImage = (image) => {
    return image ? image : defaultImg;
  };

  return (
    <div class="blog-page">
      <Navbar2 />
      <div className="blog-container">
        <div className="blog-wrapper">
          <h2 className="blog-header">Blog</h2>
          <div className="blog-main">
            {isLoading || blogs.length == 0 ? (
              <ArticleSkeleton />
            ) : (
              <div className="blog-article">
                <img src={fetchImage(blogs[0].featured_image.large)} />
                <h3 className="blog-article-title">{blogs[0].title}</h3>
                <div className="blog-article-date">{blogs[0].date}</div>
                <div
                  className="blog-article-content"
                  dangerouslySetInnerHTML={{
                    __html: blogs[0].content.slice(0, 200),
                  }}
                ></div>
                <Link to={`/post/${blogs[0].id}`}>Read more</Link>
              </div>
            )}
          </div>
          <div className="blog-sub">
            {isLoading ? (
              <>
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
              </>
            ) : (
              <>
                {blogs.length > 0 &&
                  blogs.slice(1).map((blog) => {
                    return (
                      <div className="blog-article" ket={blog.id}>
                        <img src={fetchImage(blog.featured_image.large)} />
                        <h3 className="blog-article-title">{blog.title}</h3>
                        <div className="blog-article-date">{blog.date}</div>
                        <div
                          className="blog-article-content"
                          dangerouslySetInnerHTML={{
                            __html: blog.content.slice(0, 200),
                          }}
                        ></div>
                        <Link to={`/post/${blog.id}`}>Read more</Link>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
