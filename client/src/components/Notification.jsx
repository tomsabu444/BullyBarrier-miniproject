import React, { useEffect, useState } from "react";
import "./style/Notify.css";
import { Badge, Box } from "@mui/material"; // Added CircularProgress for loading indicator
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import Axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import Loading from "./Loading";
import { SERVER_BASE_URL } from "../config/utils.config";

function Notify({ onFlaggedCommentsCountChange }) {
  const [flaggedComments, setFlaggedComments] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  //! Api Auth
  const { getToken } = useAuth();

  useEffect(() => {
    // Fetch flagged comments for the current user
    const fetchFlaggedComments = async () => {
      try {
        const token = await getToken();
        const response = await Axios.get(`${SERVER_BASE_URL}/api/flaggedpost`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setFlaggedComments(response.data);

        //! Pass the count of flagged comments to the Home component
        onFlaggedCommentsCountChange(response.data.length);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching flagged comments:", error);
        setLoading(true); // Set loading to true in case of error
      }
    };

    fetchFlaggedComments();
  }, [getToken, onFlaggedCommentsCountChange]);

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
      {loading ? ( // Show loading indicator if data is loading
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <Loading />
        </Box>
      ) : (
        <div className="notification">
          {/* Render notifications if available, otherwise show a message */}
          {flaggedComments.length > 0 ? (
            flaggedComments.map((comment, index) => (
              <div key={index} className="notification">
                <Box sx={{ p: 1 }}>
                  <p>
                    <strong> Warning ⛔: </strong> Your recent message
                    <span> "{comment}"</span> contains bullying content 😟.
                  </p>
                </Box>
                <hr />
              </div>
            ))
          ) : (
            <Box sx={{ p: 1 }}>
              <p>No warnings to show 😀! Keep up the good work!</p>
            </Box>
          )}
        </div>
      )}
    </div>
  );
}

export default Notify;
