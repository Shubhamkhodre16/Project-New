"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/About.module.css";
import Navbar from "../navbar/Navbar";
import Grid from "@mui/material/Grid2";
import aboutimg from "../../../public/assets/img/about-img.jpg";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import Footer from "../footer/page";
import startup from "../../../public/assets/img/about-img.jpg"

const ImagePart = () => {
  const coreValues = [
    {
      title: "Everlasting Relationship",
      desc: "We don't believe in building a client list, but rather a community of partners who have invested in each other's success.",
    },
    {
      title: "Craziness at Work",
      desc: "The fire to go the extra mile, the zeal to be better than we were yesterday, and the desire to win—all point to one thing: excellence.",
    },
    {
      title: "Innovation and Creativity",
      desc: "The ability to think outside the box consistently, even when it borders on the bizarre, is how the world evolves and innovates.",
    },
  ];

  const coreStats = [
    { value: "2+", desc: "Years of experience in software development" },
    { value: "50+", desc: "Software engineers and technical staff" },
    { value: "100+", desc: "Software designed, developed, and deployed" },
    { value: "100%", desc: "Customer satisfaction" },
  ];

  const uspValues = [
    {
      title: "Proficiency",
      description:
        "We hold great experience and knowledge of working with the world's top brands and leaders.",
      // image: "./assets/img/Proficiency.gif",
    },
    {
      title: "Standard process-oriented",
      description:
        "We use high-end processes for each task while keeping an overall view of the projects in mind.",
      // image: "./assets/img/StandardProcess.gif",
    },
    {
      title: "No unexpected Results",
      description:
        "We maintain transparency in our work to keep unexpected outcomes at bay.",
      // image: "./assets/img/NoUnexpectedResults.gif",
    },
    {
      title: "Mindfulness",
      description:
        "We dedicate ourselves to working for your company in order to ensure the smooth completion of projects while avoiding any unexpected hazards.",
      // image: "./assets/img/Mindfulness.gif",
    },
    {
      title: "Committed support",
      description:
        "We are ambitious about our industry and enjoy what we do. We provide regular updates, phone calls, and product demonstrations to ensure our clients' satisfaction.",
      // image: "./assets/img/CommittedSupport.gif",
    },
    {
      title: "Customer satisfaction",
      description:
        "Customer satisfaction is our foremost priority, which contributes to continuous improvement for maintaining and improving client satisfaction.",
      // image: "./assets/img/CustomerSatisfaction.gif",
    },
  ];

  return (
    <>
      <Box>
        <Grid id="carousel" className={styles.background}>
          <Navbar />
          <Typography className={styles.about}>About us</Typography>
        </Grid>
        {/* Achiving Section  */}
        <Grid className={styles.achieving}>
          <Grid className={styles.container}>
            <Grid container className={styles.titledata}>
              <Typography  fontSize={{xs:"20px", sm:"22px", md:"22px", lg:"22px", xl:"35px"}} className={styles.mainhead}>
                Vision achieving Software, App and web Development Company
              </Typography>
              <Typography className={styles.des}>
                Pledge to outshine the businesses with customer-winning
                technological and Software development.
                <br />
                <br />
                InfoKoders technologies is a partner of innovation and a ray of
                hope for diverse world’s leading enterprises, SME’S and
                technology channellers. We bring together a team of passionate
                minds whose DNA echoes to bring victory to your businesses with
                authentic software, apps, and Software development solutions.
              </Typography>
            </Grid>
            <Grid className={styles.image}>
              <Image src={aboutimg} alt="White Wave" width={468} height={100} />
            </Grid>
          </Grid>
        </Grid>

        {/* Who we section */}

        <Grid className={styles.whowe}>
          <Grid className={styles.whoContainer}>
            <Grid className={styles.whoweLeft}>
              <Typography className={styles.whoweHeading}>
                Who we are and what we do
              </Typography>
              <Typography>
                InfoKoders technologies is an exclusive digital transformation
                studio that provides remarkable solutions across the digital
                value chain. We take a spotlight in providing out-of-the-box
                services in Software development (Ruby on Rails, ReactJS,
                NodeJS, AngularJS), full-stack and web development, AWS Cloud
                solutions, Heroku Cloud solutions, Mobile app development, and
                many more.
              </Typography>
            </Grid>
            <Grid className={styles.whoweRight}>
              <Typography className={styles.whoweHeading}>
                An unbelievable story of 2+ years
              </Typography>
              <Typography>
                {" "}
                * Since day one we measure our success with our client success,
                have faith in our kick-butt skills, and swear by the computer
                code. Shaping out an exclusive digital solution is not our work,
                it’s our duty. Within a short period, we have successfully
                delivered 50+ projects covering diverse technologies and web
                part and eventually became prominent in the Software development
                realm
              </Typography>
              <Typography>
                {" "}
                * Our ultimate focus is on client satisfaction which has been
                the key differentiator for our company. Our inquisitive nature
                and creativity ensure that we never become stagnant in our
                approach to dealing with new challenges.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Core value Section  */}

        <Grid className={styles.coreMain}>
          <Grid className={styles.coreContainer}>
            <Grid className={styles.coreQuote}>
              <Typography className={styles.coreTitle}>
                Our Core Values
              </Typography>
              <Typography className={styles.coreDescription}>
                We are an enthusiastic team of nerd minds, pro coders,
                technocrats, and incredibly creative beings using our knowledge
                and experience to create user-centric products
              </Typography>
            </Grid>
            <Grid container spacing={4} className={styles.coresubcont1}>
              {coreValues?.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 12, lg: 4 }}
                  className={styles.coreBox}
                  key={index}
                >
                  <Typography>{item?.title}</Typography>
                  <Typography>{item?.desc}</Typography>
                </Grid>
              ))}
            </Grid>
            <Grid>
              <Typography>Number that roars our capabilities</Typography>
            </Grid>
            <Grid container spacing={3} className={styles.coresubcont}>
              {coreStats?.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 12, lg: 3 }}
                  className={styles.coreBox1}
                  key={index}
                >
                  <Typography>{item?.value}</Typography>
                  <Typography>{item?.desc}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Our Usps  */}

        <Grid className={styles.uspMain}>
          <Grid className={styles.uspContainer}>
            <Grid className={styles.coreQuote}>
              <Typography className={styles.coreTitle}>
                Our Core Values
              </Typography>
              <Typography className={styles.coreDescription}>
                We are an enthusiastic team of nerd minds, pro coders,
                technocrats, and incredibly creative beings using our knowledge
                and experience to create user-centric products
              </Typography>
            </Grid>
            <Grid container spacing={4} className={styles.coresubcont}>
              {uspValues?.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 12, lg: 4 }}
                  key={index}
                  className={styles.uspBox}
                >
                  <CardMedia
                    sx={{ width: "80px", height: "80px", marginBottom: "10px" }}
                    component="img"
                    image="./assets/img/DataBackup.gif"
                  />

                  <Typography>{item?.title}</Typography>
                  <Typography>{item?.description}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Our Vision and Mission  */}
        <Grid className={styles.whowe}>
          <Grid container className={styles.visionMissonContainer}>
            <Grid size= {{ xs: 12, sm: 12,  lg: 6 }} className={styles.visionLeft}>
              <Typography>Our Mission & Vision</Typography>
              <Typography>Mission</Typography>
              <Typography>
                To disrupt the outdated processes of tech or nontech business
                with innovative and modern solutions.
              </Typography>

              <Typography>Vision</Typography>
              <Typography>
                To keep up with the latest and most promising technology that
                empowers and influences everyone and also allows us to steadily
                develop our inner selves.
              </Typography>
            </Grid>
            <Grid className={styles.visionRight}>
             
            <Image src={startup} alt="logo" width={468} height={489}  />

            </Grid>
          </Grid>
        </Grid>

        {/* Our Footer  */}

        <Footer />
      </Box>
    </>
  );
};

export default ImagePart;
