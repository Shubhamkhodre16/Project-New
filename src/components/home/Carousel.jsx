// import { useState, useEffect } from 'react';
// import styles from './carousel.module.css';
// import Button from "@mui/material/Button";
// import Link from "next/link";
// import { text } from 'stream/consumers';

// const Carousel = () => {
//     const images = [
//         {
//           src: 'https://www.partner2simplify.com.au/wp-content/uploads/2021/02/ror-development-one-img.jpg',
//           alt: 'ROR',
//           title: 'Best Ruby on Rails Development Company',
//           description: 'Get scalable, secure, and well-supported features web applications by embracing exclusive Ruby on rails development services from InfoKoders technologies. As one of the top specialists in ROR development services.',
//           link: '/contact',
//           text: "ROR"

//         },
//         {
//           src: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
//           alt: 'web development',
//           title: 'Web Development',
//           description: 'For offering enhanced user experience and result-oriented solutions we are having unmatched capabilities. A team of experienced web developers at InfoKoders technologies works dedicatedly to produce web solutions that can help to grow your business.',
//           link: '/',
//           text: "WEB"

//         },
//         {
//           src: 'https://businessconsultingagency.com/wp-content/uploads/2023/09/leveraging-expert-guidance.jpg',
//           alt: 'Start up',
//           title: 'We are start-up uplifters',
//           description: 'Fulfill your tech and non-tech startup dreams through embracing winning technological solutions from a successful tech team holding up a track record of developing 100+ innovative tech products for start-ups over 5+ years.',
//           link: '/contact',
//           text: "START-UP UPLIFTERS"

//         },
//         {
//           src: 'https://media.licdn.com/dms/image/v2/D5612AQGzYwD8vD5__w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697912996343?e=2147483647&v=beta&t=t-nvba-Y1-xZCMjj1Rorc-PQ9GR2lmVx-qQeSgBO3wY',
//           alt: 'Physics Wallah',
//           title: 'Let your enterprise rock with our world-class technological services',
//           description: 'InfoKoders technologies is admired as a leading software Development Company for exceeding business goals consistently thereby offering end-to-end web, mobile, and software development services.',
//           link: '/contact',
//           text:"SERVICES"
//         },
//         {
//           src: 'https://t3.ftcdn.net/jpg/01/18/44/92/360_F_118449262_EV2IAx9hQbAWwDlQc87eewmL3WiI8sCC.jpg',
//           alt: 'Startup',
//           title: 'Startup',
//           description: 'Navigating the tech and Non-tech Start-ups towards success heights with our durable software development solutions. We are here to breathe life into your start-up dreams. InfoKoders Technologies is been recognized as a one-stop source to embrace winning software development',
//           link: '/contact',
//           text:"START-UP"
//         },
//         {
//           src: 'https://cdn.create.vista.com/api/media/small/180267364/stock-photo-concept-of-agile-software-development',
//           alt: 'Startup',
//           title: 'Agile Development',
//           description: 'We follow Agile Development Process, which enables us to deliver the project with the highest quality and a solid product.App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.',
//           link: '/contact',
//           text:"AGILE"
//         }
//       ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(nextImage, 5000); // Auto slide every 3 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className={styles.carouselContainer}>
//       {/* Left Content */}
//       <div className={styles.contentContainer}>
//       <p className={styles.description1}>{images[currentIndex].text}</p>

//         <h2 className={styles.title}>{images[currentIndex].title}</h2>
//         <p className={styles.description}>{images[currentIndex].description}</p>
//         <Link href={images[currentIndex].link}>
//           <Button
//             variant="outlined"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginTop: "20px",
//               textTransform: "none",
//               fontSize: "15px",
//               fontFamily: "Circular, sans-serif",
//               color: "#650909",
//               border: "1px solid #650909",
//             }}
//             className={styles.button}
//           >
//             Explore more
//           </Button>
//           </Link>
//       </div>

//       {/* Carousel Images */}
//       <div className={styles.carousel}>
//         <div
//           className={styles.carouselInner}
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             transition: 'transform 0.5s ease',
//           }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className={styles.carouselItem}>
//               <img src={image.src} alt={image.alt} className={styles.mobileFrame} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid, Typography, Button } from "@mui/material";
import styles from "../../styles/caroussel.module.css";
import whitewave from "../../../public/assets/img/white-wave.png";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const Carouseldata = [
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
      des: "We follow Agile Development Process, which enables us to deliver the project with the highest   quality and a solid product.App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.",
      button: "Read More",
    },
  ];
  const totalSlides = Carouseldata.length;

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setSlideIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowcontainer}>
      {Carouseldata.map((item, index) => (
        <Box
          key={index}
          className={styles.slide}
          style={{
            backgroundColor: item.backgroundColor,
            display: slideIndex === index ? "flex" : "none",
          }}
        >
          <Grid container spacing={2} className={styles.gridContainer}>
            <Grid item xs={12} md={7} className={styles.textContainer}>
              <Typography variant="h4" className={styles.title}>
                {item.title}
              </Typography>
              <Image
                src={whitewave}
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
            </Grid>
            <Grid item xs={12} md={5} className={styles.imageContainer}>
              <Box
                className={styles.backgroundImage}
                style={{ backgroundImage: item.backgroundImage }}
              />
            </Grid>
          </Grid>
        </Box>
      ))}

      <a className={styles.prev} onClick={prevSlide}>
        &#10094;
      </a>
      <a className={styles.next} onClick={nextSlide}>
        &#10095;
      </a>

      <div className={styles.dotsContainer}>
        {Carouseldata.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              slideIndex === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
