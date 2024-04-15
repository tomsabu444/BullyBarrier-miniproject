import React, { useState } from "react";
import "./style/Post.css";
import { useClerk } from "@clerk/clerk-react";

function Post() {
  const { user } = useClerk();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="post-box">
    <div className="img-box">
          <img draggable="false" src={user.imageUrl} alt="user-image" />
        </div>
      <textarea
        placeholder="What's happening?"
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}

export default Post;