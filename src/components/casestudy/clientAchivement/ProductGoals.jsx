import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import laptopMobile from "../../../../public/assets/img/laptopMobile.png";

const ProductGoals = () => {
  return (
    <>
      <Box className={styles.productMain}>
        <Grid container spacing={10} className={styles.productContainer}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, xl: 6 }}
            className={styles.productData}
          >
            <Image
              src={laptopMobile}
              alt="White Wave"
              width={600}
              height={100}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, xl: 6 }}>
            <Typography
              fontSize={{ lg: "35px", md: "26px ", sm: "30px", xs: "22px" }}
              className={styles.productHeading}
            >
              Client and Product Goals
            </Typography>
            <Typography
              className={styles.productDes}
              fontSize={{ lg: "20px", md: "16px ", sm: "18px", xs: "16px" }}
            >
              A Minneapolis-based start-up wished to eradicate the student’s
              financial struggle in an educational realm by taking the advantage
              of new-age technologies. He narrated his entire vision of building
              an online scholarship management platform for revolutionizing the
              process school is paid, helping deserving students, and effective
              management of award programs.
            </Typography>
            <Button
              sx={{ backgroundColor: "#333" }}
              className={styles.productButton}
              variant="contained"
            >
              Transformed the Vision into Reality
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductGoals;
