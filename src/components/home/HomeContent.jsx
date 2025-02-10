import React from 'react'
import { Typography,Box, CardContent } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import Image from 'next/image'
import aboutbanner from "../../../public/assets/img/ror-banner.png";
import CardSection from '../../app/career/CardSection';
import Card from '@mui/material/Card';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import DataBackup from "../../../public/assets/img/DataBackup.gif";
import customers from "../../../public/assets/img/customers.gif";
import globle from "../../../public/assets/img/globle.gif";
import teammember from "../../../public/assets/img/teammember.gif";
import CardMedia from '@mui/material/CardMedia';
import dataprotect from "../../../public/assets/img/dataprotections.gif";
import agileDevelop from "../../../public/assets/img/agiledevelopment.gif";
import customersupport from "../../../public/assets/img/customersupport.gif";
import Industry from './Industry';
const HomeContent = () => {

  return (
    <>
            {/* Who We Are  section */}
         <Box
        sx={{
          backgroundImage: "url(assets/img/bg-shape1-home5.png)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        //   padding: "100px 0px 100px 0px",
          paddingTop: { sm: "20px", xs: "20px" },
          marginY:"50px",
          
        }}
      >
        <Grid2
          container
          sx={{
           
            display:"flex",
            justifyContent:"center"
          }}
        >
          <Grid2
            size={{ xs: 12 ,lg:4, md: 6 }}
            sx={{ display: "flex", justifyContent: "right" }}
          >
            <Image
              src={aboutbanner}
              alt="About Us"
              width={700}
              height={550}
              // layout="intrinsic"
            />
          </Grid2>

          <Grid2
            size={{ xs: 12,lg:6, md: 6 }}
            sx={{
            //   display: "flex",
            //   flexDirection: "column",
              //justifyContent: "start",
             
            }}
          >
            <Box sx={{padding:"15px"}} >
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: " #650909",
                  //fontSize: { sm: 30, xs: 26, md: 40 },
                  textAlign: {
                    sm: "center",
                    xs: "center",
                    md: "left",
                    lg: "left",
                  },
                  marginBottom:"20px"
                }}
                
              >
                Who We Are
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
               
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  paddingBottom: "10px",
                 
                  lineHeight:"1.2",
                  fontSize: { lg:"35px",sm: "20px", xs: "18px" },
                  
                }}
              
              >
                Recognized as the Best Ruby on Rails and Product Engineering
                Company
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "14px" },
                   lineHeight: "1.5",
                  color: "#333",
                  marginBottom:"1rem"
                 
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
                variant="body2"
                sx={{
                  fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "14px" },
                  lineHeight: "1.5",
                 color: "#333",
                 marginBottom:"1rem"
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
        {/*Our key Morals that draw your trust*/}
        <Grid2
        sx={{
          backgroundImage: "url(assets/img/bg-shape1-home5.png)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          marginTop:"40px"
        }}
      >
        <Grid2
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: { lg: "40px", md: "30px", sm: "0px", xs: "6px" },
          }}
        >
          <Grid2
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ marginTop: "70px" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { lg: "30px", md: "20px", sm: "20px", xs: "20px" },
                marginBottom: { sm: "10px", xs: "10px" },
                textAlign: { lg: "left", sm: "center", xs: "center" },
              }}
            >
              Our key Morals that draw your trust
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: "1.5",
                fontSize: { lg: "18px", md: "16px", sm: "12px" },
                marginBottom: "20px",
                textAlign: { lg: "left", sm: "center", xs: "center" },
              }}
            >
              We emphasize on customer-centric model while delivering
              applications, which ultimately helps our clients achieve success
              and gain a competitive advantage over others.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                padding: "20px",
                marginX: { sm: "10px", xs: "8px" },
                marginBottom: "10px",
              }}
            >
              <Image src={DataBackup} alt="" height={80} width={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginY: 5,
                  transform: "rotate(90deg)",
                }}
              />
              <Box sx={{ fontWeight: "bold" }}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    {" "}
                    <li>30 +</li>
                  </Box>
                  <li>Technology </li>
                  <li>Solutions</li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                paddingY: "20px",
                marginBottom: "10px",
                marginX: { sm: "10px", xs: "8px" },
              }}
            >
              <Image src={customers} alt="" width={80} height={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginY: 5,
                  transform: "rotate(90deg)",
                }}
              />
              <Box sx={{ fontWeight: "bold" }}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    {" "}
                    <li>200 +</li>
                  </Box>
                  <li>Customers</li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                padding: "20px",
                marginX: { sm: "10px", xs: "8px" },
                marginBottom: "10px",
              }}
            >
              <Image src={globle} alt="" width={80} height={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginTop: "38px",
                  transform: "rotate(90deg)",
                }}
              />
              <Box sx={{ fontWeight: "bold" }}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    <li>100 %</li>
                  </Box>
                  <li>Customer</li>
                  <li> satisfaction</li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #ebebeb",
                padding: "20px",
                marginBottom: "10px",
                marginX: { sm: "10px", xs: "8px" },
              }}
            >
              <Image src={teammember} alt="" width={80} height={60} />
              <Divider
                variant="middle"
                sx={{
                  border: "1px solid #ebebeb",
                  width: "20%",
                  marginY: 5,
                  transform: "rotate(90deg)",
                }}
              />
              <Box sx={{ fontWeight: "bold" }}>
                <ul>
                  <Box sx={{ fontSize: "24px" }}>
                    <li>100 +</li>
                  </Box>
                  <Box>
                    <li>Team</li>
                    <li> Members</li>
                  </Box>
                </ul>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ marginTop: "50px" }}
          >
            <Box>
              {/* <LordIcon  src={technologyjson} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/> */}
              <Card
                sx={{
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                 
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  paddingY: "60px",
                  marginBottom: "30px",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                }}
              >
              
                  <Link href="">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",

                        "&:hover": {
                          backgroundColor: "white !important",
                        },
                      }}
                    >
                      <CardMedia
                        sx={{ width: "30%" }}
                        component="img"
                        height="60px"
                        width="80px"
                        image="./assets/img/DataBackup.gif"
                      />

                      {/* <lord-icon  src={databackups} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/>  */}
                    </Box>
                  </Link>

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      Data Backups
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      The first imperative step in our product development
                      process is gathering requirements and analyzing it.
                    </Typography>
                  </CardContent>
                
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  paddingY: "60px",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                }}
              >
               
                  <Link href="">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "30px",
                      }}
                    >
                      <CardMedia
                        sx={{ width: "30%" }}
                        component="img"
                        height="60px"
                        image="/assets/img/dataprotections.gif"
                        alt="backup"
                      />
                    </Box>
                  </Link>

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      Data protection
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      The first imperative step in our product development
                      process is gathering requirements and analyzing it.
                    </Typography>
                  </CardContent>
               
              </Card>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box>
              {/* <LordIcon  src={technologyjson} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/> */}
              <Card
                sx={{
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  paddingY: "60px",
                  marginBottom: "20px",
                }}
              >
                
                  <Link href="">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <CardMedia
                        sx={{ width: "30%" }}
                        component="img"
                        height="60px"
                        image="/assets/img/agiledevelopment.gif"
                        alt="backup"
                      />
                    </Box>
                  </Link>

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      Agile development
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      We follow Agile Development Process, which enables us to
                      deliver the project with the highest quality and a solid
                      product.
                    </Typography>
                  </CardContent>
               
              </Card>
            </Box>
            <Box>
              {/* <LordIcon  src={technologyjson} trigger="loop" colors="primary:#121331,secondary:#650909" stroke="30" sx={{width:"150px",height:"150px"}}/> */}
              <Card
                sx={{
                  borderRadius: "18px",
                  
                  border: "1px solid transparent ",
                  transition: "   border 0.3s ease",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  paddingY: "60px",
                  marginX: { sm: "20px", xs: "20px", lg: "10px" },
                }}
              >
                
                  <Link href="">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <CardMedia
                        sx={{ width: "30%" }}
                        component="img"
                        height="60px"
                        image="/assets/img/customersupport.gif"
                        alt="backup"
                      />
                    </Box>
                  </Link>

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      Friendly Support
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      When it comes to providing beneficial support, you will
                      never across a team like InfoKoders software. We are
                      always there for clients right from the project idea
                      discussion to launch
                    </Typography>
                  </CardContent>
               
              </Card>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
      {/* Industries we serve */}
      <Industry/>
    </>
  )
}

export default HomeContent
