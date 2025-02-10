"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Navbar from "../navbar/Navbar";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/CaseStudy.module.css";
import logo from "../../../public/assets/img/about-img.jpg";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Footer from "../footer/page";
import Link from "next/link";

const CaseStudy = () => {
  const TABS = ["Services", "Industries", "Technologies"];

  const CARD_DATA = {
    Services: [
      {
        title: "Online Schlorship",
        description:
          "A Minneapolis-based start-up wished to eradicate the student’s financial struggle in an educational realm by taking the advantage of new-age technologies. He narrated his entire vision of building an online scholarship management platform for revolutionizing the process school is paid, helping deserving students, and effective management of award programs.",
        image: "./assets/img/start-up-slide1.webp",
      },
      {
        title: "A serviceable platform providing awareness of digital payments",
        description:
          "Digital payments are accelerating the entrepreneur’s profitability by facilitating them to carry out financial transactions with customers, suppliers, and the governments in a more effective,safer, and cheaper way.",
        image: "./assets/img/start-up-slide3.webp",
      },
      {
        title: "A full fledged freelance platform",
        description: "In this digital age, millions of specialists worldwide diverted from the 9 to 5 hectic work culture to freelancing/ flexible remote work for smooth maintenance of work-life balance. A tremendous number of enterprises, small start-ups as well as big companies are leveraging this smart opportunity of getting associated with freelancers in order to get their work done quickly and affordably.",
        image: "./assets/img/start-up-slide1.webp",
      },
      {
        title: "World’s Popular Biodiversity Assessment tool",
        description: "A UK based Client came up with the innovative mission of developin an incredible Biodiversity data collection platform for instructing the decision-makers about geographic information of global biodiversity.",
        image: "./assets/img/start-up-slide3.webp",
      },
      {
        title: "A Remarkable football platform",
        description: "A UK-based Client presented his plan to develop a visually consistent, easy navigate, and engaging football portal that delivers A-Z insights of football matches that are going to take place around the globe.The main objective of the client was to provide an online convenience to football lovers, through which they can easily learn about the complete live or past match stats without missing any details.",
        image: "./assets/img/start-up-slide3.webp",
      },
    ],
    Containern: [
      {
        title: "Docker",
        description: "Containerization with Docker for scalable applications.",
        image: "./assets/img/start-up-slide3.webp",
      },
    ],
    Technologies: [
      {
        title: "React",
        description: "Build modern UI with React and Next.js.",
        image: "./assets/img/start-up-slide3.webp",
      },
      {
        title: "Node.js",
        description: "Backend services with Node.js and Express.",
        image: "./assets/img/start-up-slide3.webp",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(TABS[0]);
  return (
    <>
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.background}>
          <Navbar />
          <Typography
            fontSize={{
              xs: "20px",
              sm: "22px",
              md: "22px",
              lg: "22px",
              xl: "35px",
            }}
            className={styles.case}
          >
            Case Studies
          </Typography>
        </Grid>
        {/* Studies  */}
        <Grid className={styles.studiesMain}>
          <Grid className={styles.container}>
            {/* Tabs */}
            <Grid container className={styles.tabContainer}>
              {TABS.map((tab) => (
                <Typography
                  key={tab}
                  className={clsx(styles.tabOption, {
                    [styles.activeTab]: activeTab === tab,
                  })}
                  onClick={() => setActiveTab(tab)}
                  style={{ cursor: "pointer", marginRight: "15px" }}
                >
                  {tab}
                </Typography>
              ))}
            </Grid>

            {/* Cards */}
            <Grid container spacing={5} className={styles.studyCards}>
              {CARD_DATA[activeTab].map((card, index) => (
                <Grid
                  item
                  key={index}
                  spacing={5}
                  size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                  className={styles.cardBox}
                >
                  <Card sx={{ maxWidth: 545, width: "100%" }}>
                    <CardMedia
                      component="div"
                      sx={{
                        height: 140,
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                      title={card.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {card.title.length > 20
                          ? `${card.title.slice(0, 20)}...`
                          : card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {card.description.length > 70
                          ? `${card.description.slice(0, 70)}...`
                          : card.description}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Link href="/caseStudies/schlorship" passHref>
                        <Button variant="contained" size="small">
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
        <Footer />
      </Box>
    </>
  );
};

export default CaseStudy;
