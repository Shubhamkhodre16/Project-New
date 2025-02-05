"use client";
import { useState, useEffect } from "react";
import styles from "./testnomial.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Testimonials = () => {
  const images = [
    {
      src: "https://www.partner2simplify.com.au/wp-content/uploads/2021/02/ror-development-one-img.jpg",
      alt: "ROR",
      title: "Dan McCarty",
      description:
       " It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible."
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
    ,
    {
      src: "https://media.licdn.com/dms/image/v2/D5612AQGzYwD8vD5__w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697912996343?e=2147483647&v=beta&t=t-nvba-Y1-xZCMjj1Rorc-PQ9GR2lmVx-qQeSgBO3wY",
      alt: "Enterprise Solutions",
      title: " Alex Ong",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex,"currrr");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 2
      );
    }, 3000); // Adjusted timing for smoother transitions

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.heading}>TESTIMONIALS</h2>
        <span className={styles.para}>
          Our beloved clients shared their thrilling experience on how our
          product development and services helped them to set a benchmark in
          their business realm
        </span>
        <span className={styles.text}>TESTIMONIALS</span>

        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            <div
              className={styles.carouselInner}
              style={{
                transform: `translateX(-${currentIndex * 34}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className={styles.carouselItem}>
                  <Stack alignItems="center" spacing={2}>
                    <Avatar
                      alt={image.alt}
                      src={image.src}
                      className={styles.avatar}
                    />
                  </Stack>
                  <h3 className={styles.title}>{image.title}</h3>
                  <p className={styles.description}>{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
