import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import brightness from "../../../../public/assets/img/arrow-right.svg";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DataBackup from "../../../../public/assets/img/DataBackup.gif";

const ClientAchivement = ({
  isSchlorship = false,
  clientSubTitle = "",
  isClientAchivement = false,
  clientData,
}) => {
  const techStack = [
    {
      title: "Frontend",
      subtle: "ReactJs/NextJS",
    },
    {
      title: "Backend",
      subtle: "Ruby on Rails",
    },
    {
      title: "Database",
      subtle: "Salesforce",
    },
  ];
  const projectInsight = [
    {
      title: "Time Duration",
      subtle: "1 year followed by maintenance and future upgrades",
    },
    {
      title: "Estimate hours",
      subtle: "3000 man-hours",
    },
    {
      title: "Team size",
      subtle:
        "7 (Business analyst, Project manager, UI/UX designer, Front end developer, Back end developer(2), Testers)",
    },
  ];
  return (
    <>
      <Box
        sx={{ marginBottom: isSchlorship ? "100px" : "" }}
        className={styles.mainAchivement}
      >
        <Grid className={styles.achivementContainer}>
          <Grid>
            <Typography
              className={styles.achivetitle}
              sx={{fontFamily:"NovemberPro",fontSize:{ lg: "35px", md: "26px ", sm: "26px", xs: "22px"}}}
            >
              Client Achievement
            </Typography>
            <Typography
              className={styles.achiveSubtitle}
              sx={{fontFamily:"NovemberPro-Reg",fontSize:{  lg: "24px", md: "20px ", sm: "20px", xs: "18px"}}}
            >
              {clientSubTitle}
            </Typography>
          </Grid>
          {/* Data  */}
          <Grid container spacing={10} className={styles.achiveData}>
            {clientData?.map((data, index) => (
              <Grid
                className={styles.archiveSubData}
                key={index}
                size={{
                  xs: 12,
                  sm: 12,
                  md: isClientAchivement ? 6 : 4,
                  lg: isClientAchivement ? 6 : 4,
                }}
              >
                <span
                // className={styles.brightness}
                >
                  <LightModeRoundedIcon
                    sx={{
                      color: "#fff",
                    }}
                    fontSize="large"
                  />
                </span>
                <Typography
                  sx={{ marginTop: "20px", fontFamily: "NovemberPro-Reg", fontSize:{ xs: "16px", sm: "16px", md: "16px", lg: "18px" } }}
                >
                  {data}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* Integrated tech Stack */}

          <Grid className={styles.techMain}>
            <Grid className={styles.techHeading}>
              <Typography
                sx={{fontFamily:"NovemberPro",fontSize:{ lg: "35px", md: "26px ", sm: "26px", xs: "22px"}}}
                className={styles.techHeading}
              >
                Integrated tech Stack
              </Typography>
            </Grid>
            <Grid
              container
              spacing={4}
              className={styles.techContainer}
              sx={{ justifyContent: "center" }}
            >
              {techStack?.map((item, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                  className={styles.techBox}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Image
                    style={{ width: "40%" }}
                    src={DataBackup}
                    alt=""
                    height={80}
                    width={60}
                  />
                  <Typography
                    sx={{ marginBottom: "5px", fontFamily: "NovemberPro" }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "NovemberPro-Reg", fontSize: "22px" }}
                  >
                    {item?.subtle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Project Insights  */}

          <Grid className={styles.techMain}>
            <Grid className={styles.techHeading}>
              <Typography
                sx={{fontFamily:"NovemberPro",fontSize:{ lg: "35px", md: "26px ", sm: "26px", xs: "22px"}}}
                className={styles.techHeading}
              >
                Project Insights
              </Typography>
            </Grid>
            <Grid container spacing={4} className={styles.techContainer}>
              {projectInsight?.map((item, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                  className={styles.techBox}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Image
                    style={{ width: "40%" }}
                    src={DataBackup}
                    alt=""
                    height={80}
                    width={60}
                  />
                  <Typography
                    sx={{ marginBottom: "5px", fontFamily: "NovemberPro" }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "NovemberPro-Reg", fontSize: "18px" }}
                  >
                    {item?.subtle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ClientAchivement;
