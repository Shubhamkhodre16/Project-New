"use client";

import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const Carouseldata = [
    {
      src: "https://www.partner2simplify.com.au/wp-content/uploads/2021/02/ror-development-one-img.jpg",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        " It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "  The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "https://businessconsultingagency.com/wp-content/uploads/2023/09/leveraging-expert-guidance.jpg",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "   I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5612AQGzYwD8vD5__w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697912996343?e=2147483647&v=beta&t=t-nvba-Y1-xZCMjj1Rorc-PQ9GR2lmVx-qQeSgBO3wY",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5612AQGzYwD8vD5__w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697912996343?e=2147483647&v=beta&t=t-nvba-Y1-xZCMjj1Rorc-PQ9GR2lmVx-qQeSgBO3wY",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5612AQGzYwD8vD5__w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697912996343?e=2147483647&v=beta&t=t-nvba-Y1-xZCMjj1Rorc-PQ9GR2lmVx-qQeSgBO3wY",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        " I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];

  const totalSlides = Math.ceil(Carouseldata.length / 2); // Show two slides at a time

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setSlideIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginTop="30px"
          sx={{ px: 10 }} // Adds horizontal padding for better spacing
        >
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Typography className={styles.testimonialHeading}>Testimonial</Typography>
            <Typography className={styles.testimonialPara}>
              Our beloved clients shared their thrilling experience on how our
              product development and services helped them to set a benchmark in
              their business realm.
            </Typography>
          </Grid>
        </Grid>
        <span className={styles.text}>TESTIMONIALS</span>

        <div className={styles.slideshowcontainer}>
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
                  xs={12}
                  md={4}
                  lg={6}
                  spacing={2}
                  className={styles.gridContainer1}
                >
                  {[firstItem, secondItem].map((itemIndex) =>
                    Carouseldata[itemIndex] ? (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={5}
                        key={itemIndex}
                        className={styles.slideItem}
                      >
                        <Box className={styles.slideContent}>
                          <Stack alignItems="center" spacing={2}>
                            <Avatar
                              alt={Carouseldata[itemIndex].alt}
                              src={Carouseldata[itemIndex].src}
                              className={styles.avatar}
                            />
                          </Stack>
                          <Typography variant="h6" className={styles.cardTitle}>
                            {Carouseldata[itemIndex].title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className={styles.description1}
                          >
                            {Carouseldata[itemIndex].description}
                          </Typography>
                        </Box>
                      </Grid>
                    ) : null
                  )}
                </Grid>
              </Box>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
