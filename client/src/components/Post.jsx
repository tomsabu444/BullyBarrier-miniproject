import React, { useState } from "react";
import "./style/Post.css";
import { useClerk } from "@clerk/clerk-react";
import { Button, TextareaAutosize } from "@mui/material";
import ShowPost from "./ShowPost";
import Axios from "axios";

function Post() {
  const { user } = useClerk();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const postData = {
        clerkUserId: user.id,
        username: user.fullName,
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
        content: inputValue,
      };

      // Send the post data to your backend
      await Axios.post("http://localhost:5273/api/content-analyse", postData);

      // Clear the input value after posting
      setInputValue("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="post-section">
      <div className="post">
        <div className="post-box">
          <div className="img-box">
            <img draggable="false" src={user.imageUrl} alt="user-image" />
          </div>
          <TextareaAutosize
            id="inputpost"
            placeholder="What's happening?!"
            value={inputValue}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <hr />
        <div className="post-btn">
          <Button onClick={handleSubmit}>Post</Button>
        </div>
      </div>

      <div className="show-post">
        <ShowPost />
      </div>
    </div>
  );
}

export default Post;
