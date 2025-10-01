import BenefitsSection from "@/components/business-page/benefitSection";
import FinalCTA from "@/components/business-page/businessCTA";
import Footer from "@/components/business-page/businessFooter";
import BusinessHero from "@/components/business-page/bussHero";
import FeaturesSection from "@/components/business-page/featuredSection";
import BusinessNav from "@/components/business-page/navBar";
import ResultsDashboard from "@/components/business-page/resultsDashboard";
import SuccessStories from "@/components/business-page/successStories";
import TransformationShowcase from "@/components/business-page/transformationShowcase";
import PricingSection from "@/components/landing/pricingSection";
import TrustSection from "@/components/landing/trustSection";
import React from "react";

const BusinessLanding = () => {
  return (
    <div>
      <BusinessNav />
      <BusinessHero />
      <FeaturesSection />
      <BenefitsSection />
      <TransformationShowcase />
      <ResultsDashboard />
      <SuccessStories />
      <PricingSection />
      {/* <TrustSection/> */}
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default BusinessLanding;
