import React, { useEffect, useState } from "react";
import "./style/Post.css";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { Button, TextareaAutosize } from "@mui/material";
import ShowPost from "./ShowPost";
import Axios from "axios";
import { toast } from "react-toastify";

import { SERVER_BASE_URL } from "../config/utils.config";

function Post({ refreshNotifications, usernameSearch, flaggedCommentsCount }) {
  const { user } = useClerk();
  const [inputValue, setInputValue] = useState(""); //? Post Input

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const [refreshShowPost, setRefreshShowPost] = useState(false); //! To Refresh The ShowPost Component if post is successfull

  useEffect(() => {
    if (refreshShowPost) {
      // If refreshShowPost state changes, trigger refresh of ShowPost component
      setRefreshShowPost(false); // Reset refresh state
      refreshNotifications(); //! If post is successful, trigger refresh of notifications
    }
  }, [refreshShowPost]);

  //! Api Auth
  const { getToken } = useAuth();

  const handleSubmit = async () => {
    try {
      if (!inputValue) {
        // If input value is missing, show alert notification
        toast.error("Please enter something before posting");
        return;
      }
      if (flaggedCommentsCount >= 5) {
        // Check if the count of flagged comments is greater than or equal to 5
        toast.warning(
          `"You cannot post because there are too many flagged Bully Posts.
          Please delete flagged posts before posting again."`
        );
        return;
      }

      const postData = {
        // clerkUserId: user.id,
        // fullname: user.fullName.toUpperCase(),
        // username: user.username,
        // email: user.emailAddresses[0].emailAddress,
        // image: user.imageUrl,
        content: inputValue,
      };

      const token = await getToken();
      //* Show promise notification and send data
      const promise = Axios.post(
        `${SERVER_BASE_URL}/api/content-analyse`,
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //* Show promise notification until request is resolved
      toast.promise(promise, {
        pending: "Sending comment...",
        success: "Comment sent successfully",
        error: "Failed to send comment 🤯",
      });

      //? Wait for the request to complete
      const response = await promise;

      //* Clear the input value after posting
      setInputValue("");

      // //* Check if the request was successful
      if (response.status === 200) {
        setRefreshShowPost(true); //!  Refresh the posts in order to see new posted

        //   //* Show success alert notification
        //   toast.success("Comment sent successfully");
        // } else {
        //   toast.error("Failed to save comment. Please try again later.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      // Show error alert notification
      // toast.error("An error occurred. Please try again later.");
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
        <ShowPost key={refreshShowPost} usernameSearch={usernameSearch} />
      </div>
    </div>
  );
}

export default Post;
