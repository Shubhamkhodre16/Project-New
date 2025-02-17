import React from "react";
import Image from "next/image";
import { Button, Grid2, Typography } from "@mui/material";
import styles from "../../styles/Startup.module.css";
const PrototypeCard = () => {
  const cardData = [
    {
      title: "Building a Product prototype",
      subtitle:
        "InfoKoders Technologies believes that a visionary prototype has the efficacy to transform the software development dynamics. That’s why we carefully develop a simple test version of your software called as a Product prototype.",
      subtitle2:
        "The test version of your product gets developed in two ways, first by creating a clickable software and second through preparing an MVP known as a Minimum viable product that describes the core product functionality and design and makes the further process smoother We are known for providing the refined prototype in less time with affordable cost and the best resources",
      button: "Contact us to discuss your idea",
      image: "/assets/img/productPrototype.png",
    },
    {
      title: "Architecting a Startup MVP",
      subtitle:
        "If you are not that confident enough about your business idea, then emphasizing building MVP can turn out to be the best decision as it saves both time and money. MVP must be developed cautiously as it defines the core functionality and features of the product. We ensure the start-ups reach their full potential by handing over the exemplary MVP that takes your product to next level.",
      subtitle2:
        "During this period our team smartly utilizes the time in research about your business model and market, craft out a solid roadmap and build a solution.",
      button: "Learn more about our MVP development",
      image: "/assets/img/mvpPrototype.png",
    },
    {
      title: "Startup Product Development",
      subtitle:
        "In this demand, the Product development is initiated from scratch and the root idea is transformed into the biggest hit solution by undergoing into seven different stages. Starting with business modeling and requirements gathering, followed by UX and UI design, backend/front end development, quality testing, and launch. Along with that, we keep a track of your product infrastructure.",
      subtitle2:
        "As a startup centric IT company we ensure you that the product that shaped out under our expertise tech team completely reflects your vision and seamlessly beat both the market and user expectations",
      button: "Narrate us about your product idea",
      image: "/assets/img/startupProduct.png",
    },
    {
      title: "Startup Product Reengineering",
      subtitle:
        "With the emergence of new technologies and a fast-changing business environment, your product might fail to reach the market preference; that’s where the need for Product reengineering gets arise. Hence as start-ups, it’s essential to have strategic software engineering services and intellect product partners like InfoKoders Technologies who is perceived for delivering long-lasting products that go in parallel with new technological trends.",
      subtitle2:
        "If you are aiming to enhance the overall performance of a product or rebuild the product according to growing user needs, technology ecosystems, and stakeholders then zealously you can take advantage of our Start-up rescue services or Product reengineering services",
      button: "Narrate us about your product idea",
      image: "/assets/img/reengineering.png",
    },
    {
      title: "Building a Software team for Your Start-up from Scratch",
      subtitle:
        "Have a full-proof start-up product idea but aren’t aware of how to build a strong and skillful software development team in such a crowded engineers space? Doubtlessly put your entire burden on us as we provide you access to the best selective developers that are highly committed and perform enthusiastically by focusing on your project goals.",
      subtitle2:
        "The Resources we onboard for you are elected after a stunning performance in several rounds of challenging interviews.",
      subtitle3:
        "Being an exclusive startup oriented software development team provider, it’s our responsibility and commitment to hand over the A1 software developers team that delivers incomparable development solutions and make you stand distinct from competitors",
      button: "Book a free consultation",
      image: "/assets/img/scratch.png",
    },
  ];
  return (
    <>
      <Grid2 container spacing={3} className={styles.cardContainer}>
        {cardData.map((item, index) => (
          <div key={index}>
            <Grid2 className={styles.PrototypeCard}>
              <Grid2
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                className={styles.leftCard}
              >
                {index % 2 === 0 ? (
                  <>
                    <Typography
                      className={styles.leftCardTitle}
                      sx={{
                        fontSize: {
                          lg: "30px",
                          md: "20px",
                          sm: "26px",
                          xs: "22px",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className={styles.leftCardSubTitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "18px ",
                          sm: "20px",
                          xs: "18px",
                        },
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      className={styles.leftCardSubTitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "18px ",
                          sm: "20px",
                          xs: "18px",
                        },
                      }}
                    >
                      {item.subtitle2}
                    </Typography>
                    <Typography
                      className={styles.leftCardSubTitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "18px ",
                          sm: "20px",
                          xs: "18px",
                        },
                      }}
                    >
                      {item.subtitle3}
                    </Typography>
                    <Button
                      className={styles.PrototypeButton}
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "16px",
                          xs: "14px",
                        },
                        backgroundColor: "#333",
                      }}
                    >
                      {item.button}
                    </Button>
                  </>
                ) : (
                  <Image
                    src={item.image}
                    className={styles.LeftImage}
                    alt="not found"
                    width={600}
                    height={300}
                  />
                )}
              </Grid2>
              <Grid2
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                className={styles.rightCard}
              >
                {index % 2 === 0 ? (
                  <Image
                    className={styles.rightImage}
                    src={item.image}
                    alt="not found"
                    width={600}
                    height={300}
                  />
                ) : (
                  <>
                    {" "}
                    <Typography
                      className={styles.leftCardTitle}
                      sx={{
                        fontSize: {
                          lg: "30px",
                          md: "20px",
                          sm: "26px",
                          xs: "22px",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className={styles.leftCardSubTitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "18px ",
                          sm: "20px",
                          xs: "18px",
                        },
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      className={styles.leftCardSubTitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "18px ",
                          sm: "20px",
                          xs: "18px",
                        },
                      }}
                    >
                      {item.subtitle2}
                    </Typography>
                    <Typography
                      className={styles.leftCardSubTitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "18px ",
                          sm: "20px",
                          xs: "18px",
                        },
                      }}
                    >
                      {item.subtitle3}
                    </Typography>
                    <Button
                      className={styles.PrototypeButton}
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "16px",
                          xs: "14px",
                        },
                        backgroundColor: "#333",
                      }}
                    >
                      {item.button}
                    </Button>
                  </>
                )}
              </Grid2>
            </Grid2>
          </div>
        ))}
      </Grid2>
    </>
  );
};

export default PrototypeCard;
