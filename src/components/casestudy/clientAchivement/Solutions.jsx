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

const Solutions = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const CarouselData = [
    {
      src: "/assets/img/schlorshipS1.png",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/schlorshipS2.png",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/schlorshipS3.png",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "/assets/img/schlorshipS2.png",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/schlorshipS3.png",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/schlorshipS3.png",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];

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
              fontSize={{ lg: "35px", md: "26px ", sm: "26px", xs: "22px" }}
              className={styles.solutionHeading}
            >
              The Solution
            </Typography>
          </Grid>
          <Grid className={styles.solutionContent} container spacing={8}>
            <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Typography
                fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
              >
                {/* <AdjustOutlinedIcon 
              sx={{color:"white"}}
              />  */}
                InfoKoders technologies strategically developed, designed and
                launched a profit-making and hassle-free tech-enabled online
                scholarship management platform by clearly reflecting the client
                vision.
              </Typography>
              <Typography
                fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
                sx={{ marginTop: "15px" }}
              >
                The Cloud-based platform enables the student to search and apply
                for various private education finance schemes based on their
                qualification. Fund providers, industries, and corporates can
                encourage skill development for struggling students by drafting
                education finance schemes in this Online Scholarship portal and
                effectively can manage these schemes.
              </Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Typography
                fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
              >
                High tech automation functionalities integrated by our expert
                developers facilitate the collection of customized applications
                from candidates and assign them to the proper reviewers.
              </Typography>
              <Typography
                fontSize={{ lg: "20px", md: "18px ", sm: "18px", xs: "16px" }}
                sx={{ marginTop: "15px" }}
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
                        lineHeight: 2.5,
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
                        lineHeight: 2.5,
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
                      spacing={12}
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
