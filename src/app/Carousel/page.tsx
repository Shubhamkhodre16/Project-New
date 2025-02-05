import { useState, useEffect } from 'react';
import styles from './carousel.module.css';
import Button from "@mui/material/Button";
import Link from "next/link";
import { text } from 'stream/consumers';


const Carousel = () => {
    const images = [
        {
          src: 'https://www.partner2simplify.com.au/wp-content/uploads/2021/02/ror-development-one-img.jpg',
          alt: 'ROR',
          title: 'Best Ruby on Rails Development Company',
          description: 'Get scalable, secure, and well-supported features web applications by embracing exclusive Ruby on rails development services from InfoKoders technologies. As one of the top specialists in ROR development services.',
          link: '/contact',
          text: "ROR"

        },
        {
          src: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
          alt: 'web development',
          title: 'Web Development',
          description: 'For offering enhanced user experience and result-oriented solutions we are having unmatched capabilities. A team of experienced web developers at InfoKoders technologies works dedicatedly to produce web solutions that can help to grow your business.',
          link: '/',
          text: "WEB"

        },
        {
          src: 'https://businessconsultingagency.com/wp-content/uploads/2023/09/leveraging-expert-guidance.jpg',
          alt: 'Start up',
          title: 'We are start-up uplifters',
          description: 'Fulfill your tech and non-tech startup dreams through embracing winning technological solutions from a successful tech team holding up a track record of developing 100+ innovative tech products for start-ups over 5+ years.',
          link: '/contact',
          text: "START-UP UPLIFTERS"

        },
        {
          src: 'https://media.licdn.com/dms/image/v2/D5612AQGzYwD8vD5__w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697912996343?e=2147483647&v=beta&t=t-nvba-Y1-xZCMjj1Rorc-PQ9GR2lmVx-qQeSgBO3wY',
          alt: 'Physics Wallah',
          title: 'Let your enterprise rock with our world-class technological services',
          description: 'InfoKoders technologies is admired as a leading software Development Company for exceeding business goals consistently thereby offering end-to-end web, mobile, and software development services.',
          link: '/contact',
          text:"SERVICES"
        },
        {
          src: 'https://t3.ftcdn.net/jpg/01/18/44/92/360_F_118449262_EV2IAx9hQbAWwDlQc87eewmL3WiI8sCC.jpg',
          alt: 'Startup',
          title: 'Startup',
          description: 'Navigating the tech and Non-tech Start-ups towards success heights with our durable software development solutions. We are here to breathe life into your start-up dreams. InfoKoders Technologies is been recognized as a one-stop source to embrace winning software development',
          link: '/contact',
          text:"START-UP"
        },
        {
          src: 'https://cdn.create.vista.com/api/media/small/180267364/stock-photo-concept-of-agile-software-development',
          alt: 'Startup',
          title: 'Agile Development',
          description: 'We follow Agile Development Process, which enables us to deliver the project with the highest quality and a solid product.App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.',
          link: '/contact',
          text:"AGILE"
        }
      ];
      

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Auto slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {/* Left Content */}
      <div className={styles.contentContainer}>
      <p className={styles.description1}>{images[currentIndex].text}</p>

        <h2 className={styles.title}>{images[currentIndex].title}</h2>
        <p className={styles.description}>{images[currentIndex].description}</p>
        <Link href={images[currentIndex].link}>
          <Button
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              textTransform: "none",
              fontSize: "15px",
              fontFamily: "Circular, sans-serif",
              color: "#650909",
              border: "1px solid #650909",
            }}
            className={styles.button}
          >
            Explore more
          </Button>
          </Link>
      </div>

      {/* Carousel Images */}
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.carouselItem}>
              <img src={image.src} alt={image.alt} className={styles.mobileFrame} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
