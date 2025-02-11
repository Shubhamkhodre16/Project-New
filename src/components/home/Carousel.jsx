"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid2, Typography, Button } from "@mui/material";
import styles from "../../styles/carousel.module.css";
import whiteWave from "../../../public/assets/img/white-wave.png";
import Navbar from "../navbar/Navbar";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const CarouselData = [
    {
      title: "Best Ruby on Rails Development Company",
      backgroundColor: "#650909",
      backgroundImage: "url(/assets/img/ror-banner.svg)",
      des: "Get scalable, secure, and well-supported features web applications by embracing exclusive Ruby on rails development services from InfoKodetechnologies. As one of the top specialists in ROR development services.",
      button: "Read More",
    },
    {
      title: "Web Development",
      backgroundColor: "#340F3D",
      backgroundImage: "url(/assets/img/web-technology.svg)",
      des: "For offering enhanced user experience and result-oriented solutions we are having unmat capabilities. A team of experienced web developers at InfoKoders technologies works dedicatedly to produce web solutions that can help to grow your business.",
      button: "Read More",
    },
    {
      title: "We are start-up uplifters",
      backgroundColor: "#3c004b",
      backgroundImage: "url(/assets/img/web-technology.svg)",
      des: " Fulfill your tech and non-tech startup dreams through embracing winning technological solutions from a successful tech team holding up a track record of developing 100+ innovative tech products for start-ups over 5+ years.",
      button: "Get the Recognition with us",
    },
    {
      title: "Enterprise Technology Services",
      backgroundColor: "#364F6E",
      backgroundImage: "url(/assets/img/right.png)",
      des: "InfoKoders technologies is admired as a leading software Development Company for exceeding business goals consistently thereby offering end-to-end web, mobile, and software development services.",
      button: "Technologize with us",
    },
    {
      title: "Online Scholarship Management Platform",
      backgroundColor: "#032B44",
      backgroundImage: "url(/assets/img/schlorshipimage.png)",
      des: " A Minneapolis-based start-up wished to eradicate the student’s  financial struggle in an educational realm by taking the advantage of new-age technologies. He narrated his entire vision of building an online scholarship management platform for revolutionizing the  process school is paid, helping deserving students, and effective management of award programs.",
      button: "Read More",
    },
    {
      title: "Startup Growth",
      backgroundColor: "#340F3D",
      backgroundImage: "url(/assets/img/start-up.svg)",
      des: " Navigating the tech and Non- tech Start-ups towards success heights with our durable software development solutions. We are here to breathe life into your start-up dreams. InfoKoders Technologies is been recognized as a one-stop source to embrace winning software development solutions at a budget-friendly cost.",
      button: "Read More",
    },
    {
      title: "Agile Developments",
      backgroundColor: "#032B44",
      backgroundImage: "url(/assets/img/right2.png)",
      des: "We follow Agile Development Process, which enables us to deliver the project with the highest quality and a solid product.App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.",
      button: "Read More",
    },
  ];
  const totalSlides = CarouselData.length;

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setSlideIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carousel" className={styles.slideContainer}>
      {CarouselData.map((item, index) => (
        <Box
          key={index}
          className={styles.slide}
          style={{
            backgroundColor: item.backgroundColor,
            display: slideIndex === index ? "flex" : "none",
          }}
        >
          <Grid2 container spacing={2} className={styles.gridContainer}>
            <Grid2
              item
              size={{ xs: 12, md: 7 }}
              className={styles.textContainer}
            >
              <Typography variant="h4" className={styles.title}>
                {item.title}
              </Typography>
              <Image
                src={whiteWave}
                alt="White Wave"
                width={200}
                height={100}
              />
              <Typography variant="body1" className={styles.description}>
                {item.des}
              </Typography>
              <Button variant="contained" className={styles.button}>
                {item.button}
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} className={styles.imageContainer}>
              <Box
                className={styles.backgroundImage}
                style={{ backgroundImage: item.backgroundImage }}
              />
            </Grid2>
          </Grid2>
        </Box>
      ))}

      <a className={styles.prev} onClick={prevSlide}>
        &#10094;
      </a>
      <a className={styles.next} onClick={nextSlide}>
        &#10095;
      </a>

      <div className={styles.dotsContainer}>
        {CarouselData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              slideIndex === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Carousel;
