import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";



const Solutions = () => {
  return (
    <>
      <Box>
        <Grid className={styles.solutionsMain}>
          {/* kjhsfio */}
          <Grid className={styles.solutionContainer}>
            <Grid>
              <Typography className={styles.solutionHeading} >The Solution</Typography>
            </Grid>
            <Grid   container spacing={4}>
              <Grid size={{sm:12, md:6,lg:6,xl:6}}>
                <Typography>
                  InfoKoders technologies strategically developed, designed and
                  launched a profit-making and hassle-free tech-enabled online
                  scholarship management platform by clearly reflecting the
                  client vision.
                </Typography>
                <Typography>
                  The Cloud-based platform enables the student to search and
                  apply for various private education finance schemes based on
                  their qualification. Fund providers, industries, and
                  corporates can encourage skill development for struggling
                  students by drafting education finance schemes in this Online
                  Scholarship portal and effectively can manage these schemes.
                </Typography>
              </Grid>
              <Grid size={{sm:12, md:6,lg:6,xl:6}}>
                <Typography>
                  High tech automation functionalities integrated by our expert
                  developers facilitate the collection of customized
                  applications from candidates and assign them to the proper
                  reviewers.
                </Typography>
                <Typography>
                  Specifically built diverse modules depending on the specific
                  role such as
                </Typography>
                <Grid  container  >
                  <Grid spacing={1} size={{ xs:12,sm:12, md:6, lg:6,xl:6}}>
                  <Typography>1.sdffghg</Typography>
                  <Typography>1.sdffghg</Typography>
                  </Grid>
                  <Grid spacing={1} size={{ xs:12,sm:12, md:6,lg:6,xl:6}}>
                  <Typography>1.sdffghg</Typography>
                  <Typography>1.sdffghg</Typography>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Solutions;
