import React from 'react'

import  Grid2  from '@mui/material/Grid2'
import Image from 'next/image'
import { Box,Typography } from '@mui/material'

const Industry = () => {
    const industry=[{
        title:"01",
        name:"Retail & eCommerce",
        image:'/assets/img/shoppingCart.gif'
    },
       {
        title:"02",
        name:"Education & Elearning",
        image:'/assets/img/educationandelearning.gif'
       },
       {
        title:"03",
        name:"Healthcare&fitness",
        image:'/assets/img/healthcare.gif'
       },
       {
        title:"04",
        name:"Logistics&distribution",
        image:'/assets/img/logisticsanddistribution.gif'
       },
       {
        title:"05",
        name:"Social networking",
        image:'/assets/img/socialnoetwork.gif'
       },
       {
        title:"06",
        name:"Real estate",
        image:'/assets/img/realestate.gif'
       },
       {title:"07",
       name:"Travel&Hospitality",
       image:'/assets/img/travelandhospital.gif'
      },
     { title:"08",
      name:"Food&Restaurant",
      image:'/assets/img/foodandrestuarant.gif'
     },
     {
        title:"09",
        name:"On-demand solutions",
        image:'/assets/img/ondemand.gif'
       
     }
]

  return (
    <>
         <Box
             sx={{
               backgroundColor: "#181836",
               width: "100%",
              paddingY: "60px",
              paddingX: "40px",
             }}
           >
    <Grid2 container spacing={2} sx={{ display:"flex",justifyContent:"center",alignItems:"center" }}>
      <Grid2 size={{xs:12}} >
      <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        paddingBottom: "20px",
                        marginLeft: {
                            lg: "150px",
                            sm: "10px",
                            xs: "10px",
                            md: "75px",
                          },
                      }}
                    >
                      Industries we serve
                    </Typography>
                    </Grid2>
    {industry?.map((item,index)=>( 
      
     <Grid2  key={index} sx={{display:"flex", justifyContent:"center", alignItems:"center", marginX:{lg:"10px" ,md:"0px",sm:"0px"}, marginBottom:"20px" }}  size={{ xs: 12,lg:3,md:4,sm:6 }}  >
      
     <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "20px",
                        
                      minWidth:"240px",
                      height:"200px",
                      width:"100%",
                     boxSizing:"border-box",
                    
                      display: "flex",
                      justifyContent:  "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <ul>
                      <li>
                        <Typography
                          variant="h3"
                          sx={{ opacity: "0.1", marginBottom: "20px" }}
                        >
                          {item.title}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body2"
                          sx={{
                            textTransform: "uppercase",
                            
                            fontSize: {
                              lg: "14px",
                              md: "12px",
                              sm: "12px",
                              xs: "12px",
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      </li>
                    </ul>
                    <Image
                      src={item.image}
                      alt="Logistics & Distribution "
                      width={70}
                      height={60}
                    />
                  </Box>
                 
     </Grid2>
    
     ))}
     </Grid2>
     </Box>
    </>
  )
}

export default Industry