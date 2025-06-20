import React from "react";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import HeroSection from "../components/HeroSection";
import CitiesSection from "../components/CitiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CitiesSection />
      <TestimonialsSection />
      <NewsSection />
      <FAQSection />
    </>
  );
}
