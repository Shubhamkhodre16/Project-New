"use client";
import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import styles from "../../styles/About.module.css";
import Navbar from "../navbar/Navbar";
import aboutimg from "../../../public/assets/img/about-img.jpg";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import Footer from "../footer/page";
import startup from "../../../public/assets/img/about-img.jpg"
import AdjustIcon from '@mui/icons-material/Adjust';
import vissionandmission from "../../../public/assets/img/vissionandmission.png"
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
    { value: "2+", desc: "Years of experience in Software development and technologies" },
    { value: "50+", desc: "Software engineers and technical staff" },
    { value: "100+", desc: "Software designed, developed, and deployed" },
    { value: "100%", desc: "Customer satisfaction" },
  ];

  const uspValues = [
    {
      title: "Proficiency",
      description:
        "We hold great experience and knowledge of working with the world's top brands and leaders.",
       image: "./assets/img/Proficiency.gif",
    },
    {
      title: "Standard process-oriented",
      description:
        "We use high-end processes for each task while keeping an overall view of the projects in mind.",
      image: "./assets/img/StandardProcess.gif",
    },
    {
      title: "No unexpected Results",
      description:
        "We maintain transparency in our work to keep unexpected outcomes at bay.",
       image: "./assets/img/barChart.gif",
    },
    {
      title: "Mindfulness",
      description:
        "We dedicate ourselves to working for your company in order to ensure the smooth completion of projects while avoiding any unexpected hazards.",
       image: "./assets/img/customers.gif",
    },
    {
      title: "Committed support",
      description:
        "We are ambitious about our industry and enjoy what we do. We provide regular updates, phone calls, and product demonstrations to ensure our clients' satisfaction.",
       image: "./assets/img/dataprotections.gif",
    },
    {
      title: "Customer satisfaction",
      description:
        "Customer satisfaction is our foremost priority, which contributes to continuous improvement for maintaining and improving client satisfaction.",
       image: "./assets/img/teammember.gif",
    },
  ];

  return (
    <>
      <Box>
        <Grid2 id="carousel" className={styles.background}>
          <Navbar />
          <Typography className={styles.about}>About us</Typography>
        </Grid2>
        {/* Achiving Section  */}
        <Grid2 className={styles.achieving}>
          <Grid2 className={styles.container}>
            <Grid2 container className={styles.titledata}>
              <Typography className={styles.mainhead}variant="h2" >
                Vision achieving Software, App and web Development Company
              </Typography>
              <Typography className={styles.des}>
                Pledge to outshine the businesses with customer-winning
                technological and Software development.
                </Typography>
                <br />
                <br />
                <Typography className={styles.dess}>
                InfoKoders technologies is a partner of innovation and a ray of
                hope for diverse world’s leading enterprises, SME’S and
                technology channellers. We bring together a team of passionate
                minds whose DNA echoes to bring victory to your businesses with
                authentic software, apps, and Software development solutions.
              </Typography>
            </Grid2>
            <Grid2 className={styles.image}>
              <Image src={aboutimg} alt="White Wave" width={500} height={100} />
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Who we section */}

        <Grid2 size={{xs:12,sm:12,md:4,lg:3}} className={styles.whowe}>
          <Grid2 className={styles.whoContainer}>
            <Grid2 className={styles.whoweLeft}>
              <Typography className={styles.whoweHeading} variant="h2">
                Who we are and what we do
              </Typography>
              <Typography className={styles.subheading} variant="body1">
                InfoKoders technologies is an exclusive digital transformation
                studio that provides remarkable solutions across the digital
                value chain. We take a spotlight in providing out-of-the-box
                services in Software development (Ruby on Rails, ReactJS,
                NodeJS, AngularJS), full-stack and web development, AWS Cloud
                solutions, Heroku Cloud solutions, Mobile app development, and
                many more.
              </Typography>
            </Grid2>
            <Grid2  className={styles.whoweRight}>
              <Typography className={styles.whoweHeading}>
                An unbelievable story of 2+ years
              </Typography>
              <Typography className={styles.subheading} variant="body1">
                {" "}
                <AdjustIcon className={styles.adjustIcon}/> Since day one we measure our success with our client success,
                have faith in our kick-butt skills, and swear by the computer
                code. Shaping out an exclusive digital solution is not our work,
                it’s our duty. Within a short period, we have successfully
                delivered 50+ projects covering diverse technologies and web
                part and eventually became prominent in the Software development
                realm
              </Typography>
              <Typography className={styles.subheading} variant="body1">
                {" "}
                <AdjustIcon className={styles.adjustIcon}/> Our ultimate focus is on client satisfaction which has been
                the key differentiator for our company. Our inquisitive nature
                and creativity ensure that we never become stagnant in our
                approach to dealing with new challenges.
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Core value Section  */}

        <Grid2 className={styles.coreMain}>
          <Grid2 className={styles.coreContainer}>
            <Grid2 className={styles.coreQuote}>
              <Typography className={styles.coreTitle}>
               <span className={styles.our} > Our</span>  Core Values
              </Typography>
              <Typography className={styles.coreDescription}>
                We are an enthusiastic team of nerd minds, pro coders,
                technocrats, and incredibly creative beings using our knowledge
                and experience to create user-centric products
              </Typography>
            </Grid2>
            <Grid2 container spacing={3} className={styles.coresubcont1}>
              {coreValues?.map((item, index) => (
                <Grid2
                  size={{ xs: 12, sm: 12, lg: 4 }}
                  className={styles.coreBox}
                  key={index}
                >
                  <Typography className={styles.coreBoxTitle}>{item?.title}</Typography>
                  <Typography className={styles.coreBoxDesc} >{item?.desc}</Typography>
                </Grid2>
              ))}
            </Grid2>
            <Grid2>
              <Typography variant="h2"  className={styles.capabilities}>Number that roars our capabilities</Typography>
            </Grid2>
            <Grid2 container spacing={3} className={styles.coresubcont}>
              {coreStats?.map((item, index) => (
                <Grid2
                  size={{ xs: 12, sm: 12, lg: 3 }}
                  className={styles.coreBox1}
                  key={index}
                >
                  <Typography variant="h2" className={styles.coreBox1Value}>{item?.value}</Typography>
                  <Typography  className={styles.coreBox1Desc} >{item?.desc}</Typography>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Our Usps  */}
    
        <Grid2 className={styles.uspMain}>
          <Grid2 className={styles.uspContainer}>
            <Grid2 className={styles.coreQuote}>
              <Typography className={styles.coreTitle}>
                Our Core Values
              </Typography>
              <Typography className={styles.coreDescription}>
                We are an enthusiastic team of nerd minds, pro coders,
                technocrats, and incredibly creative beings using our knowledge
                and experience to create user-centric products
              </Typography>
            </Grid2>
            <Grid2 container spacing={4} className={styles.coresubcont}>
              {uspValues?.map((item, index) => (
                <Grid2
                  size={{ xs: 12, sm: 12, lg: 4 }}
                  key={index}
                  className={styles.uspBox}
                >
                  <CardMedia
                    sx={{ width: "80px", height: "80px", marginBottom: "10px" }}
                    component="img"
                    image={item?.image}
                  />

                  <Typography className={styles.uspBoxTitle} variant="h5">{item?.title}</Typography>
                  <Typography className={styles.uspBoxDesc} >{item?.description}</Typography>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Our Vision and Mission  */}
        <Grid2 className={styles.whowe}>
          <Grid2 container className={styles.visionMissonContainer}>
            <Grid2 size= {{ xs: 12, sm: 12, lg: 6 }} className={styles.visionLeft}>
              <Typography className={styles.visionleftTitle} variant="h2" >Our Mission & Vision</Typography>
              <Typography className={styles.visionLeftSubTitle} >Mission</Typography>
              <Typography className={styles.visionDesc}>
              <AdjustIcon className={styles.adjustIcon}/> To disrupt the outdated processes of tech or nontech business
                with innovative and modern solutions.
              </Typography>

              <Typography className={styles.visionLeftSubTitle}>Vision</Typography>
              <Typography className={styles.visionDesc}>
              <AdjustIcon className={styles.adjustIcon}/>To keep up with the latest and most promising technology that
                empowers and influences everyone and also allows us to steadily
                develop our inner selves.
              </Typography>
            </Grid2>
            <Grid2 className={styles.visionRight}>
             
            <Image src={vissionandmission} alt="logo" width={400} height={500}  />

            </Grid2>
          </Grid2>
        </Grid2>

        {/* Our Footer  */}

        <Footer />
      </Box>
    </>
  );
};

export default ImagePart;
