"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import angular from "../../../public/assets/img/angular-icon.png";
import VuejsIcon from "../../../public/assets/img/vuejsIcon.png";
import TypeScript from "../../../public/assets/img/typescript.png";
import ReactIcon from "../../../public/assets/img/reactjs.png";
import HTML5 from "../../../public/assets/img/html.png";
import JavaScript from "../../../public/assets/img/javascripts.jpg";
import nodejs from "../../../public/assets/img/node-js.png";
import RoR from "../../../public/assets/img/roricon.png";
import mongo from "../../../public/assets/img/mongoDbIcon.png";
import postsql from "../../../public/assets/img/postsql.png";
import Redis from "../../../public/assets/img/redis.png";
import awsCloudServices from "../../../public/assets/img/awsCloudServices.png";
import GoogleCloudServices from "../../../public/assets/img/GoogleService.png";
import DigitalOcean from "../../../public/assets/img/Digital Ocean.png";
import herokuicon from "../../../public/assets/img/herokuIcons.png";
import engineYard from "../../../public/assets/img/engine.png";
import styles from "../../styles/Home.module.css";
const Services = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginY: "30px",
        }}
      >
        <Grid2 sx={{ textAlign: "center", padding: "3% 5%"}}>
          <Typography
            // variant="h4"
            sx={{
              fontSize: {
                lg: "28px",
                md: "22px",
                sm: "25px",
                xs: "22px",
              },
            }}
            className={styles.serviceHeader}
          >
            Your quest for hiring{" "}
            <span style={{ color: "#650909" }}> dedicated </span>remote
            developers ends here
          </Typography>
          <Typography
            className={styles.serviceSubHeader}
            // variant="body1"
            sx={{
              fontSize: {
                lg: "18px",
                md: "16px",
                sm: "18px",
                xs: "16px",
              },
            }}
          >
            It doesn’t matter what tech resources you are looking for, we
            possess a team of offshore dedicated development experts having the
            years of experience in all the leading tools and technologies.
            Associate with InfoKoders technologies, handpick your tech team, and
            achieve short and long-term business objectives.
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          // maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "30px",
          paddingLeft: "3.3%",
          paddingRight: "3.3%",
        }}
      >
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
          }}
        >
          <Grid2
            textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
            size={{ xs: 12, md: 6 }}
          >
            <Typography
              className={styles.frontendfontSize}
              // variant="body1"
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Frontend </span>development
            </Typography>
            <Typography
              className={styles.frontDesfontSize}
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
            >
              Avail top-notch app development services by hiring our skillful
              front-end developers that have delivered game-changing solutions.
            </Typography>
            <Link
              href="/contact"
              style={{ color: "#650909", textDecoration: "underline", fontFamily:"NovemberPro-Reg" }}
            >
              Own your team
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={angular}
                  style={{
                    border: "1px dotted #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="angular"
                />
                Angular
              </span>

              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={VuejsIcon}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="Vue.js"
                />
                Vue.js
              </span>
              <span style={{ textAlign: "center", fontSize: "14px" }}>
                <Image
                  src={TypeScript}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="TypeScript"
                />
                TypeScript
              </span>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={ReactIcon}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="REactjs"
                />
                React
              </span>

              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={HTML5}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="HTML5"
                />
                HTML5
              </span>
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={JavaScript}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="javascript"
                />
                JavaScript
              </span>
            </Box>
          </Grid2>
        </Grid2>
        <Grid2
        container
          size={{ xs: 12, md: 6 , lg:6 }}
          textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            // flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
            paddingX:"40px"
          }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              className={styles.frontendfontSize}
              // variant="body1"
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Backend </span>development
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
              className={styles.frontDesfontSize}
            >
              Attract your end-customers by picking our offshore development
              team notable for developing solutions that deliver outstanding
              user experience
            </Typography>
            <Link
              href="/contact"
              style={{ color: "#650909", textDecoration: "underline" }}
            >
              Own your team
            </Link>
          </Grid2>
          <Grid2
            container
            size={{ xs: 6, sm:6,  md: 6 }}
            spacing={2}
            justifyContent="center"
          >
            <Grid2 size={{xs:6, md:6}} >
              <Box
                className={styles.devlopOpt}
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  // alignItems: "center",
                }}
              >
                <Image
                  src={nodejs}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="nodejs"
                />
                <span style={{ textAlign: "center", fontSize: "14px" }}>
                  Node.js
                </span>
              </Box>
            </Grid2>

            <Grid2 size={{xs:6, sm:6, md:6}} >
              <Box
                className={styles.devlopOpt}
                sx={{
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Image
                  src={RoR}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="ROR"
                />
                <span style={{ textAlign: "center", fontSize: "14px" }}>
                  ROR
                </span>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          // maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "30px",
          paddingLeft: "3.3%",
          paddingRight: "3.3%",
        }}
      >
        <Grid2
          size={{ xs: 12, md: 6 }}
          textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
          }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              className={styles.frontendfontSize}
              // variant="body1"
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Database </span>development
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
              className={styles.frontDesfontSize}
              // variant="body1"
            >
              Our offshore developers gather, organize, and extract key insights
              from massive amounts of data.
            </Typography>
            <Link
              href="/contact"
              style={{ color: "#650909", textDecoration: "underline" }}
            >
              Own your team
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={mongo}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="mongodb"
                />
                MongoDB
              </span>

              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={postsql}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    minHeight: "70px",
                    minWidth: "70px",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="PostgreSQL"
                />
                PostgreSQL
              </span>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={Redis}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="Redis"
                />
                Redis
              </span>
            </Box>
          </Grid2>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
          }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              // variant="body1"
              className={styles.frontendfontSize}
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Cloud </span>services
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
              className={styles.frontDesfontSize}
            >
              Cloud services provide users with duplicating and scaling, great
              flexibility, resources to balance the requirements of users and
              hosted applications and solutions.
            </Typography>
            <Link
              href="/contact"
              style={{ color: "#650909", textDecoration: "underline" }}
            >
              Own your team
            </Link>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  paddingBottom: "22px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={awsCloudServices}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt=" AWS Services"
                />
                AWS Services
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  paddingBottom: "22px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={DigitalOcean}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="Digital Ocean"
                />
                Digital Ocean
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  paddingBottom: "22px",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={engineYard}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="Engine Yard"
                />
                Engine Yard
              </span>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  paddingBottom: "22px",

                }}
              >
                <Image
                  src={GoogleCloudServices}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="Google Cloud Services "
                />
                Google Cloud Services
              </span>
              <span
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                <Image
                  src={herokuicon}
                  style={{
                    border: "1px dotted  #333",
                    borderRadius: "50%",
                    padding: "10px",
                    marginBottom:"10px",
                    minHeight: "60px",
                    minWidth: "60px",
                  }}
                  width={70}
                  height={70}
                  alt="Heroku"
                />
                Heroku
              </span>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Services;
