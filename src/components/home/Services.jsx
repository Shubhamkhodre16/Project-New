import React from 'react'
import Grid2  from '@mui/material/Grid2'
import { Typography,Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import angular from '../../../public/assets/img/angular-icon.png'
import VuejsIcon from '../../../public/assets/img/vuejsIcon.png'
import TypeScript from '../../../public/assets/img/typescript.png'
import ReactIcon from '../../../public/assets/img/reactjs.png'
import HTML5 from '../../../public/assets/img/html.png'
import JavaScript from '../../../public/assets/img/javascript.png'
import nodejs from '../../../public/assets/img/node-js.png'
import RoR from '../../../public/assets/img/roricon.png'
import mongo from '../../../public/assets/img/mongoDbIcon.png'
import postsql from '../../../public/assets/img/postsql.png'
import Redis from '../../../public/assets/img/redis.png'
import AWSServices from '../../../public/assets/img/aws.png'
const Services = () => {
  return (
    <>
     <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: "30px",
        }}
      >
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", paddingBottom: "10px" }}
          >
            Your quest for hiring{" "}
            <span style={{ color: "#650909" }}> dedicated </span>remote
            developers ends here
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { lg: "20px", md: "18px", sm: "15px", xs: "12px" },
            }}
          >
            It doesn’t matter what tech resources you are looking for, we
            possess a team of offshore dedicated development experts having the
            years of experience in all the leading tools and technologies.
            Associate with InfoKoders technologies, handpick your tech team, and
            achieve short and long-term business objectives.
          </Typography>
        </Grid2>
      </Grid2>
      

    <Grid2
      container
      spacing={3}
      sx={{
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingBottom:"30px",
        
      }}
    >
     
      <Grid2
        size={{xs:12 , md:6}}
          
        sx={{
          padding: "20px",
          border: "1px solid #ebebeb",
          borderRadius: "8px",
          display: "flex",
          flexDirection: {sm:"column",md:"row"} ,
          justifyContent: "center",
          
        }}
      >
        <Grid2 size={{xs:12,md:6}}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            marginBottom: "10px",
            fontSize:{md:"26px",sm:"24px",lg:"40px"}
          }}
        >
          <span style={{ color: "#650909" }}>Frontend </span>development
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Avail top-notch app development services by hiring our skillful front-end developers that have delivered game-changing solutions.
        </Typography>
        <Link
          href=""
          style={{ color: "#650909", textDecoration: "underline" }}
        >
          Own your team
        </Link>
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",gap:"20px" }}>
          <span style={{ textAlign: "center",marginBottom:"10px" }}>
            <Image
              src={angular}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
               
              }}
              width={70}
              height={70}
              alt="angular"
            />
          Angular
          </span>

          <span style={{ textAlign: "center" ,marginBottom:"10px"}}>
            <Image
              src={VuejsIcon}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
              width={70}
              height={70}
              alt="Vue.js"
            />
            Vue.js
          </span>
          <span style={{ textAlign: "center" }}>
            <Image
              src={TypeScript }
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
              width={70}
              height={70}
              alt="TypeScript"
            />
            TypeScript


          </span>

    
         
        </Box>
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",gap:"20px" }}>
          <span style={{ textAlign: "center", marginBottom:"10px"}}>
            <Image
              src={ReactIcon}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
              width={70}
              height={70}
              alt="REactjs"
            />
           React
          </span>

          <span style={{ textAlign: "center",marginBottom:"10px" }}>
            <Image
              src={HTML5}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
              width={70}
              height={70}
              alt="HTML5"
            />
            HTML5
          </span>
          <span style={{ textAlign: "center",marginBottom:"10px" }}>
            <Image
              src={JavaScript}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
              width={70}
              height={70}
              alt="javascript"
            />
            JavaScript
          </span>

         
        </Box>
        </Grid2>
      </Grid2>
      <Grid2
        size={{xs:12 , md:6}}
          
        sx={{
          padding: "20px",
          border: "1px solid #ebebeb",
          borderRadius: "8px",
          display: "flex",
          flexDirection: {sm:"column",md:"row"} ,
          justifyContent: "center",
          
        }}
      >
        <Grid2 size={{xs:12,md:6}} >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            marginBottom: "10px",
            fontSize:{md:"26px",sm:"24px",lg:"40px"}
          }}
        >
          <span style={{ color: "#650909" }}>Backend  </span>development
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Attract your end-customers by picking our offshore development team notable for developing solutions that deliver outstanding user experience
        </Typography>
        <Link
          href=""
          style={{ color: "#650909", textDecoration: "underline" }}
        >
          Own your team
        </Link>
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",  gap:"10px"}}>
          <span style={{ textAlign: "center",marginBottom:"10px" }}>
            <Image
              src={nodejs}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
             
              }}
              width={70}
              height={70}
              alt="nodejs"
              
            />
            Node.js
          </span>

         

         
        </Box>
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",gap:"20px" }}>
          <span style={{ textAlign: "center"  }}>
            <Image
              src={RoR}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
               
              }}
              width={70}
              height={70}
              alt="ROR"
              
            />
           ROR
          </span>

        

         
        </Box>
        </Grid2>
      </Grid2>

   
      
    </Grid2>
    <Grid2
      container
      spacing={3}
      sx={{
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingBottom:"30px",
        
      }}
    >
     
      <Grid2
        size={{xs:12 , md:6}}
          
        sx={{
          padding: "20px",
          border: "1px solid #ebebeb",
          borderRadius: "8px",
          display: "flex",
          flexDirection: {sm:"column",md:"row"}, 
          justifyContent: "center",
          
        }}
      >
        <Grid2 size={{xs:12,md:6}}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            marginBottom: "10px",
            fontSize:{md:"26px",sm:"24px",lg:"40px"}
          }}
        >
          <span style={{ color: "#650909" }}>Database </span>development
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Our offshore developers gather, organize, and extract key insights from massive amounts of data.
        </Typography>
       
        </Grid2>
        <Grid2 size={{xs:12,md:3,}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",gap:"20px" }}>
          <span style={{ textAlign: "center",marginBottom:"10px" }}>
            <Image
              src={mongo}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
               padding:"10px",
                marginBottom: "10px",
               
              }}
              
              width={70}  
              height={70}
              alt="mongodb"
             
            />
          MongoDB
          </span>

          <span style={{ textAlign: "center" ,marginBottom:"10px",}}>
          
            <Image
              src={postsql}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                 
                marginBottom: "10px",
              }}
             
              width={70}
              height={70}
              alt="PostgreSQL"
              
            />
           
            PostgreSQL
            
          </span>
          
    
         
        </Box>
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",gap:"20px" }}>
          <span style={{ textAlign: "center", marginBottom:"10px"}}>
            <Image
              src={Redis}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                  padding:"10px",
                marginBottom: "10px",
              }}
              width={70}  
              height={70}
             
              
              alt="Redis"
              
            />
           Redis
          </span>

          
        

         
        </Box>
        </Grid2>
      </Grid2>
      <Grid2
        size={{xs:12 , md:6}}
          
        sx={{
           padding: "20px",
          border: "1px solid #ebebeb",
          borderRadius: "8px",
          display: "flex",
          flexDirection: {sm:"column",md:"row"}, 
          justifyContent: "center",
         
        }}
      >
        <Grid2 size={{xs:12,md:6}} >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            marginBottom: "10px",
            fontSize:{md:"26px",sm:"24px",lg:"40px"}
          }}
        >
          <span style={{ color: "#650909" }}>Cloud   </span>services
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Cloud services provide users with duplicating and scaling, great flexibility, resources to balance the requirements of users and hosted applications and solutions.
        </Typography>
       
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"}, alignItems: "center",gap:" 20px", }}>
            
          <span style={{ display:"flex",flexDirection:"column",alignItems:"center", textAlign: "center",paddingBottom:"22px" }}>
          
            <Image
              src={AWSServices}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              
             
              }}
              width={70}
              height={70}
              alt=" AWS Services"
             
            />
           
            AWS Services
         
          </span>
          <span style={{display:"flex",alignItems:"center",flexDirection:'column', textAlign: "center", paddingBottom:"22px" }}>
           
            <Image
              src={AWSServices}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              
             
              }}
              width={70}
              height={70}
              alt="Digital Ocean"
             
            />
           
            
          Digital Ocean
        
          </span>
        
           
          <span style={{display:"flex",alignItems:"center",flexDirection:"column", textAlign: "center" ,paddingBottom:"22px" }}>
        
            <Image
              src={AWSServices}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
            
               
              }}
              width={70}
              height={70}
              alt="Engine Yard"
              
            />
           
            
          Engine Yard
          </span>
          

         

         
        </Box>
        </Grid2>
        <Grid2 size={{xs:12,md:3}}>
        <Box sx={{ display: "flex", flexDirection: {lg:"column",sm:"row",md:"column", xs:"column"},alignItems:"center", gap:"20px"}}>
          <span style={{display:"flex", flexDirection:"column", textAlign:"center",alignItems:"center"}}>
        
           <Image
              src={AWSServices}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
               
               
              }}
              width={70}
              height={70}
              alt="Google Cloud Services "
             
            /> 
          
            
           Google Cloud Services
           
          </span>
          <span style={{textAlign:"center", display:"flex",flexDirection:"column",alignItems:"center" }}>
            
            <Image
              src={AWSServices}
              style={{
                border: "1px dotted black",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
               
                
              }}
              width={70}
              height={70}
              alt="Heroku"
              
            />
           Heroku
           
          </span>

        

         
        </Box>
        </Grid2>
      </Grid2>

   
      
    </Grid2>
  
    </>
  )
}

export default Services