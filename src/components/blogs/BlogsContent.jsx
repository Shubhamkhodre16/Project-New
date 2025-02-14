"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Navbar from "../navbar/Navbar";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/CaseStudy.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Footer from "../footer/Footer";
import Link from "next/link";

const BlogsContent = () => {
  const blogsData = [
    {
      title:
        "What is Ruby on Rail (ROR) and why it is the best choice for your project 2021",
      description:
        "Ruby on Rail is still in the game. No matter how many websites will publish or applications may develop, even so, ROR will never lose its fame.",
      image: "./assets/img/homeBlog.png",
    },
    {
      title: "How React Native can be a game-changer to your business?",
      description:
        "Put effort in making one best code and apply it anywhere”- this wise mindset is being applied in every goal-centric business since Facebook was made out from React Native one of the leading open-source networks from 2015.",
      image: "./assets/img/reactNative.png",
    },
  ];
  return (
    <>
      <Box>
        <Grid id="carousel" className={styles.blogBackground}>
          <Navbar />
          <Typography
            textAlign={{ xs: "center", sm: "center", md: "left" }}
            fontSize={{ xs: "35px", md: "50px" }}
            className={styles.case}
          >
            Blogs
          </Typography>
        </Grid>
        <Grid 
        sx={{marginBottom:"100px"}}
        className={styles.studiesMain}>
          <Grid className={styles.container}>
            <Grid container spacing={5} className={styles.studyCards}>
              {blogsData.map((card, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                  className={styles.cardBox}
                >
                  <Card
                    className={styles.studyCards1}
                    sx={{
                      maxWidth: 545,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: 150,
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease-in-out",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                      title={card.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography className={styles.title} gutterBottom>
                        {card.title.length > 50
                          ? `${card.title.slice(0, 50)}...`
                          : card.title}
                      </Typography>
                      <Typography className={styles.CaseStudySubTitle}>
                        {card.description.length > 170
                          ? `${card.description.slice(0, 170)}...`
                          : card.description}
                      </Typography>
                    </CardContent>

                    <CardActions
                      sx={{ paddingBottom: "25px", paddingLeft: "30px" }}
                    >
                      <Link href="/studies/schlorship" passHref>
                        <Button
                          sx={{
                            color: "#fff",
                            backgroundColor: "#333",
                            textTransform: "capitalize",
                          }}
                          variant="contained"
                          size="medium"
                        >
                          Read More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Footer/>
      </Box>
    </>
  );
};

export default BlogsContent;
