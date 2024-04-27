import React from "react";
import "./style/Notify.css";
import { Badge, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Notify() {
  return (
    <div className="notify">
      <div className="nofity-title">
        <h1>Notification</h1>
        <div className="Nofity-icon">
          <Badge badgeContent={2} color="warning">
            <NotificationsIcon color="blue" />
          </Badge>
        </div>
      </div>
      <hr />

      <div className="notification">
        <Box sx={{ p: 1 }}>
          <p>Warning: Your recent message "message" contains bullying content</p>
        </Box>
        <hr />
        
      </div>
    </div>
  );
}

export default Notify;
