"use client";

import Carousel from "../components/home/Carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OurProcess from "../components/home/OurProcess";
import Testinomials from "../components/home/Testinomials";
import OurBlog from "../components/home/OurBlog";
import Footer from "../components/footer/page";
import HomeContent from "../components/home/Homecontent";
import Services from "../components/home/Services"

export default function Home() {
  return (
    <div>
      <header>
        <title>InfoKoders Technologies</title>
        <meta
          name="description"
          content="Contact us form for Next.js project"
        />
      </header>

      <main className="mt-10 flex flex-col items-center  mb-20 ">
        {/* <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          mt={10}
          className="w-full text-center md:text-left"
        >
          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{ width: 60, bgcolor: "#650909", mt: 1, mr: { md: 1 } }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Circular, sans-serif",
              color: "#650909",
              fontSize: { xs: "20px", md: "25px" },
              mt: { xs: 2, md: 0 },
            }}
          >
            " We make great ideas come to life. "
          </Typography>

          {/* <LordIcon/> */}
        {/* </Box>  */}
        {/* <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          mt={5}
          className="w-full text-center md:text-left="
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Circular, sans-serif",
              fontWeight: "bold",
            }}
          >
            Driving Digital Innovation with Modern Web Technologies
          </Typography>
        </Box> */}
        {/* <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={2}
          className="w-full text-center"
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Circular, sans-serif",
              color: "#899394",
              textAlign: "center",
              display: "inline-block", // Ensures both lines align centrally
              maxWidth: "800px", // Adjust this value based on your layout needs
            }}
          >
            As a global digital product development and technology consulting
            leader, we help our clients become fluidic, innovative, and
            digital-first companies to win in their respective fields.
          </Typography>
        </Box> */}
{/* <Box sx={{marginBottom:"70px"}} >
  
<Link href="/contact">
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
          >
            Let's Talk
          </Button>
        </Link>


</Box> */}

    

      


       <Carousel />
       <HomeContent/>
       <OurProcess/> 
       <Services/>   
       <Testinomials/>
       <OurBlog/>

       {/* <Industries/> */}

       {/* </Box>  */}
        {/* <ContactForm /> */}
        {/* <About/> */}

      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
