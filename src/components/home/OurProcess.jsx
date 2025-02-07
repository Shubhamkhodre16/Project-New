import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";


const processSteps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description:
      "The first imperative step in our product development process is gathering requirements and analyzing it.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "We create attractive app designs using modern design tools.",
  },
  {
    id: 3,
    title: "Prototype",
    description:
      "Followed with a prototype that shows a preliminary visual of the app portraying its fundamental design and function.",
  },
  {
    id: 4,
    title: "Coding and Development",
    description:
      "With complete transparency, development begins on the preferred platforms.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    description:
      "We don't cut corners when it comes to quality, so you'll get a bug-free app.",
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "At this stage of development, your app is ready to appear on the App Store or Google Play.",
  },
  {
    id: 7,
    title: "Support and Maintenance",
    description:
      "After deployment, we provide future support and maintenance for developed products.",
  },
];

const OurProcess = () => {
  return (
    <div className={styles.carouselContainer}>
      <Typography className={styles.title}>OUR PROCESS</Typography>

      {/* Grid Layout */}
      <Grid  container className={styles.gridContainer}>
  {processSteps.map((step, index) => (
    <Grid   key={index} className={styles.stepContainer}>
      <div className={styles.bullets}>{index + 1}</div>
      <div className={styles.header}>{step.title}</div>
      <p className={styles.description}>
        {step.description}
      </p>
    </Grid>
  ))}
</Grid>

    </div>
  );
};

export default OurProcess;
