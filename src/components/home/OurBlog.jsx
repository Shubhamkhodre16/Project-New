import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import Grid from "@mui/material/Grid2"; // Import the CSS module
// import { url } from 'inspector';

const OurBlog = () => {
  const blogContent = [
    {
      image: "./assets/img/start-up-slide1.webp",
      content:
        "A Remarkable football platform delivering in-depth soccer details",
    },
    {
      image: "./assets/img/start-up-slide6.webp",
      content: "A serviceable platform providing awareness of digital payments",
    },
    {
      image: "./assets/img/start-up-slide3.webp",
      content: "Online Scholarship",
    },
    {
      image: "./assets/img/start-up-slide4.webp",
      content: "A full-fledged freelance platform NPO",
    },
  ];

  return (
    <Box className={styles.blogContainer}>
      <Grid className={styles.blogContainer1}>
        <Typography className={styles.blogHeader}
          sx={{fontSize:{
            xs:"20px",sm:"25px", lg:"30px"
          }}}
        >   
          Our Blogs & Case Studies
        </Typography>
        {/* <Typography className={styles.header1} >Case Study</Typography> */}
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {blogContent?.map((item, index) => (
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
            key={index}
            className={styles.gridItem}
          >
            <Card className={styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={styles.cardImage}
                  image={item.image}
                  alt="Blog Image"
                />
                <Box className={styles.overlay} />
                <Box className={styles.contentBox}>
                  <Typography className={styles.title1}>
                    {item.content}
                  </Typography>
                  <Typography className={styles.readMore}>Read More</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurBlog;
