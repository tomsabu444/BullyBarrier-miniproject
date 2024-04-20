import React, { useState } from "react";
import "./style/Post.css";
import { useClerk } from "@clerk/clerk-react";
import { Button, TextareaAutosize } from "@mui/material";
import ShowPost from "./ShowPost";

function Post() {
  const { user } = useClerk();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="post">
      <div className="post-box">
        <div className="img-box">
          <img draggable="false" src={user.imageUrl} alt="user-image" />
        </div>
        <TextareaAutosize
          placeholder="What's happening?!"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <hr />
      <div className="post-btn">
        <Button>Post</Button>
      </div>
    </div>
  );
}

export default Post;
