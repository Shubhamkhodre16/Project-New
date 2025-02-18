"use client";
import React from "react";
import styles from "../../../styles/RoRBlog.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import brightness from "../../../../public/assets/img/arrow-right.svg";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Footer from "../../footer/Footer";
import aboutimg from "../../../../public/assets/img/rorcode.png";
import DataBackup from "../../../../public/assets/img/DataBackup.gif";

const page = () => {
  const goodChoiceData = [
    {
      title: "E-commerce website platforms",
      subTitle: "Shopify",
      des: "ROR has taken many industries by just rendering the customer service environment. One of them is Shopify, the best e-commerce software platform that facilitates online shops, shipping, payments, and trade. This company started lakhs of businesses in 175 countries with the ROR framework as a base. This aims at e-commerce platforms and prevents common threats of cybersecurity issues.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "Software Development Platforms",
      subTitle: "GitHub",
      des: "ROR is developed to cater to the arising needs and scalability issues of the software. It has a true test automation process. One of the best software GitHub is a global company that uses Git for development and version control. It has 40 million active users and million projects with a web service to host billions of code lines every day.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "Entertainment and Music platforms",
      subTitle: "Netflix",
      des: "Netflix is a social media provider and the globe’s foremost Internet entertainment company. This offer services of collection of films and television programs. It has around 182 million paid subscriptions. Here, ROR web implementation is an easy task, but it still depends on the framework of infrastructure.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "Educational and informative platforms",
      subTitle: "Dribble",
      des: "This is a cherry on top. ROR is famous for its vibrant community, where active members help to enhance the code. As such, Dribbble is a community where designers present their work, opinions, images and shots. It facilitates 4 million visitors per month. Thus people in such communities share experiences, get inspired and seek ideas.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "Hospitality and service platforms",
      subTitle: "Airbnb",
      des: "ROR plays an essential role to convey the correct information. Airbnb is built with such a ROR framework to find a cosy house by sharing their personal information. This idea of Airbnb is to connect travellers with hosts looking to rent their house space to other people. Such a ROR Platform requires high development and less cost.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "HR Websites and networking platforms",
      subTitle: "Fiverr",
      des: "If you are working in any field ROR is a full-stack framework suited for all types. For example, Fiverr is a global online marketplace for people to purchase and sell services by freelancers. These services include writing, graphic design, translation, and video editing. Such a Platform allows people to earn money on their abilities and skills.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "Social media and Book reading platforms",
      subTitle: "Twitter",
      des: "Rails scale dramatically nowadays. Do you know that Twitter's mother was ROR? As we know ROR is very flexible and adaptable. After a few years, the app transformed from a traditional web framework to a broadcasting system. Still, we will credit the success of Twitter to the Ruby on Rails framework.",
      imageSrc: "/assets/img/rorcode.png",
    },
    {
      title: "Crowdfunding and Business platforms",
      subTitle: "Kick starter",
      des: "Startups and SMBs choose ROR due to its reliability, maintenance and ability to compete with larger firms. Kickstarter is another crowdsourcing service on our list that has helped many creative projects to raise money for their ideas. It has a huge community of over 10 million users where the public donates funds for accomplishing their goals.",
      imageSrc: "/assets/img/rorcode.png",
    },
  ];
  return (
    <>
      <Box className={styles.rorContainer}>
        <Grid id="carousel" className={styles.backgroundRor}>
          <Grid>
            <Navbar />
            {/* <Typography
            className={styles.imageTitle}
            fontSize={{
              xs: "23px",
              sm: "22px",
              md: "25px",
              lg: "30px",
              xl: "30px",
            }}
          >
            Case Study
          </Typography> */}
            <Typography
              className={styles.imageSubTitle}
              fontSize={{
                xs: "23px",
                sm: "25px",
                md: "30px",
                lg: "35px",
                xl: "35px",
              }}
            >
              A Online Scholarship Management Platform - fulfilling Educational
              Aspirations of Million Students
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "NovemberPro-Reg",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Author&nbsp;&nbsp;admin{"\u00A0\u00A0"} Posted on&nbsp;&nbsp; June
              24, 2020{"\u00A0\u00A0"} In&nbsp;&nbsp;Design{"\u00A0\u00A0"} No
              Comments
            </Typography>
          </Grid>
        </Grid>
        <Grid className={styles.whatRor}>
          <Typography
            fontSize={{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}
            sx={{
              fontFamily: "NovemberPro",
              fontWeight: "800",
              marginBottom: "10px",
            }}
          >
            What is Ruby on Rails?
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            ROR is open-source software with a model–view–controller (MVC)
            framework written and interpreted in the Ruby programming language.
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            Ruby on rails was originally invented by David Heinemeier Hansson in
            2004.
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            This is a combination of HTML, JavaScript and CSS.
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            Ruby is used to building web pages, web applications and providing
            web default services.
          </Typography>
        </Grid>

        <Grid className={styles.howRor}>
          <Typography
            fontSize={{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}
            sx={{
              fontFamily: "NovemberPro",
              fontWeight: "800",
              marginBottom: "10px",
            }}
          >
            How Ruby on rails (ROR) is the best choice to build your project in
            2021
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            In most cases, our clients often take an interest in technologies we
            set to use in their projects.
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            Nevertheless, we must assert that it's your right to choose the best
            option among others. The 2021 Index of TIOBE titled Ruby as the 13th
            most established programming language based on SERP results. In
            other words, despite the severe popularity of other web platforms,
            Rails is something that didn't lose its followers and is now the
            most popular server-side web framework.
          </Typography>
          <Typography
            fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
            sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
          >
            So how is it a good choice for your project? The answer to your
            curiosity lies in the next section of the beneficial list about ROR,
            which is landing next.
          </Typography>
          <Grid className={styles.codeImg}>
            <Image
              style={{ borderRadius: "10px" }}
              src={aboutimg}
              alt="White Wave"
              width={1000}
              height={400}
            />
          </Grid>
          <Grid className={styles.howRorCard}>
            <Typography
              fontSize={{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}
              sx={{
                fontFamily: "NovemberPro",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              How ROR is a good choice for any project?
            </Typography>
            <Typography
              fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
              sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
            >
              Ruby on Rail is still in the game. No matter how many websites
              will publish or applications may develop, even so, ROR will never
              lose its fame.
            </Typography>
            <Typography
              fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
              sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
            >
              By the means of different platforms, ROR has made our life easy,
              quicker and hassle-free. Let's leap into the working of
              prestigious applications built by ROR. This will make it clear
              that ROR is the best choice for your upcoming project.
            </Typography>
          </Grid>
          <Grid
            container
            spacing={10}
            padding={{ xs: "0%", sm: "0%", md: "5%", lg: "7%" }}
            className={styles.cardContainer}
          >
            {/* Left Card */}
            {goodChoiceData?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                className={styles.cards}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center", // Ensure all content is centered
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Image
                    style={{ width: "20%" }}
                    src={DataBackup}
                    alt=""
                    height={40}
                    width={40}
                  />
                </Box>

                <Typography
                  fontSize={{ lg: "20px", md: "20px", sm: "26px", xs: "22px" }}
                  sx={{
                    fontFamily: "NovemberPro",
                    fontWeight: "800",
                    textAlign: "center", // Center text as well
                  }}
                >
                  {item?.title}
                </Typography>

                <Typography
                  fontSize={{ lg: "22px", md: "22px", sm: "20px", xs: "18px" }}
                  sx={{
                    fontFamily: "NovemberPro",
                    padding: "1% 15%",
                    fontWeight: "bold",
                    color: "#650509",
                    textAlign: "center",
                  }}
                >
                  {item?.subTitle}
                </Typography>

                <Typography
                  fontSize={{ lg: "16px", md: "16px", sm: "20px", xs: "18px" }}
                  sx={{
                    fontFamily: "NovemberPro-Reg",
                    padding: "1% 15%",
                    textAlign: "center",
                  }}
                >
                  {item?.des}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid className={styles.conclusionRor}>
            <Typography
              fontSize={{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}
              sx={{
                fontFamily: "NovemberPro",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              Conclusion
            </Typography>
            <Typography
              fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
              sx={{ fontFamily: "NovemberPro-Reg", padding: "1% 15%" }}
            >
              Ruby on rails is constructed on MVC architecture and holds varied
              advantages. Without any doubt, it is the most important technology
              and best web application framework for various companies and
              communities. This information is all your leading manual for your
              primary engagement with ROR. Hopefully, we’ve answered all of your
              curiosity and questions about Ruby on Rails.
            </Typography>
            <Typography
              fontSize={{ lg: "20px", md: "20px ", sm: "20px", xs: "18px" }}
              sx={{ fontFamily: "NovemberPro-Reg", padding: "0% 15%" }}
            >
              An eye on Ruby on Rails development company? Hold your takeaway in
              this and begin with a new innovative strategy of Ruby on Rails.
              Believe us, we use the best Ruby on Rails advancement practices
              and technologies to create outputs that function perfectly. Feel
              free to ask us any of your concerns.
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default page;
