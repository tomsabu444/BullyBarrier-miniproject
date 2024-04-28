import React from "react";
import "./style/Credits.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const teamMembers = [
  {
    name: "James Alexander",
    role: "Full-Stack ",
    avatar: "https://cdn.discordapp.com/attachments/1194336632162222081/1200454655684124805/image.png?ex=662f0cc5&is=662dbb45&hm=6674fd7c3f0acb4e085ea30e8783e9d3e186ecf6f3ae54fc605efddea3b2b96e&",
    social: [
      { icon: <LinkedInIcon />, link: "#" },
      { icon: <GitHubIcon />, link: "#" },
    ],
  },
  {
    name: "Lilia Williams",
    role: "UX/UI Designer",
    avatar: "assets/liliya.jpg",
    social: [
      { icon: <LinkedInIcon />, link: "#" },
      { icon: <GitHubIcon />, link: "#" },
    ],
  },
  {
    name: "Alexander Smith",
    role: "Product Manager",
    avatar: "assets/alex.jpg",
    social: [
      { icon: <LinkedInIcon />, link: "#" },
      { icon: <GitHubIcon />, link: "#" },
    ],
  },
  {
    name: "Melissa Taylor",
    role: "Data Science",
    avatar: "assets/melissa.jpg",
    social: [
      { icon: <LinkedInIcon />, link: "#" },
      { icon: <GitHubIcon />, link: "#" },
    ],
  },
];

function Credits() {
  return (
    <div className="team-section">
      {teamMembers.map((member, index) => (
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
  );
}

export default Credits;
