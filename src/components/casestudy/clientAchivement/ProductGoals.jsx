import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import laptopMobile from "../../../../public/assets/img/laptopMobile.png";

const ProductGoals = ({ productData }) => {
  return (
    <>
      <Box className={styles.productMain}>
        {productData?.map((item, index) => (
          <Grid
            key={index}
            container
            spacing={10}
            className={styles.productContainer}
          >
            <Grid
              size={{ xs: 12, sm: 12, md: 6, xl: 6 }}
              className={styles.productData}
            >
              <Image
                src={item?.imageSrc}
                alt="White Wave"
                width={600}
                height={100}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, xl: 6 }}>
              <Typography
                sx={{fontFamily:"NovemberPro"}}
                fontSize={{ lg: "35px", md: "26px ", sm: "30px", xs: "22px" }}
                className={styles.productHeading}
              >
                {item?.title}
              </Typography>
              <Typography
                sx={{fontFamily:"NovemberPro-Reg"}}
                className={styles.productDes}
                fontSize={{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }}
              >
                {item?.subTitle}
              </Typography>
              <Typography
                sx={{fontFamily:"NovemberPro-Reg"}}
                className={styles.productDes}
                fontSize={{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }}
              >
                {item?.des}
              </Typography>
              <Button
                sx={{ backgroundColor: "#333",fontFamily:"NovemberPro-Reg", textTransform:"capitalize" }}
                className={styles.productButton}
                variant="contained"
              >
                {item?.buttonText}
              </Button>
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default ProductGoals;
