import BusinessHero from "@/components/business-page/bussHero";
import FeaturesSection from "@/components/business-page/featuredSection";
import BusinessNav from "@/components/business-page/navBar";
import React from "react";

const BusinessLanding = () => {
  return (
    <div>
      <BusinessNav />
      <BusinessHero />
      <FeaturesSection />
    </div>
  );
};

export default BusinessLanding;
