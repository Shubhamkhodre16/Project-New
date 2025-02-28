import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box,CardMedia,Button } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
const ReactDevelopment = () => {
  const cards=[
    {
      image:"/assets/img/agiledevelopment.gif",
      title:"Custom Development",
      desc:" We build customized matching solutions up to your enterprise and project needs. After investigating your business goals and objectives, our team makes tailors feature-rich native applications for a larger audience and provides a better user experience. ",
      button:"More Details",
      path: "/custom",
    },
    {
      image:"/assets/img/agiledevelopment.gif",
      title:"UX/UI Development",
      desc:"Our expertise and technology evolves continuously with new tools, frameworks and libraries along with a plethora of options for marketers and entrepreneurs. React JS is the best platform to develop UIs for mobile and web apps both without bugs and reading facilitation.",
      button:"More Details",
       path:"/uidevelop"
    },
    {
      image:"/assets/img/agiledevelopment.gif",
      title:"Integration & Migration",
      desc:"We provide hassle-free migration services to adjust your offering to new market demands, updates and cloud integration. Our experts help you to migrate your existing website with multi-platform support without affecting your business cycle.",
      button:"More Details",
      path:"/integration"
    },
    {
      image:"/assets/img/agiledevelopment.gif",
      title:"Maintenance & Upgradation",
      desc:"Our React development services offer all essential maintenance services and take care of browser security updates. We are always ready to take challenges based on customer marketing strategies to increase user satisfaction levels.",
      button:"More Details",
      path:"/maintenance"
    }
  ]
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundReact}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "45px",
            lg: "45px",
            xl: "45px",
          }}
          sx={{ paddingTop: "200px !important" ,fontFamily:"NovemberPro"}}
        >
          React Js
        </Typography>
        <Typography
          className={styles.imageSubTitle}
          sx={{fontSize:{
            xs: "18px",
            sm: "18px",
            md: "20px",
            lg: "25px",
            xl: "25px",},fontFamily: "NovemberPro-Reg"
          }}
        >
          InfoKoders Technologies delivers interactive designs for multiple web
          and mobile development projects. We are a renowned an,d leading Custom
          Application Development company building innovative applications such
          as UI/UX design, development, deployment, maintenance, and support.
          With our expertise and professional values, we adhere to providing
          exclusive and customized React.js Apps for all businesses and
          enterprises.
        </Typography>
      </Grid>
      <Grid container spacing={4} className={styles.cardsReact}>
              {cards?.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 12, md:6, lg: 6 }}
                  key={index}
                  className={styles.uspBoxPartner}
                >
                  <CardMedia
                    sx={{ width: "90px", height: "90px", marginBottom: "20px" }}
                    component="img"
                    image={item?.image}
                  />

                  <Typography
                    className={styles.uspBoxTitle}
                    sx={{
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                      },fontFamily: "NovemberPro",
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    className={styles.uspBoxDesc}
                    sx={{
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "16px",
                        xs: "16px",
                      },fontFamily: "NovemberPro-Reg",
                    }}
                  >
                    {item?.desc.length>170 ?`${item?.desc.slice(0,170)}...`:item.desc}
                  </Typography>
                  <Link href={`/reactt/${item.path}`} passHref>
                  <Button sx={{fontSize:{lg:"16px",md:"14px",sm:"16px",xs:"14px"},fontFamily:"NovemberPro-Reg",cursor:"pointer",padding:"8px 18px",border:"1px solid transparent",color:"#ffffff",backgroundColor:"#333",margin:"1rem 0 1rem 0",textTransform:"none"}}>{item?.button}</Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
      <Footer/>
    </Box>
  );
};

export default ReactDevelopment;
