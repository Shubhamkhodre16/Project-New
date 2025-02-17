import React, { useEffect, useState } from 'react'
import Carousel from '../home/Carousel'
import { Box, Button,  Typography } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import revolutionary from '../../../public/assets/img/revolutionaryPrototype.png'
import Image from 'next/image'
import styles from '../../styles/Startup.module.css'
import trustedPartner from '../../../public/assets/img/techPartnerRegular.gif'
import techPartnerLeft from '../../../public/assets/img/techPartnerLeft.gif'
import techPartnerRight from '../../../public/assets/img/techPartnerRight.gif'
import PrototypeCard from './PrototypeCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
const Prototype = () => {
  const upliftData=[
    { 
      title:"Quick time to market",
      desc:"We hold a highly capable development team that has years of experience, assuring you to build the product in less duration of time. With hands-on over 500+ skillful InfoKoders Technologies engineers, you’ll get stunned to see how speedily we built your high-tech product.",
     },
     {
      title:"World-class engineers with great experience",
      desc:"The success of your product completely lies in the hands of the people who are going to develop it. That’s the reason InfoKoders Technologies attentively hires those resources that have the zeal to turn out any challenging requirement into a world-class product.",
     },
     {
      title:"Affordable product development",
      desc:"We believe in becoming successful by making struggling start-ups successful. By hiring us as your desired Product development company you will save up to 50%-70% of development costs without compromising on the quality or functionality of the product.",
     },
     {
      title:"100% Transparency and control",
      desc:"The transparency factor is most imperative to our organization. You’ll always be in the loop of every phase of the product development process. Right from knowing the responsibilities of each member to learning how the tasks are been achieved, you’ll be in the driver seat of your product car.",
     },
     {
      title:"Quality guarantees",
      desc:"When it comes to building quality-rich products at an economical cost, you’ll find yourself lucky by choosing InfoKoders Technologies as your startup accelerating partner. With 5 years of experience in the technological world, we have showered our excellence by transforming the start-ups from zero to heroes.",
     },
     {
      title:"Start-up oriented teams helping with innovative ideas",
      desc:"Along with accomplishing the classic work, our teams have been honored for sharing profitable ideas that brought worth to their dream products"
     }
  ]
  const images=[
   {
      image:"/assets/img/amazon.png",
   },
   { 
      image:"/assets/img/heroku.png",
   },
   {
      image :"/assets/img/mongoDbs.png",
   },
   {
      image:"/assets/img/node.png",
   },  
   {
      image: "/assets/img/react.png",
   },
   { 
      image:  "/assets/img/reduxs.png",
   },
   {
      image:  "/assets/img/ror.png",
   },
   {
      image:  "/assets/img/salesforce1.png",
   },
   {
      image:  "/assets/img/vuejs 1.png",
   },
   {
      image:  "/assets/img/webpacks.png",
   },
   {
      image:"/assets/img/html1.png",
   },
   {
      image: "/assets/img/sasss.png",
   }
  ]
  const[currentSlide,setCurrentSlide]=useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const totalSlides = Math.ceil(images.length/5);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); 
    return () => clearInterval(intervalId); 
  }, [ totalSlides]);
   return (
    <>
    <Box>
      {/* { image slider} */}
      <Grid2 container spacing={2} className={styles.imageSLider}> 
        <Grid2 size={{xs:12,sm:12,md:12,lg:12}} className={styles.imageGrid} style={{ transform: `translateX(-${currentSlide * 20}%)`, width: '100%',    transition: isFirstRender ? 'none' : 'transform 5s ease-in-out',display:"flex" }} >
          { images.map((item,index)=>(
          <Box key={index} className={styles.imageBox}>
          <Image src={item.image} alt='image' width={200} height={200}/>
          </Box>
          ))}
          </Grid2>
         </Grid2>
      {/* Prototype Section */}
       <Grid2 container  className={styles.PrototypeContainer}>
        <Grid2 size={{xs:12,sm:12,md:12,lg:6}} className={styles.PrototypeImage} >
         <Image src={revolutionary} alt="revolutionary" width={600} height={300}/>
         </Grid2>
         <Grid2 size={{xs:12,sm:12,md:12,lg:6}} className={styles.PrototypeContent} >
          <Typography className={styles.PrototypeTitle} sx={{fontSize:{lg:"30px",md:"26px ",sm:"26px",xs:"22px"},}}>Navigating the tech and Non- tech Start-ups towards success heights with our durable software development solutions</Typography> 
          <Typography className={styles.PrototypeSubtitle} sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}}>We are here to breathe life into your start-up dreams. InfoKoders Technologies is been recognized as a one-stop source to embrace winning software development solutions at a budget-friendly cost. Our ultimate aim is to shine struggling start-ups into the most successful ones that they ever dreamed of. Be it providing you with a passionate, dedicated, and expertise software development team or taking the ownership of your start-up product development into our hands we are ready to help you in every possible way that you are desiring for.</Typography>
          <Button  className={styles.PrototypeButton} sx={{fontSize:{lg:"16px",md:"16px",sm:"16px",xs:"14px"}}} >Get a revolutionary Prototype</Button>
         </Grid2>
        </Grid2>
        {/* Trusted tech partner  */}
       <Grid2 container className={styles.techPartnerContainer}>
        <Grid2 size={{xs:12,sm:12,lg:12,md:12}} className={styles.techPartner} >
          <Image src={trustedPartner} alt='techPartner' width={80} height={80}/>
          <Typography className={styles.techPartnerTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"},backgroundColor:"#333"}} > A Trusted tech partner for start-ups
          and start-up accelerators</Typography>
        </Grid2>
        <Grid2  className={styles.techPartnerStartup}>
          <Grid2 size={{xs:12,sm:12,md:6,lg:6}} className={styles.techPartnerLeft}>
            <Image src={techPartnerLeft} className={styles.techPartnerImage} alt='techPartnerLeft' width={80} height={80}/>
            <Typography className={styles.techPartnersTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}}>For Start-ups</Typography>
            <Typography className={styles.techPartnersSubTitle} sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}} >Being a profitable product development company for start-ups, we aim for the speedy launch of products before any of your competitors set foot into the fast-paced market. Beginning from start-up culture we completely understand how challenging it is to keep an eye on every problem and address it with best-fit solutions.</Typography>
           <Typography className={styles.techPartnersSubTitle} sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}}>We collaborate with start-up founders, deeply understand the project concept, and brainstorm to generate unique ideas. Followed by crafting a detailed roadmap of the next steps, then getting into the product design stage. Under this stage, we attractively design the product user experience and user interface that depict your business goals and raise your end-users expectations. Lastly, we develop a quality rich and bug-free product and smoothly launch it on the market.</Typography>
            <Button className={styles.PrototypeButton} sx={{fontSize:{lg:"16px",md:"16px",sm:"16px",xs:"14px"},backgroundColor:"#333"}}>Let your product rock with us</Button>
          </Grid2>
          <Grid2 size={{xs:12,sm:12,md:6,lg:6}} className={styles.techPartnerRight}>
            <Image src={techPartnerRight} className={styles.techPartnerImage} alt='techPartnerRight' width={80} height={80}/>
            <Typography className={styles.techPartnersTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}}>For Start-up accelerators</Typography>
            <Typography className={styles.techPartnersSubTitle} sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}}>Enable your start-ups to grow products while we look after the software. InfoKoders technologies can be your next-age digital transformation tech partner as are been admired for our systematic product development workflow.</Typography>
            <Typography className={styles.techPartnersSubTitle} sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}}>As per the reports around 20% of start-ups face failure in their initial first year due to poor technical implementation, unstructured workflow, and many other reasons. With high proficient years of software development experience, by scaling the start-ups from 0 to 2M users and holding an exceptional track record we are capable enough to be your exclusive tech partner. Full-fledged Products we have delivered for (client names) and many startups have raised the start-ups standard and helped the founders to stay on top of the competitors.</Typography>
            <Button className={styles.PrototypeButton} sx={{fontSize:{lg:"16px",md:"16px",sm:"16px",xs:"14px",marginTop:"30px"},backgroundColor:"#333"}}>Join hands as a tech partner</Button>
          </Grid2>
        </Grid2>
       </Grid2>
       {/* You wish we serve */}
       <Grid2 container className={styles.weServer}>
        <Grid2 size={{xs:12,sm:12,md:12,lg:12}} className={styles.youWish} >
          <Typography className={styles.youWishTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}} > You wish we serve</Typography>
          <Typography className={styles.youWishDesc}  sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}}>Whether you’re intending to build an impressive prototype for getting funding, an MVP to
              turn out a powerful product, or an effective solution to build from scratch, we as
              your ambitious software development company going to support you in every challenging
              start-up phase</Typography>
        </Grid2>
        <PrototypeCard/>
        </Grid2>
        {/* Advantageous Info of InfoKoders */}
        <Grid2 container spacing={6} className={styles.infoContainer} >
          <Grid2 size={{xs:12,sm:12,md:12,lg:6}} className={styles.infocontent}>
            <Typography className={styles.infoTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}} >Advantageous Info of InfoKoders Technologies Software Development Teams for Start-ups</Typography>
            <Typography className={styles.infoSubTitle} sx={{fontSize:{lg:"22px",md:"20px ",sm:"20px",xs:"18px"},}}>We understand the complication of getting the right people who can smoothly manage the whole product development process, but not with InfoKoders Technologies. Our unique methodology, systematic product development process, and skillful resources have been praised by our beloved clients</Typography> 
          </Grid2>
          <Grid2 size={{xs:12,sm:12,md:12,lg:6}} className={styles.boxGrid} >
              <Grid2  className={styles.whiteBox}>
                <Typography className={styles.whiteBoxTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}}>100+</Typography>
                <Typography className={styles.whiteBoxDesc} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"18px"}}} >Engineers across USA and UAE</Typography>
              </Grid2>
              <Grid2  className={styles.whiteBox}>
                <Typography className={styles.whiteBoxTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}} >20+</Typography>
                 <Typography className={styles.whiteBoxDesc} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"18px"}}}>Successfully launched tech products</Typography>
              </Grid2>
              <Grid2  className={styles.whiteBox}>
                <Typography className={styles.whiteBoxTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}} >2</Typography>
                <Typography className={styles.whiteBoxDesc} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"18px"}}}>Years of experience</Typography>
              </Grid2>
          </Grid2>
        </Grid2>
        {/* obstacles InfoKoders */}
        <Grid2 container spacing={3} className={styles.obstaclesContainer}>
          <Grid2 size={{xs:12,sm:12,md:6,lg:6}} className={styles.obstaclesLeft}>
            <Typography className={styles.obstaclesLeftTitle}sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}}>What obstacles InfoKoders Technologies can tackle for startups?</Typography>
            <Typography className={styles.obstaclesLeftDesc} sx={{fontSize:{lg:"22px",md:"20px",sm:"20px",xs:"18px"}}} >In a start-up journey, you probably have come through a lot of rough paths, however, we are going turn out to be your supportive software development team that going to rescue your startup from all struggles like:</Typography>
          </Grid2>
          <Grid2 size={{xs:12,sm:12,md:6,lg:6}} className={styles.obstaclesRight}>
            <Typography className={styles.obstaclesRightTitle} sx={{fontSize:{lg:"22px",md:"20px",sm:"20px",xs:"18px"}}}>
              <FontAwesomeIcon className={styles.obstaclesRightIcon} icon={faCircleDot} />Software development cost
            </Typography >
            <Typography className={styles.obstaclesRightTitle} sx={{fontSize:{lg:"22px",md:"20px",sm:"20px",xs:"18px"}}}>
              <FontAwesomeIcon className={styles.obstaclesRightIcon} icon={faCircleDot}/> Slow or bugs loaded product development
            </Typography>
            <Typography className={styles.obstaclesRightTitle} sx={{fontSize:{lg:"22px",md:"20px",sm:"20px",xs:"18px"}}}>
              <FontAwesomeIcon className={styles.obstaclesRightIcon} icon={faCircleDot}/> Unsystematic software development process
            </Typography >
            <Typography className={styles.obstaclesRightTitle} sx={{fontSize:{lg:"22px",md:"20px",sm:"20px",xs:"18px"}}}>
              <FontAwesomeIcon className={styles.obstaclesRightIcon} icon={faCircleDot}/>Lack of knowledgeable software engineers
            </Typography>
            <Typography className={styles.obstaclesRightTitle} sx={{fontSize:{lg:"22px",md:"20px",sm:"20px",xs:"18px"}}}>
              <FontAwesomeIcon className={styles.obstaclesRightIcon} icon={faCircleDot}/>Complications in scaling product development
            </Typography>
          </Grid2>
        </Grid2>
         {/*Uplift your startup? */}
        <Grid2 container spacing={3} className={styles.upliftStartup}>
          <Grid2 size={{xs:12,sm:12,md:12,lg:12}}>
            <Typography className={styles.upliftStartupTitle} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}} >Why choose InfoKoders Technologies to Uplift
            your startup?</Typography>
          </Grid2>
          <Grid2 size={{xs:12,sm:12,md:6,lg:6}} >
              {upliftData.map((item,index)=>(
                index%2===0 && (
                <div key={index}>
                <Typography className={styles.upliftData} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}} >{item.title}</Typography>
                <Typography className={styles.upliftDataDesc} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"18px"}}}>{item.desc}</Typography>
                </div>
            )  ))}
          </Grid2>
          <Grid2 size={{xs:12,sm:12,md:6,lg:6}}  >
              {upliftData.map((item,index)=>(
                index%2!==0 &&(
                <div key={index}>
                <Typography className={styles.upliftData} sx={{fontSize:{lg:"30px",md:"26px",sm:"26px",xs:"22px"}}}>{item.title}</Typography>
                <Typography className={styles.upliftDataDesc} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"18px"}}}>{item.desc}</Typography>
                </div>
            )  ))}
          </Grid2>
        </Grid2>
       </Box>
    </>
  )
}

export default Prototype