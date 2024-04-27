import React from "react";
import "./style/Notify.css";
import { Badge, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Notify() {
  //sample
  const notifications = [
    "Warning: Your recent message 'message' contains bullying content",
  ];

  return (
    <div className="notify">
      <div className="nofity-title">
        <h1>Notification</h1>
        <div className="Nofity-icon">
          {/* 
          //! notification count  
          */}
          <Badge badgeContent={notifications.length} color="warning">
            <NotificationsIcon color="blue" />
          </Badge>
        </div>
      </div>
      <hr />

      {/* Map through the notifications array and render each notification */}
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          <Box sx={{ p: 1 }}>
            <p>{notification}</p>
          </Box>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Notify;
