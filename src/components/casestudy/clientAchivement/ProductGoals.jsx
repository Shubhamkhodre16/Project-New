import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import whitewave from "../../../../public/assets/img/about-img.jpg";

const ProductGoals = () => {
  return (
    <>
      <Box>
        <Grid className={styles.productMain}>
          <Grid container spacing={2} className={styles.productContainer}>
            <Grid  size={{xs:12,sm:12, md:6,xl:6}} className={styles.productData} >
              <Image
                src={whitewave}
                alt="White Wave"
                width={400}
                height={100}
              />
            </Grid>
            <Grid size={{xs:12,sm:12, md:6,xl:6}}>
              <Typography className={styles.productHeading} >Client and Product Goals</Typography>
              <Typography>
                A Minneapolis-based start-up wished to eradicate the student’s
                financial struggle in an educational realm by taking the
                advantage of new-age technologies. He narrated his entire vision
                of building an online scholarship management platform for
                revolutionizing the process school is paid, helping deserving
                students, and effective management of award programs.
              </Typography>
               <Button variant="contained"   >
               Transformed the Vision into Reality
               </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductGoals;