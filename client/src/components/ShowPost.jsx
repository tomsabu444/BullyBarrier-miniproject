import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style/ShowPost.css";
import { useAuth } from "@clerk/clerk-react";

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

  useEffect(() => {
    // Fetch comments data from the backend API
    const fetchComments = async () => {
      try {
        const token = await getToken();

        const response = await Axios.get(
          "https://bullybarrier-miniproject.onrender.com/api/getcomments",
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

  return (
    <div className="feed">
      {comments.map((comment) => (
        <div key={comment._id} className="users-posts">
          <div className="users-info">
            <div className="users-img-box">
              <img draggable="false" src={comment.image} alt="user-image" />
            </div>
            <div className="posted-user">
              <div className="users-names">
                <h4>{comment.fullname}</h4>
                <p>@{comment.username} </p>
              </div>
              <span>{timeAgo(comment.createdAt)}</span>{" "}
              {/* Display time ago format */}
            </div>
          </div>
          <div className="comment-box">
            {" "}
            {/* Adjust color as needed */}
            <p>{comment.content}</p>
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
