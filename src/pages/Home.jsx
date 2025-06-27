import React from "react";
import WelcomeBanner from "../components/HomeComponents/WelcomeBanner";
import UniqueFeatures from "../components/HomeComponents/UniqueFeatures";
import CityGallery from "../components/HomeComponents/CityGallery";
import CustomerStories from "../components/HomeComponents/CustomerStories";
import LatestUpdates from "../components/HomeComponents/LatestUpdates";
import HelpCenter from "../components/HomeComponents/HelpCenter";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import PartnersTrust from "../components/HomeComponents/PartnersTrust";

export default function Home() {
  return (
    <>
    <WelcomeBanner />
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
