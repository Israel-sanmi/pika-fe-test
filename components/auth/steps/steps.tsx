import React from "react";

interface stepsI {
  steps: number;
  setSteps: any;
}

const ProfileSteps = ({ steps, setSteps }: stepsI) => {
  return (
    <div className="flex items-center justify-around w-full gap-2">
      <span
        onClick={() => setSteps(1)}
        className={`w-[24px] cursor-pointer flex-none h-[24px] rounded-full flex items-center justify-center font-bold font-inter ${
          steps === 1
            ? "text-white bg-black"
            : "text-black border border-black bg-white"
        }`}
      >
        1
      </span>
      <div className="h-0.5 bg-black w-full" />
      <span
        onClick={() => setSteps(2)}
        className={`w-[24px] cursor-pointer flex-none h-[24px] rounded-full flex items-center justify-center font-bold font-inter ${
          steps === 2
            ? "text-white bg-black"
            : "text-black border border-black bg-white"
        }`}
      >
        2
      </span>
      <div className="h-0.5 bg-black w-full" />
      <span
        onClick={() => setSteps(3)}
        className={`w-[24px] cursor-pointer flex-none h-[24px] rounded-full flex items-center justify-center font-bold font-inter ${
          steps === 3
            ? "text-white bg-black"
            : "text-black border border-black bg-white"
        }`}
      >
        3
      </span>
    </div>
  );
};

export default ProfileSteps;
