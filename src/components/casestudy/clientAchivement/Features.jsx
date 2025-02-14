import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import DataBackup from "../../../../public/assets/img/DataBackup.gif";

const Features = () => {
  const featuresData = [
    {
      des: "The platform provides advisory services to member priorities for digital payments",
    },
    {
      des: "Share action-oriented research and foster peer learning",
    },
    {
      des: "Conduct advocacy at a national, regional, and global level",
    },
    {
      des: "Provide awareness of digital payments through content sharing",
    },
  ];

  return (
    <>
      <Box className={styles.featuresMain}>
        <Grid className={styles.featureContainer}>
          <Grid textAlign="center">
            <Typography
              sx={{ color: "#333" }}
              fontSize={{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}
              className={styles.solutionHeading}
            >
              Features
            </Typography>
          </Grid>

          <Grid className={styles.featureCards} container spacing={5}>
            {featuresData?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                key={index}
                className={styles.featureBox}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Image
                  style={{ width: "30%" }}
                  src={DataBackup}
                  alt=""
                  height={80}
                  width={60}
                />

                {/* <Typography>{item?.title}</Typography> */}
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "22px",
                    fontFamily: "NovemberPro-Reg",
                  }}
                >
                  {item?.des}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Features;
