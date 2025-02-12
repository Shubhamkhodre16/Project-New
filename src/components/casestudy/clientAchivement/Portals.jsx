import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import whitewave from "../../../../public/assets/img/about-img.jpg";

const Portal = () => {
  return (
    <>
      <Box>
        <Grid className={styles.productMain}>
          <Grid container spacing={2} className={styles.productContainer}>
            <Grid size={{ xs: 12, sm: 12, md: 6, xl: 6 }}>
              <Typography className={styles.productHeading}>
                Working of the Portal:
              </Typography>
              <Typography>
                We have created a two-sided mark    etplace by harnessing the
                potential of enterprise-grade technology that precisely matches
                the private funding with student wants.
              </Typography>
              <Typography>
                Firstly are the college students who set the foot into this
                portal to apply for private scholarships or grants and secondly
                are around 300 sponsors unleashing a greater range of grants and
                scholarships from foundations, private companies, universities,
                and colleges.
              </Typography>
              <Typography>
                Firstly are the college students who set the foot into this
                portal to apply for private scholarships or grants and secondly
                are around 300 sponsors unleashing a greater range of grants and
                scholarships from foundations, private companies, universities,
                and colleges.
              </Typography>
            
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, xl: 6 }}
              className={styles.productData}
            >
              <Image
                src={whitewave}
                alt="White Wave"
                width={400}
                height={100}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portal;