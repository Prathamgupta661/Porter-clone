import React from "react";
import DriverPartnerBanner from "../components/EnterpriseComponents/EnterpriseBanner";
import OurClients from "../components/EnterpriseComponents/OurClients";
import KeyFeatures from "../components/EnterpriseComponents/KeyFeatures";
import NetworkStats from "../components/EnterpriseComponents/NetworkStats";
import TransformingCities from "../components/EnterpriseComponents/TransformingCities";
import Testimonials from "../components/EnterpriseComponents/Testimonials";
import IndustriesWeServe from "../components/EnterpriseComponents/IndustriesWeServe";
import ForAnyMoreQuery from "../components/EnterpriseComponents/ForAnyMoreQuery";

export default function Enterprise() {
  return (
    <div className="mt-14">
      <DriverPartnerBanner />
      <OurClients />
      <KeyFeatures />
      <NetworkStats />
      <TransformingCities />
      <Testimonials />
      <IndustriesWeServe />
      <ForAnyMoreQuery />
      {/* You can add more sections here */}
    </div>
  );
}