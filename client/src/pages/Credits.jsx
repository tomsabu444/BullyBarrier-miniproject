import React from "react";
import "./style/Credits.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const teamMembers = [
  {
    name: "Jyo",
    role: "Full-Stack ",
    avatar: "https://cdn.discordapp.com/attachments/1194336632162222081/1200454655684124805/image.png?ex=662f0cc5&is=662dbb45&hm=6674fd7c3f0acb4e085ea30e8783e9d3e186ecf6f3ae54fc605efddea3b2b96e&",
    social: [
      { icon: <LinkedInIcon />, link: "#" },
      { icon: <GitHubIcon />, link: "https://github.com/23Jyo" },
    ],
  },
  {
    name: "Tom Sabu",
    role: "Backend Developer",
    avatar: "https://cdn.discordapp.com/attachments/1206089168736751648/1234036379445624852/tomsabu.jpg?ex=662f4570&is=662df3f0&hm=112c023cd39a1fcc6e98c6883601b5dcc8bac3bc6089fab4ec3d45fd80eaf820&",
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
