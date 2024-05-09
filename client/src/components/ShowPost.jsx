import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style/ShowPost.css";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { SERVER_BASE_URL } from "../config/utils.config";

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
    const fetchComments = async (page) => {
      try {
        const token = await getToken();

        const response = await Axios.get(
          `${SERVER_BASE_URL}/api/getcomments?page=${page}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    // Initially fetch comments with page = 1
    fetchComments(1);

    // Set a timeout to fetch comments again with page = 0 after 5 seconds
    const timeoutId = setTimeout(() => {
      fetchComments(0);
    }, 5000);

    // Clear the timeout and fetch comments with page = 1 when the component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, [getToken]);

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

  const DeleteAlertDialog = ({ commentId }) => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button>
          <DeleteIcon />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            This action cannot be undone. Are you sure you want to delete this
            comment?
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <Button variant="contained">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeletePost(commentId)}
              >
                Delete
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );

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
                <DeleteAlertDialog commentId={comment._id} />
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
