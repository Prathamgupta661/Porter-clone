import React from "react";
import DeliveryPartnerBanner from "../components/DriverParterComponents/DeliveryPartnerBanner";
import PorterAdvantage from "../components/DriverParterComponents/PorterAdvantage";
import MakingLifeEasy from "../components/DriverParterComponents/MakingLifeEasy";
import AdditionalBenefits from "../components/DriverParterComponents/AdditionalBenefits";
import ChangingLifeOfPeople from "../components/DriverParterComponents/ChangingLifeOfPeople";
import OwnMultipleVehicles from "../components/DriverParterComponents/OwnMultipleVehicles";

export default function DriverPartners() {
  return (
    <div className="mt-15">
      <DeliveryPartnerBanner />
      <PorterAdvantage />
      <MakingLifeEasy />
      <AdditionalBenefits />
      <ChangingLifeOfPeople />
      <OwnMultipleVehicles />
      {/* You can add more sections here */}
    </div>
  );
} 