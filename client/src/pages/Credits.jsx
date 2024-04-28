import React from "react";
import "./style/Credits.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const teamMembers = [
  {
    name: "Jyotsna Sara Abey",
    role: "FrontEnd Developer",
    avatar: "https://avatars.githubusercontent.com/u/124339803?v=4",
    social: [
      { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/jyothsnasaraabey/" },
      { icon: <GitHubIcon />, link: "https://github.com/23Jyo" },
    ],
  },
  {
    name: "Tom Sabu",
    role: "Fullstack Developer",
    avatar: "https://cdn.discordapp.com/attachments/1206089168736751648/1234036379445624852/tomsabu.jpg?ex=662f4570&is=662df3f0&hm=112c023cd39a1fcc6e98c6883601b5dcc8bac3bc6089fab4ec3d45fd80eaf820&",
    social: [
      { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/tomsabu444/" },
      { icon: <GitHubIcon />, link: "https://github.com/tomsabu444" },
    ],
  },
  {
    name: "Sam Mathew",
    role: "UI/UX Designer",
    avatar: "https://cdn.discordapp.com/attachments/1206089168736751648/1234047238452285472/WhatsApp_Image_2024-04-28_at_1.09.17_PM_1.jpeg?ex=662f4f8d&is=662dfe0d&hm=a07c3f2d9977dc6877e1e79ed2c3ed059ec0d0d3c690d02d10e51651afe12daf&",
    social: [
      { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/-sammathew007" },
      { icon: <GitHubIcon />, link: "https://github.com/SamMathew007" },
    ],
  },
  {
    name: "Roshan Jacob",
    role: "Data Science",
    avatar: "https://cdn.discordapp.com/attachments/1206089168736751648/1234045964273188944/WhatsApp_Image_2024-04-28_at_1.06.37_PM.jpeg?ex=662f4e5d&is=662dfcdd&hm=27d9e737aa363775acd097869b100efeff04b7cf24ee242c5ebf3c50c8ec93f1&",
    social: [
      { icon: <LinkedInIcon />, link: "http://linkedin.com/in/roshanjacob-" },
      { icon: <GitHubIcon />, link: "https://github.com/RoshanJacob10" },
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
