"use client";
import Carousel from "../components/home/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProcess from "../components/home/OurProcess";
import TestiMonials from "../components/home/Testimonials";
import OurBlog from "../components/home/OurBlog";
import Footer from "../components/footer/Footer";
import HomeContent from "../components/home/HomeContent";
import Services from "../components/home/Services";
import OurCaseStudies from "../components/home/OurCaseStudies";
export default function Home() {
  const CarouselData = [
    {
      title: "Best Ruby on Rails Development Company",
      backgroundColor: "#650909",
      backgroundImage: "url(/assets/img/ror-banner.svg)",
      des: "Get scalable, secure, and well-supported features web applications by embracing exclusive Ruby on rails development services from InfoKodetechnologies. As one of the top specialists in ROR development services.",
      button: "Read More",
      path:"/studies/services/schlorship"
    },
    {
      title: "Web Development",
      backgroundColor: "#340F3D",
      backgroundImage: "url(/assets/img/web-technology.svg)",
      des: "For offering enhanced user experience and result-oriented solutions we are having unmat capabilities. A team of experienced web developers at InfoKoders technologies works dedicatedly to produce web solutions that can help to grow your business.",
      button: "Read More",
      path:"/studies/services/schlorship"
    },
    {
      title: "We are start-up uplifters",
      backgroundColor: "#3c004b",
      backgroundImage: "url(/assets/img/web-technology.svg)",
      des: "Fulfill your tech and non-tech startup dreams through embracing winning technological solutions from a successful tech team holding up a track record of developing 100+ innovative tech products for start-ups over 5+ years.",
      button: "Get the Recognition with us",
       path:"/studies/services/schlorship"
    },
    {
      title: "Let your enterprise rock with our world-class technological services",
      backgroundColor: "#364F6E",
      backgroundImage: "url(/assets/img/right.png)",
      des: "InfoKoders technologies is admired as a leading software Development Company for exceeding business goals consistently thereby offering end-to-end web, mobile, and software development services.",
      button: "Technologize with us",
       path:"/studies/services/schlorship"
    },
    {
      title: "Online Scholarship Management Platform",
      backgroundColor: "#032B44",
      backgroundImage: "url(/assets/img/schlorshipimage.png)",
      des: "A Minneapolis-based start-up wished to eradicate the student’s  financial struggle in an educational realm by taking the advantage of new-age technologies. He narrated his entire vision of building an online scholarship management platform for revolutionizing the  process school is paid, helping deserving students, and effective management of award programs.",
      button: "Read More",
      path:"/studies/services/schlorship"
    },
    {
      title: "Startup Growth",
      backgroundColor: "#340F3D",
      backgroundImage: "url(/assets/img/start-up.svg)",
      des: "Navigating the tech and Non- tech Start-ups towards success heights with our durable software development solutions. We are here to breathe life into your start-up dreams. InfoKoders Technologies is been recognized as a one-stop source to embrace winning software development solutions at a budget-friendly cost.",
      button: "Read More",
       path:"/studies/services/schlorship"
    },
    {
      title: "Agile Developments",
      backgroundColor: "#032B44",
      backgroundImage: "url(/assets/img/right2.png)",
      des: "We follow Agile Development Process, which enables us to deliver the project with the highest quality and a solid product.App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.",
      button: "Read More",
      path:"/studies/services/schlorship"
    },
  ];
  return (
    <div>
      <header>
        <title>InfoKoders Technologies</title>
        <meta
          name="description"
          content="Contact us form for Next.js project"
        />
      </header>
      <main className="flex flex-col items-center">
        <Carousel  data={CarouselData} />
        <HomeContent />
        <OurProcess />
        <Services />
        <TestiMonials />
        <OurBlog />
        <OurCaseStudies/> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
