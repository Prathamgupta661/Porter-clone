import React from "react";
import WelcomeBanner from "../components/HomeComponents/WelcomeBanner";
import UniqueFeatures from "../components/HomeComponents/UniqueFeatures";
import CityGallery from "../components/HomeComponents/CityGallery";
import CustomerStories from "../components/HomeComponents/CustomerStories";
import LatestUpdates from "../components/HomeComponents/LatestUpdates";
import HelpCenter from "../components/HomeComponents/HelpCenter";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import PartnersTrust from "../components/HomeComponents/PartnersTrust";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import EstimateSection from "../components/HomeComponents/EstimateSection";

export default function Home({login}) {
  return (
    <>
      <WelcomeBanner />
      <EstimateSection login={login}/>
      <ServicesSection />
      <UniqueFeatures />
      <HowItWorks />
      <CityGallery />
      <PartnersTrust />
      <CustomerStories />
      <LatestUpdates />
      <HelpCenter />
      
    </>
  );
}
