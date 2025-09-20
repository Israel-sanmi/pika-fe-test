import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import pikaLogo from "@/public/images/pika-logo.png";

interface AuthScreenProps {
  loginImg?: StaticImageData | string;
  children: ReactNode;
  titleText: string;
  subtitleText?: string;
}

const AuthScreen = ({
  loginImg,
  children,
  titleText,
  subtitleText,
}: AuthScreenProps) => {
  return (
    <div className="h-screen flex">
      {loginImg && (
        <div className="w-1/2 hidden md:block">
          <Image
            alt="auth-image"
            src={loginImg}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}

      <div className="h-screen w-full md:w-1/2 px-5 md:px-10 lg:px-20 flex flex-col justify-center gap-5">
        <Image
          priority
          src={pikaLogo}
          alt="pika-logo"
          className="w-[84px] h-[29px]"
        />
        <h2 className="font-poppins font-semibold text-2xl">{titleText}</h2>
        {subtitleText && <p className="text-gray-600">{subtitleText}</p>}
        {children}
      </div>
    </div>
  );
};

export default AuthScreen;
