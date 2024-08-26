/* eslint-disable no-unused-vars */
import React from "react";
import { TeamSection, AboutContainer } from "./AboutUsStyles";
import { Typography, Grid, Box, Paper } from "@mui/material";

const teamMembers = [
  {
    name: "M Sheheryar",
    role: "Founder & CEO",
    imgSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQEMqIiYY-csIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652331732461?e=2147483647&v=beta&t=XccZTxFKYLoJLxQA0bZ5VjNxFVth5lP3P9yKFPjzJDo",
    bio: "Sheheryar is the visionary behind St Cars.",
  },
  {
    name: "Walther Schwarzacher",
    role: "CTO",
    imgSrc:
      "https://lums.edu.pk/sites/default/files/styles/faculty_image/public/walter.jpg",
    bio: "Walther leads our technology initiatives.",
  },
  {
    name: "Bob Johnson",
    role: "CFO",
    imgSrc:
      "https://getuperica.com/wp-content/uploads/sites/54/2019/07/15628566673302-e1562856821344.jpg?strip=all&quality=80&w=1462&crop=0,0,100,1215px",
    bio: "Bob is responsible for financial management.",
  },
];

const MeetTheTeam = () => {
  return (
    <TeamSection>
      <AboutContainer>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Meet The Team
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {teamMembers.map((member) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={member.name}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: 2,
                  textAlign: "center",
                  maxWidth: 300,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    marginBottom: "16px",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </AboutContainer>
    </TeamSection>
  );
};

export default MeetTheTeam;
