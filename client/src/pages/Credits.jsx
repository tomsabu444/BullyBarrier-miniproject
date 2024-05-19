import React, { useEffect, useState } from "react";
import "./style/Credits.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
//profile image
import tomsabu_profile from "../assets/tomsabu_profile.jpg";
import sam_profile from "../assets/sam_profile.jpeg";
import roshan_profile from "../assets/roshan_profile.jpeg";

const teamMembers = [
  {
    name: "Jyotsna Sara Abey",
    role: "FrontEnd Developer",
    avatar: "https://avatars.githubusercontent.com/u/124339803?v=4",
    social: [
      {
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/jyothsnasaraabey/",
      },
      { icon: <GitHubIcon />, link: "https://github.com/23Jyo" },
    ],
  },
  {
    name: "Tom Sabu",
    role: "Fullstack Developer",
    avatar: tomsabu_profile,
    social: [
      {
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/tomsabu444/",
      },
      { icon: <GitHubIcon />, link: "https://github.com/tomsabu444" },
    ],
  },
  {
    name: "Sam Mathew",
    role: "UI/UX Designer",
    avatar: sam_profile,
    social: [
      {
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/-sammathew007",
      },
      { icon: <GitHubIcon />, link: "https://github.com/SamMathew007" },
    ],
  },
  {
    name: "Roshan Jacob",
    role: "Data Science",
    avatar: roshan_profile,
    social: [
      { icon: <LinkedInIcon />, link: "http://linkedin.com/in/roshanjacob-" },
      { icon: <GitHubIcon />, link: "https://github.com/RoshanJacob10" },
    ],
  },
];

function Credits() {
  const [duplicatedTeamMembers, setDuplicatedTeamMembers] = useState([]);

  useEffect(() => {
    // Function to append the teamMembers array to itself infinitely
    const appendTeamMembers = () => {
      setDuplicatedTeamMembers((prevMembers) => [
        ...prevMembers,
        ...teamMembers,
      ]);
    };

    // Call the function initially and then repeat it every time the teamMembers array changes
    appendTeamMembers();
    const interval = setInterval(appendTeamMembers, 30 * 1000); // Repeat every 20 seconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="team-section">
      <div className="team-member-container">
        {duplicatedTeamMembers.map((member, index) => (
          <article key={index} className="team-member">
            <div className="team-member-avatar">
              <img src={member.avatar} alt={member.name} />
            </div>
            <div className="team-member-name">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="social-links">
              {member.social.map((item, idx) => (
                <a key={idx} href={item.link}>
                  {item.icon}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Credits;
