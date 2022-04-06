import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Navbar2 from "../components/Navbar2";
import { blogSvc, hostName } from "../constants/ApiEndPoints";
import { userRole } from "../constants/CommonConstants";

const CreatePost = () => {
  const [title, setTitle] = React.useState("");
  const [eligible, setEligible] = React.useState(false);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    document.title = "Create Post";
    const cachedRole = localStorage.getItem("user_role");
    if (cachedRole === userRole.admin) {
      setEligible(true);
    }
  }, []);

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const createPost = () => {
    console.log("createPost ");
    const blogUrl = hostName + blogSvc;
    fetch(blogUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: editorState,
        author: 1,
        status: "publish",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/blog");
      });
  };

  return (
    <div>
      <Navbar2 />
      <div>
        {eligible ? (
          <div className="blog-container">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Title"
                  onChange={handleTitleChange}
                  value={title}
                />
                <label htmlFor="exampleInputEmail1">Content</label>
                <div>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                  />
                </div>
              </div>
            </form>

            <button className="btn btn-primary" onClick={createPost}>
              Submit
            </button>
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            <p>You are not eligible to create a post</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
