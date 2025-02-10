import React from "react";
import {Box, Typography } from "@mui/material";
import styles from "../../styles/footer.module.css";
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../../public/assets/img/logo.png";

import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <Box
      className={styles.footerMain}
        sx={{
          backgroundColor: "#101010",
          color: "#fff",
          padding: "0 60px 30px 13%",
          fontFamily: "circular",
        }}
      >
          <Grid container  sx={{justifyContent:"space-between", padding:"30px"}} spacing={4}>
            {/* Go To  */}
            <Grid size={{xs:12,sm:12,md:6,lg:4}} >
              <Typography variant="h6" className={styles.head1}>
                GO TO
              </Typography>
              <ul className={styles.ui}>
                <li>
                  <Link href="/">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog ">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/caseStudies">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Mission &amp; Vision
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Client Testimonial
                  </Link>
                </li>
                <li className="pt-7">
                  <Link href="/" passHref>
                    <Image src={logo} alt="logo" className={styles.logo} />
                  </Link>
                </li>

                <li className="pt-3">
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      fontFamily: "circular",
                      color: "#7e818e",
                    }}
                  >
                    © 2022 InfoKoders Technologies. All Rights Reserved.
                  </Typography>
                </li>
              </ul>
            </Grid>
            {/* Our Services  */}
            <Grid size={{xs:12,sm:6,md:6,lg:4}}>
              <Typography variant="h6" className={styles.head1}>
                OUR SERVICES
              </Typography>
              <ul className={styles.ui}>
                <li>
                  <Link href="/">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Ruby on Rails
                  </Link>
                </li>
                <li>
                  <Link href="/blog ">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    React JS
                  </Link>
                </li>
                <li>
                  <Link href="/caseStudies">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Node js
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Angular js
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    End to End Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    AWS
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    Heroku
                  </Link>
                </li>
              </ul>
            </Grid>

            {/* Enquires  */}

            <Grid size={{xs:12,sm:12,md:6,lg:4}}>
                <Typography variant="h6" className={styles.head1}>
                  BUSINESS ENQURIES
                </Typography>
                <ul className={styles.ui}>
                  <li>
                    <Link href="mailto:info@infokoders.com">
                      <span>
                        <EmailIcon sx={{ fontSize: "large" }} />
                      </span>{" "}
                      info@infokoders.com
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link href="tel:+91%2007314105427">
                      <span>
                        <LocalPhoneIcon sx={{ fontSize: "large" }} />
                      </span>{" "}
                      +91 07314105427
                    </Link>
                  </li>
                </ul>
              {/* <Grid></Grid> */}
              <Typography variant="h6" className={styles.head1}>
                HR ENQURIES
              </Typography>
              <ul className={styles.ui}>
                <li>
                  <Link href="mailto:hr@infokoders.com">
                    <span>
                      <EmailIcon sx={{ fontSize: "large" }} />
                    </span>{" "}
                    hr@infokoders.com
                  </Link>
                </li>
                <li className="pt-2">
                  <Link href="tel:+91%2007314105427">
                    <span>
                      <LocalPhoneIcon sx={{ fontSize: "large" }} />
                    </span>{" "}
                    +91 07314105427
                  </Link>
                </li>
                <li className="pt-4">
                  <Link href="">
                    <InstagramIcon sx={{ width: "30px", height: "30px" }} />
                  </Link>
                  <Link href="https://in.linkedin.com/company/infokoders-technologies">
                    <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
                  </Link>
                  <Link href="https://www.facebook.com/infokoders">
                    <FacebookIcon sx={{ width: "30px", height: "30px" }} />
                  </Link>
                  <Link href="https://www.facebook.com/infokoders">
                    <TwitterIcon sx={{ width: "30px", height: "30px" }} />
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
      </Box>
    </section>
  );
};

export default Footer;
