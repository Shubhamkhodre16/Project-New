"use client";
import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

import Grid from "@mui/material/Grid2"; // Import the CSS module

const OurCaseStudies = () => {
  const blogContent = [
    {
      image: "./assets/img/homeBlog.png",
      content: "What is Ruby on Rail (ROR)",
      path: "/studies",
    },
    {
      image: "./assets/img/reactNative.png",
      content: "How React Native can be a game-changer",
      path: "/studies",
    },
  ];

  return (
    <Box className={styles.blogContainer}>
      <Grid className={styles.blogContainer1}>
        <Typography
          className={styles.blogHeader}
          sx={{
            fontSize: {
              xs: "20px",
              sm: "25px",
              lg: "30px",
            },
          }}
        >
          Our Case Studies
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {blogContent?.map((item, index) => (
          <Grid
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
                  <Link href={item?.path} passHref>
                    <Typography className={styles.readMore}>
                      Read More
                    </Typography>
                  </Link>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurCaseStudies;
