"use client";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import styles from "../../../styles/CaseStudy.module.css";
import { Typography, Box } from "@mui/material";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const Solutions = ({
  solutionTitle = "",
  CarouselData,
  isDigital = false,
  isPlatform = false,
  isBiodiversity = false,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const totalSlides = Math.ceil(CarouselData.length / 2); // Show two slides at a time

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  // const prevSlide = () =>
  //   setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  // const goToSlide = (index) => setSlideIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const specilityLeft = [
    "Client",
    "Recommender User",
    "Review Board Member",
    "Applicant",
    "School counselor",
  ];
  const speclityright = [
    "Endorser Users",
    "NGB",
    "Team Member",
    "University staff",
  ];

  return (
    <>
      <Box className={styles.solutionsMain}>
        <Grid className={styles.solutionContainer}>
          <Grid>
            <Typography
              sx={{fontFamily:"NovemberPro", fontSize:{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}}
              className={styles.solutionHeading}
            >
              The Solution
            </Typography>
            <Typography
              sx={{ marginTop: "10px",fontFamily:"NovemberPro-Reg", fontSize:{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" } }}
              textAlign="center"
            >
              {/* <AdjustOutlinedIcon 
              sx={{color:"white"}}
              />  */}
              {solutionTitle}
            </Typography>
            {(isPlatform || isBiodiversity) && (
              <Typography
                textAlign="center"
                sx={{
                  marginTop: isBiodiversity ? "40px" : "20px",
                  fontWeight: isBiodiversity ? "bold" : "",
                  fontFamily:"NovemberPro-Reg",
                  fontSize:{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }
                }}
              >
                {isBiodiversity
                  ? "Modules of the tool"
                  : "The well designed platform pull out sufficient soccer details like entire leagues, Upcoming match, All Season, Fixtures details, Live Games, Team Information, Player Information’s and all the stats associated with the team and players."}
              </Typography>
            )}
            {isBiodiversity && (
              <Grid
                container
                spacing={4}
                sx={{
                  padding: "0 20%",
                  textAlign: "center",
                  marginTop: "30px",
                  fontFamily:"NovemberPro-Reg",
                }}
              >
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Typography sx={{fontFamily:"NovemberPro-Reg"}}>User (Individual/ Organization) Panel</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>Admin Panel</Grid>
              </Grid>
            )}
          </Grid>
          {isDigital || isPlatform || isBiodiversity ? (
            ""
          ) : (
            <Grid
              className={styles.solutionContent}
              container
              spacing={{ xs: 3, sm: 3, md: 8, lg: 8 }}
            >
              <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }}>
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  }}
                  sx={{fontFamily:"NovemberPro-Reg"}}
                  fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
                >
                  {/* <AdjustOutlinedIcon 
              sx={{color:"white"}}
              />  */}
                  InfoKoders technologies strategically developed, designed and
                  launched a profit-making and hassle-free tech-enabled online
                  scholarship management platform by clearly reflecting the
                  client vision.
                </Typography>
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  }}
                  fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
                  sx={{ marginTop: "15px", fontFamily:"NovemberPro-Reg" }}
                >
                  The Cloud-based platform enables the student to search and
                  apply for various private education finance schemes based on
                  their qualification. Fund providers, industries, and
                  corporates can encourage skill development for struggling
                  students by drafting education finance schemes in this Online
                  Scholarship portal and effectively can manage these schemes.
                </Typography>
              </Grid>
              <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }}>
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  }}
                  sx={{fontFamily:"NovemberPro-Reg"}}
                  fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
                >
                  High tech automation functionalities integrated by our expert
                  developers facilitate the collection of customized
                  applications from candidates and assign them to the proper
                  reviewers.
                </Typography>
                <Typography
                  fontSize={{ lg: "22px", md: "20px ", sm: "20px", xs: "18px" }}
                  sx={{ marginTop: "15px", fontWeight: "800", fontFamily:"NovemberPro" }}
                >
                  Specifically built diverse modules depending on the specific
                  role such as
                </Typography>
                <Grid sx={{ marginTop: "10px" }} container>
                  <Grid
                    spacing={1}
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                  >
                    {specilityLeft?.map((item, index) => (
                      <Typography
                        key={index}
                        sx={{
                          lineHeight: 1.5,
                          fontFamily:"NovemberPro-Reg"
                        }}
                        fontSize={{
                          lg: "16px",
                          md: "16px ",
                          sm: "16px",
                          xs: "16px",
                        }}
                      >
                        {" "}
                        <CheckCircleIcon
                          fontSize="medium"
                          sx={{ color: "white", mr: 1 }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                  <Grid
                    spacing={1}
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                  >
                    {speclityright?.map((item, index) => (
                      <Typography
                        sx={{
                          lineHeight: 1.5,
                          fontFamily: "NovemberPro-Reg",
                        }}
                        fontSize={{
                          lg: "16px",
                          md: "16px ",
                          sm: "16px",
                          xs: "16px",
                        }}
                        key={index}
                      >
                        {" "}
                        <CheckCircleIcon
                          sx={{
                            color: "white",
                            mr: 1,
                          }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid sx={{ marginTop: "80px" }} className={styles.solutionCarousel}>
            <div className={styles.slideContainer}>
              {Array.from({ length: totalSlides }).map((_, index) => {
                const firstItem = index * 2;
                const secondItem = firstItem + 1;

                return (
                  <Box
                    key={index}
                    className={styles.slide}
                    style={{
                      display: slideIndex === index ? "flex" : "none",
                    }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 6, sm: 6, md: 12, lg: 12 }}
                      className={styles.gridContainer1}
                    >
                      {[firstItem, secondItem].map((itemIndex) =>
                        CarouselData[itemIndex] ? (
                          <Grid
                            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            key={itemIndex}
                            className={styles.slideItem}
                          >
                            <Image
                              alt={CarouselData[itemIndex].alt ?? ""}
                              src={CarouselData[itemIndex].src ?? ""}
                              width={600}
                              height={100}
                            />
                          </Grid>
                        ) : null
                      )}
                    </Grid>
                  </Box>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Solutions;
