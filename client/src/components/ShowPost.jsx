import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style/ShowPost.css";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';

import verified_image from "../assets/verified_image.gif";

//* Function to convert timestamp to time ago format
function timeAgo(timestamp) {
  const now = new Date();
  const diff = Math.round((now - new Date(timestamp)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diff / seconds);
    if (interval >= 1) {
      return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
    }
  }

  return "just now";
}

function ShowPost() {
  const [comments, setComments] = useState([]);

  //! Api Auth
  const { getToken } = useAuth();
  const { user } = useClerk();

  useEffect(() => {
    // Fetch comments data from the backend API
    const fetchComments = async () => {
      try {
        const token = await getToken();

        const response = await Axios.get(
          "http://localhost:5273/api/getcomments",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setComments(response.data.reverse());
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleDeletePost = async (commentId) => {
    try {
      const token = await getToken();
      await Axios.delete(
        `http://localhost:5273/api/deletecomment/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update comments after deletion
      const updatedComments = comments.filter(
        (comment) => comment._id !== commentId
      );
      setComments(updatedComments);
      toast.info("Comment Deleted");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to Deleting comment. Please try again later.");
    }
  };

  return (
    <div className="feed">
      {comments.map((comment) => (
        <div key={comment._id} className="users-posts">
          <div className="users-info">
            <div className="users-img-box">
              <img
                draggable="false"
                src={comment.user.image}
                alt="user-image"
              />
            </div>
            <div className="posted-user">
              <div className="users-names">
                <h4>
                  {`${comment.user.firstname.toUpperCase()} ${comment.user.lastname.toUpperCase()}`}
                  {/*//* <img src={verified_image} alt="verified_image" /> */}
                </h4>
                <p>@{comment.user.username} </p>
              </div>
              <span>{timeAgo(comment.createdAt)}</span>
              {/* Display time ago format */}
            </div>
          </div>
          <div
            className={comment.flagged ? "comment-box flagged" : "comment-box"}
          >
            {/* Adjust color as needed */}
            <p>{comment.content}</p>
            {user &&
              user.username === comment.user.username && ( // Compare user IDs
                <Button color="info"  onClick={() => handleDeletePost(comment._id)}>
                 <DeleteIcon />
                </Button>
              )}
          </div>
          <div className="feed-hr-end">
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowPost;
