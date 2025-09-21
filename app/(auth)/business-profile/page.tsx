"use client";
import React, { useState } from "react";

import bussImg from "@/public/images/auth/bussProfileImg.png";
import AuthScreen from "@/components/auth/authScrnComp";
import ProfileSteps from "@/components/auth/steps/steps";
import StepOne from "@/components/auth/steps/step1";
import StepTwo from "@/components/auth/steps/step2";
import StepThree from "@/components/auth/steps/step3";

const BusinessProfile = () => {
  const [steps, setSteps] = useState<1 | 2 | 3>(1);
  return (
    <AuthScreen titleText="Complete your business profile" loginImg={bussImg}>
      <div className="flex flex-col gap-5">
        <ProfileSteps setSteps={setSteps} steps={steps} />
        <div>
          {steps === 1 && <StepOne setSteps={setSteps} />}
          {steps === 2 && <StepTwo setSteps={setSteps} />}
          {steps === 3 && <StepThree setSteps={setSteps} />}
        </div>
      </div>
    </AuthScreen>
  );
};

export default BusinessProfile;
