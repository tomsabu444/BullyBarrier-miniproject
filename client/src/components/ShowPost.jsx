import { useClerk } from "@clerk/clerk-react";
import React from "react";
import "./style/ShowPost.css";
function ShowPost() {
  const { user } = useClerk();

  return (
    <div className="users-posts">
      <div className="users-info">
        <div className="users-img-box">
          <img draggable="false" src={user.imageUrl} alt="user-image" />
        </div>
        <div className="users-names">
          <h3>testadssssssssssssss</h3>
          <p>tomsabu444</p>
        </div>
      </div>
    </div>
  );
}

export default ShowPost;
