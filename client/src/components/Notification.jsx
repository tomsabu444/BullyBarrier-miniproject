import React, { useEffect, useState } from "react";
import "./style/Notify.css";
import { Badge, Box } from "@mui/material";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import Axios from "axios";
import { useAuth, useClerk } from "@clerk/clerk-react";

function Notify() {
  const [flaggedComments, setFlaggedComments] = useState([]);

  const { user } = useClerk();

  //! Api Auth
  const { getToken } = useAuth();

  useEffect(() => {
    // Fetch flagged comments for the current user
    const fetchFlaggedComments = async () => {
      try {
        const clerkUserId = user.id;

        const token = await getToken();
        const response = await Axios.get(
          `http://localhost:5273/api/flaggedpost/${clerkUserId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFlaggedComments(response.data);
      } catch (error) {
        console.error("Error fetching flagged comments:", error);
      }
    };

    fetchFlaggedComments();
  }, []);

  return (
    <div className="notify">
      <div className="nofity-title">
        <h1>Notification</h1>
        <div className="Nofity-icon">
          <Badge badgeContent={flaggedComments.length} color="warning">
            <NotificationImportantIcon color="blue" />
          </Badge>
        </div>
      </div>
      <hr />

      {/* Map through the flagged comments array and render each notification */}
      {flaggedComments.map((comment, index) => (
        <div key={index} className="notification">
          <Box sx={{ p: 1 }}>
            <p>
              <strong> Warning ⛔: </strong> Your recent message
              <span> "{comment}"</span> contains bullying content 😟.
            </p>
          </Box>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Notify;
