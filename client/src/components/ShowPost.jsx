import React, { useState, useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import Axios from "axios";
import "./style/ShowPost.css";

function ShowPost() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments data from the backend API
    const fetchComments = async () => {
      try {
        const response = await Axios.get("http://localhost:5273/api/getcomments");
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
                <h4>{comment.username}</h4>
                <p>@{comment.username} </p>
              </div>
              <span>{comment.createdAt}</span> {/* Assuming createdAt is in a suitable format */}
            </div>
          </div>
          <div className="comment-box" > {/* Adjust color as needed */}
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
