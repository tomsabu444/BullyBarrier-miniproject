import React from "react";
import { useClerk } from "@clerk/clerk-react";
import "./style/ShowPost.css";

function ShowPost() {
  const { user } = useClerk();

  // Sample array of posts with color
  const posts = [
    { id: 1, content: "Lorem ipsum dolor sit amet 1", time: "10 min ago", color: "rgb(44, 252, 2)" },
    { id: 2, content: "Lorem ipsum dolor sit amet 2", time: "20 min ago", color: "rgb(255, 0, 0)" },
    { id: 3, content: "Lorem ipsum dolor sit amet 3", time: "30 min ago", color: "rgb(255, 0, 0)" },
    // Add more posts as needed
  ];

  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="users-posts">
          <div className="users-info">
            <div className="users-img-box">
              <img draggable="false" src={user.imageUrl} alt="user-image" />
            </div>
            <div className="posted-user">
              <div className="users-names">
                <h4>TOM SABU</h4>
                <p>@tomsabu444 </p>
              </div>
              <span>{post.time}</span>
            </div>
          </div>
          <div className="comment-box" style={{ color: post.color }}>
            <p>{post.content}</p>
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
