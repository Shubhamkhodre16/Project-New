"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid2, Typography, Button } from "@mui/material";
import styles from "../../styles/Carousel.module.css";
import whiteWave from "../../../public/assets/img/white-wave.png";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
const Carousel = ({data,isStartup=false}) => {
const [slideIndex, setSlideIndex] = useState(0);
const totalSlides = data.length;
const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
const prevSlide = () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
const goToSlide = (index) => setSlideIndex(index);
useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
 return (
    <div id="carousel" className={`${styles.slideContainer} ${styles.startupCarousel}`  }>
      {data.map((item, index) => (
        <Box
          key={index}
          className={`${styles.slide} ${styles.startupSlide}`}
          style={{
            backgroundColor: item.backgroundColor,
            display: slideIndex === index ? "flex" : "none",
            ...isStartup?{
              backgroundImage:item.backgroundImage,
              position:"relative"
              }:{}
          }}
        >
           {isStartup &&(
              <Box
              style={{  position:"absolute",
                 top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",}}
                />
            )
          }
          <Grid2 container spacing={2} className={styles.gridContainer} >
            <Grid2 size={{ xs: 12, md: 7 }} className={`${styles.textContainer} ${styles.startContainer}` } >
              <Typography variant="h4" className={styles.title}  style={{width:isStartup?'100%' :'auto',color:isStartup?'rgb(183 46 52)':'inherit',opacity:isStartup?0.8:1, fontFamily:'NovemberPro'}}>
                {item.title}
              </Typography>
             {!isStartup &&(
              <Image
                src={whiteWave}
                alt="White Wave"
                width={100}
                height={100} 
              />)}
              <Typography variant="body1" className={styles.description} style={{opacity:isStartup?0.9:1,fontSize:isStartup?'35px':'22px',fontFamily:isStartup?'NovemberPro':'NovemberPro-Reg' }}>
                {item.des}
              </Typography>
              <Link href={item?.path} passHref>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#fff", color: "#333" }}
                className={styles.button}
              >
                {item.button}
              </Button>
              </Link>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} className={styles.imageContainer} style={{display:isStartup?'none':''}}>
              <Box
                className={styles.backgroundImage}
                style={{ backgroundImage: item.backgroundImage,
                  ...isStartup?{
                    backgroundImage:''
                  }:{}
                 }}
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
        {data.map((_, index) => (
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
