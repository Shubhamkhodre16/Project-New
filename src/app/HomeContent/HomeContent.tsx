import React from 'react'
import { Typography,Box } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import Image from 'next/image'
import aboutbanner from "../../../public/assets/img/ror-banner.png";
import CardSection from '../CardSection/CardSection';
const HomeContent = () => {
  return (
    <>
            {/* Who We Are  section */}
         <Box
        sx={{
          backgroundImage: "url(assets/img/bg-shape1-home5.png)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          padding: "100px 0px 100px 0px",
          paddingTop: { sm: "20px", xs: "20px" },
          
        }}
      >
        <Grid2
          container
          sx={{
            paddingLeft: { lg: "30px", md: "20px", sm: "10px", xs: "5px" },
            paddingRight: { lg: "50px", md: "30px", sm: "20px", xs: "10px" },
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={aboutbanner}
              alt="About Us"
              width={550}
              height={450}
              // layout="intrinsic"
            />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: " #650909",
                  fontSize: { sm: 30, xs: 26, md: 40 },
                  textAlign: {
                    sm: "center",
                    xs: "center",
                    md: "left",
                    lg: "left",
                  },
                }}
                component="h4"
                gutterBottom
              >
                Who We Are
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#2d2d2d",
                  paddingBottom: "10px",
                  fontSize: { sm: 26, xs: 22 },
                  textAlign: { sm: "center", lg: "left", md: "left" },
                }}
                gutterBottom
              >
                Recognized as the Best Ruby on Rails and Product Engineering
                Company
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { lg: "24px", md: "20px", sm: "18px", xs: "16px" },
                  lineHeight: "1.4",
                  color: "#555",
                }}
              >
                As today’s competitive world stepping into digital approaches,
                and digital transformation becoming more than a buzzword, it’s
                become essential than ever for your business to collaborate with
                the top software application development company that serves
                valuable tech development services and solutions at an
                economical budget. This is where InfoKoders technologies comes
                in!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { lg: "24px", md: "20px", sm: "18px", xs: "16px" },
                  lineHeight: "1.4",
                  color: "#555",
                  paddingTop: "10px",
                }}
              >
                InfoKoders technologies is the unmatched destination to embrace
                exceptional Software development and business-centric
                technological solutions. Whether you're a startup, SMB, or a
                large corporation, we can help you plan your digital path with
                expert consultancy, services, and solutions. Make the most from
                our long-standing expertise and imagine the endless digital
                possibilities.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
            {/* //How We Drive Business? */}
      <Grid2
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px",
          
          }}
        >
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              How We Drive Business?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { lg: "20px", md: "18px", sm: "15px", xs: "12px" },
              }}
            >
              We bring the right scope of services that drives impact by
              unlocking next-gen analytics and effectively transform your
              business operations.
            </Typography>
          </Grid2>
        </Grid2>
        {/* card section */}
        <CardSection/>
    </>
  )
}

export default HomeContent
