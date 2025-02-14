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
        <Carousel />
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
