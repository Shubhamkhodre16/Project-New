"use client";
import React from "react";
import { Typography, Box, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import aboutbanner from "../../../public/assets/img/ror-banner.png";
import CardSection from "../../app/career/CardSection";
import Card from "@mui/material/Card";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import DataBackup from "../../../public/assets/img/DataBackup.gif";
import customers from "../../../public/assets/img/customers.gif";
import globle from "../../../public/assets/img/globle.gif";
import teammember from "../../../public/assets/img/teammember.gif";
import CardMedia from "@mui/material/CardMedia";
import dataprotect from "../../../public/assets/img/dataprotections.gif";
import agileDevelop from "../../../public/assets/img/agiledevelopment.gif";
import customersupport from "../../../public/assets/img/customersupport.gif";
import Industry from "./Industry";
import styles from "../../styles/HomeContent.module.css";
const HomeContent = () => {
  return (
    <>
      {/* Who We Are  section */}

      <Box>
        <Grid2
          sx={{
            backgroundImage: "url(assets/img/bg-shape1-home5.png)",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            paddingTop: { sm: "20px", xs: "20px" },
            marginY: "50px",
          }}
        >
          <Grid2 className={styles.whoweContainer}>
            <Grid2 container spacing={5}>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, xl: 6 }}>
                <Image
                  src={aboutbanner}
                  alt="About Us"
                  width={700}
                  height={550}
                  // layout="intrinsic"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, xl: 6 }}>
                <Typography
                  className={styles.whoTitle}
                  sx={{
                    fontSize: {
                      lg: "40px",
                      md: "25px",
                      sm: "20px",
                      xs: "18px",
                    },
                  }}
                >
                  Who we are
                </Typography>
                <Typography
                  className={styles.whoSubTitle}
                  sx={{
                    fontSize: {
                      lg: "35px",
                      md: "22px",
                      sm: "18px",
                      xs: "15px",
                    },
                  }}
                >
                  {" "}
                  Recognized as the Best Ruby on Rails and Product Engineering
                  Company
                </Typography>
                <Typography className={styles.whoDes}>
                  {" "}
                  As today’s competitive world stepping into digital approaches,
                  and digital transformation becoming more than a buzzword, it’s
                  become essential than ever for your business to collaborate
                  with the top software application development company that
                  serves valuable tech development services and solutions at an
                  economical budget. This is where InfoKoders technologies comes
                  in!
                </Typography>
                <Typography className={styles.whoDes}>
                  InfoKoders technologies is the unmatched destination to
                  embrace exceptional Software development and business-centric
                  technological solutions. Whether you're a startup, SMB, or a
                  large corporation, we can help you plan your digital path with
                  expert consultancy, services, and solutions. Make the most
                  from our long-standing expertise and imagine the endless
                  digital possibilities.
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>

      {/* //How We Drive Business? */}

      <Grid2 container className={styles.driveContent}>
        <Grid2 sx={{ textAlign: "center", padding: "0 10%" }}>
          <Typography className={styles.driveHeader} variant="h5">
            How We Drive Business?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { lg: "20px", md: "18px", sm: "18px", xs: "15px" },
            }}
            className={styles.drivecontent}
          >
            We bring the right scope of services that drives impact by unlocking
            next-gen analytics and effectively transform your business
            operations.
          </Typography>
        </Grid2>
      </Grid2>
      {/* card section */}
      <CardSection />
      {/*Our key Morals that draw your trust*/}
      <Grid2
        className={styles.keybackground}
        sx={{
          backgroundImage: "url(assets/img/bg-shape1-home5.png)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          marginTop: "40px",
        }}
      >
        <Grid2
          container
          spacing={3}
          className={styles.keyMoaral}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: { lg: "40px", md: "30px", sm: "0px", xs: "6px" },
          }}
        >
          <Grid2
            size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
            sx={{ marginTop: "70px" }}
          >
            <Typography
              // variant="h4"
              sx={{
                // fontWeight: "bold",
                fontSize: { lg: "30px", md: "30px", sm: "30px", xs: "20px" },
                marginBottom: { sm: "10px", xs: "10px" },
                textAlign: { lg: "left", sm: "center", xs: "center" },
              }}
              className={styles.keyMoaralHead}
            >
              Our key Morals that draw your trust
            </Typography>
            <Typography
              className={styles.keyMoaralDes}
              variant="body1"
              sx={{
                lineHeight: "1.5",
                fontSize: { lg: "18px", md: "16px", sm: "15px", xs: "14px" },
                marginBottom: "20px",
                textAlign: { lg: "left", sm: "center", xs: "center" },
              }}
            >
              We emphasize on customer-centric model while delivering
              applications, which ultimately helps our clients achieve success
              and gain a competitive advantage over others.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                padding: "20px",
                marginX: { sm: "10px", xs: "8px" },
                marginBottom: "10px",
              }}
            >
              <Image src={DataBackup} alt="" height={80} width={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginY: 5,
                  transform: "rotate(90deg)",
                }}
              />
              <Box className={styles.fontSty}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    {" "}
                    <li>30 +</li>
                  </Box>
                  <li>Technology </li>
                  <li>Solutions</li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                paddingY: "20px",
                marginBottom: "10px",
                marginX: { sm: "10px", xs: "8px" },
              }}
            >
              <Image src={customers} alt="" width={80} height={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginY: 5,
                  transform: "rotate(90deg)",
                }}
              />
              <Box className={styles.fontSty}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    {" "}
                    <li>200 +</li>
                  </Box>
                  <li>Customers</li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                padding: "20px",
                marginX: { sm: "10px", xs: "8px" },
                marginBottom: "10px",
              }}
            >
              <Image src={globle} alt="" width={80} height={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginTop: "38px",
                  transform: "rotate(90deg)",
                }}
              />
              <Box className={styles.fontSty}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    <li>100 %</li>
                  </Box>
                  <li>Customer</li>
                  <li> satisfaction</li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                padding: "20px",
                marginBottom: "10px",
                marginX: { sm: "10px", xs: "8px" },
              }}
            >
              <Image src={teammember} alt="" width={80} height={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginY: 5,
                  transform: "rotate(90deg)",
                }}
              />
              <Box className={styles.fontSty}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    <li>100 +</li>
                  </Box>
                  <Box>
                    <li>Team</li>
                    <li> Members</li>
                  </Box>
                </ul>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            sx={{ marginTop: "60px" }}
          >
            <Box>
              {/* <LordIcon  src={technologyjson} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/> */}
              <Card
                sx={{
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  display: "flex",
                  minHeight: "440px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingY: "32px",
                  marginBottom: "30px",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                }}
              >
                <Link href="">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",

                      "&:hover": {
                        backgroundColor: "white !important",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{ width: "30%" }}
                      component="img"
                      height="60px"
                      width="80px"
                      image="./assets/img/DataBackup.gif"
                    />

                    {/* <lord-icon  src={databackups} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/>  */}
                  </Box>
                </Link>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className={styles.card1Header}
                    sx={{
                      fontSize: {
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  >
                    Data Backups
                  </Typography>
                  <Typography className={styles.card1SubHeader} variant="body2">
                    The first imperative step in our product development process
                    is gathering requirements and analyzing it.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingY: "32px",
                  minHeight: "440px",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                }}
              >
                <Link href="">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "30px",
                    }}
                  >
                    <CardMedia
                      sx={{ width: "30%" }}
                      component="img"
                      height="60px"
                      image="/assets/img/dataprotections.gif"
                      alt="backup"
                    />
                  </Box>
                </Link>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className={styles.card1Header}
                    sx={{
                      fontSize: {
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  >
                    Data protection
                  </Typography>
                  <Typography className={styles.card1SubHeader} variant="body2">
                    The first imperative step in our product development process
                    is gathering requirements and analyzing it.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            sx={{ marginTop: "60px" }}
          >
            <Box>
              {/* <LordIcon  src={technologyjson} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/> */}
              <Card
                sx={{
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingY: "20px",
                  minHeight: "440px",
                  marginBottom: "20px",
                }}
              >
                <Link href="">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <CardMedia
                      sx={{ width: "30%" }}
                      component="img"
                      height="60px"
                      image="/assets/img/agiledevelopment.gif"
                      alt="backup"
                    />
                  </Box>
                </Link>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className={styles.card1Header}
                    sx={{
                      fontSize: {
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  >
                    Agile development
                  </Typography>
                  <Typography className={styles.card1SubHeader} variant="body2">
                    We follow Agile Development Process, which enables us to
                    deliver the project with the highest quality and a solid
                    product.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              {/* <LordIcon  src={technologyjson} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/> */}
              <Card
                sx={{
                  borderRadius: "18px",

                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingY: "20px",
                  minHeight: "440px",
                  marginTop: "30px",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                }}
              >
                <Link href="">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <CardMedia
                      sx={{ width: "30%" }}
                      component="img"
                      height="60px"
                      image="/assets/img/customersupport.gif"
                      alt="backup"
                    />
                  </Box>
                </Link>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className={styles.card1Header}
                    sx={{
                      fontSize: {
                        lg: "25px",
                        md: "25px",
                        sm: "20px",
                        xs: "20px",
                      },
                    }}
                  >
                    Friendly Support
                  </Typography>
                  <Typography className={styles.card1SubHeader} variant="body2">
                    When it comes to providing beneficial support, you will
                    never across a team like InfoKoders software. We are always
                    there for clients right from the project idea discussion to
                    launch
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
      {/* Industries we serve */}
      <Industry />
    </>
  );
};

export default HomeContent;
