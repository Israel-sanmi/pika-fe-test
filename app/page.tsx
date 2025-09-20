"use client";
import Image from "next/image";
import CountUp from "react-countup";

import pikaLogo from "@/public/images/pika-logo.png";
import heroBg from "@/public/images/heroBg.png";
import finger from "@/public/images/finger.png";
import arrow from "@/public/images/arrow.png";
import rider from "@/public/images/rider.png";
import bike from "@/public/images/bike.png";
import key from "@/public/images/key.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      {/* hero */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "100% auto",
        }}
        className="bg-[#FADEEF61] w-full h-screen md:h-[130vh] relative overflow-hidden"
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex items-center justify-between px-5 sm:px-10 py-10 sm:py-5"
        >
          <Image
            priority
            src={pikaLogo}
            alt="pika-logo"
            className="w-[84px] h-[29px]"
          />
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/login")}
              className="text-[#E96A48] cursor-pointer font-semibold font-poppins text-sm"
            >
              Sign in
            </button>
            <button
              onClick={() => router.push("/sign-up")}
              className="text-[#E96A48] cursor-pointer font-semibold font-poppins text-sm border border-[#E96A48] rounded-[50px] p-2 hover:text-white transition-colors ease-in-out hover:bg-[#E96A48]"
            >
              Sign up
            </button>
          </div>
        </motion.nav>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-10 sm:mt-14 sm:px-0 px-3"
        >
          <h1 className="sm:text-[56px] text-5xl font-poppins text-main text-center font-semibold">
            Your Bridge to Effortless Deliveries
          </h1>
          <p className="text-[#050505] text-sm sm:text-xl font-poppins py-3 text-center">
            Making every delivery experience enjoyable, fast and simple.
          </p>
          <div className="flex items-center sm:flex-row flex-col justify-center gap-2 sm:gap-7 mt-5">
            <p className="text-[#050505] font-medium font-poppins sm:font-inter cursor-pointer text-xs sm:text-sm">
              Earn as a rider!
            </p>
            <button
              onClick={() => router.push("/sign-up")}
              className="bg-[#050505] rounded-[20px] font-poppins sm:font-inter text-white text-sm py-3 px-8 cursor-pointer font-normal hover:bg-black/10 hover:text-black transition-colors ease-in-out "
            >
              Sign-up now
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* track */}
      <div className="bg-white w-full p-5 lg:p-28">
        <div className=" mx-auto rounded-[30px] bg-gradient-to-b from-[#FF7305] to-[#EB5229] flex items-center  justify-between p-5 md:p-8">
          {[
            { number: 1000, text: "Successful Deliveries" },
            {
              number: 500,
              text: "Satisfied Businesses",
            },
            {
              number: 380,
              text: "Rider Experts",
            },
          ].map((main, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-0.5">
                <h1 className="text-white font-semibold font-poppins text-xl sm:text-5xl">
                  <CountUp end={main.number} duration={2} suffix="+" />
                </h1>
                <p className="text-[#FBD6CC] sm:text-left text-center text-xs sm:text-base font-inter font-normal ">
                  {main.text}
                </p>
              </div>
            );
          })}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-20 lg:gap-28 mt-10 sm:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { x: -150, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="w-full max-w-[552px]"
          >
            <Image
              src={finger}
              alt="smart-route"
              priority
              className="
        w-full 
        h-[200px] sm:h-[400px] lg:h-[688px] 
        object-cover object-top 
        rounded-[8px]
      "
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { x: 150, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col gap-4 sm:gap-6 min-w-[250px] max-w-[456px] px-4 sm:px-0 text-center sm:text-left"
          >
            <h1 className="font-inter font-medium text-2xl sm:text-3xl lg:text-4xl text-[#474445]">
              Track your delivery in real-time
            </h1>
            <p className="text-[#0B0A0A] font-inter font-normal text-sm sm:text-base lg:text-lg leading-relaxed">
              Track your package, guaranteeing peace of mind at every step of
              its journey.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* how */}
      <div className="w-full bg-main bg-gradient-to-b from-[#FF7305] to-[#EB5229] px-5 sm:px-28 py-14">
        <h1 className="font-inter pb-2 text-white text-center text-2xl sm:text-3xl font-bold">
          How <span className="italic">PIKA</span> works
        </h1>
        <Image alt="arrow" src={arrow} className="mx-auto hidden md:block" />
        <div className="text-white flex md:flex-row flex-col items-center md:items-start gap-5 md:gap-0 justify-between mt-2 ">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-center max-w-full border md:border-white rounded-[20px] md:border-0 p-3 md:p-0 md:max-w-[319px] "
          >
            <h3 className="font-poppins text-lg font-medium">
              Select Delivery Type
            </h3>
            <p className="font-poppins md:text-base text-sm font-normal py-3">
              Pika offers customizable delivery options, allowing you to choose
              the type of delivery that suits your needs, whether it’s same day
              delivery or interstate delivery
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="text-center max-w-full border md:border-white rounded-[20px] md:border-0 p-3 md:p-0 md:max-w-[319px] "
          >
            <h3 className="font-poppins text-lg font-medium">
              Select Your Address{" "}
            </h3>
            <p className="font-poppins md:text-base text-sm font-normal py-3">
              Whether it’s your home, office, or a friend’s place, selecting the
              right address ensures your package reaches you seamlessly. Plus,
              you can save your frequently used addresses for even quicker
              ordering next time!
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            className="text-center max-w-full border md:border-white rounded-[20px] md:border-0 p-3 md:p-0 md:max-w-[319px] "
          >
            <h3 className="font-poppins text-lg font-medium">
              Tailor your shipment
            </h3>
            <p className="font-poppins md:text-base text-sm font-normal py-3">
              Pika makes delivery scheduling a breeze. Choose your preferred
              date and time effortlessly and stay updated at every step. Say
              goodbye to stress with Pika's effortless scheduling.
            </p>
          </motion.div>
        </div>
      </div>

      {/* earn */}
      <div className="bg-white w-full px-5 py-5 md:py-14 sm:px-10 lg:p-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-28 mt-10 md:mt-24">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-w-[250px] gap-4 max-w-[456px] text-left"
          >
            <h1 className="font-inter font-bold sm:font-medium text-xl sm:text-3xl md:text-4xl text-[#474445]">
              Earn As A Pika Rider
            </h1>
            <p className="text-[#0B0A0A] font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed">
              You're free to set your own schedule, work from anywhere, and
              decide how much you want to work. You can accept or reject tasks
              at your convenience and easily locate opportunities nearby.
              There's no requirement to go to an office or have a boss to report
              to anymore.
            </p>
            <button
              onClick={() => router.push("/sign-up")}
              className="border mt-5 text-[#180A0A] border-black w-full sm:w-auto bg-white font-inter font-semibold text-base sm:text-lg cursor-pointer rounded-[30px] px-6 py-3 hover:text-white hover:bg-black transition-colors ease-in-out"
            >
              Sign up now
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={rider}
              alt="rider-route"
              priority
              className="w-full max-w-[552px] h-[175px] sm:h-[400px] lg:h-[688px] object-cover object-top rounded-[8px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${bike.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[360px] relative mb-0 sm:mb-28"
      >
        <div className="bg-[#FAFAFA]/80 p-4 rounded-[20px] sm:flex hidden items-end max-w-[498px] gap-2 absolute right-5 bottom-5">
          <p className="font-inter text-[#474445] text-xs font-medium">
            Moving Packages, saving the planet
          </p>
          <p className="font-inter font-normal text-[#110F10]">
            At <span className="italic">PIKA</span>, we’re aligning with the UN
            Sustainable Development Goals by introducing bicycle dispatch for
            short-distance deliveries. Less carbon, more motion and a healthier
            urban life
          </p>
        </div>
      </div>

      <div className="sm:hidden block p-5 text-center">
        <p className="font-inter text-[#180A0A] text-base font-medium">
          Moving Packages, saving the planet
        </p>
        <p className="font-inter font-normal text-[#110F10] text-sm pt-4 pb-10">
          At <span className="italic">PIKA</span>, we’re aligning with the UN
          Sustainable Development Goals by introducing bicycle dispatch for
          short-distance deliveries. Less carbon, more motion and a healthier
          urban life
        </p>
      </div>

      {/* waitlist */}
      <div
        style={{
          backgroundImage: `url(${key.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="lg:h-[70vh] object-bottom h-[60vh] sm:py-0 py-5 w-full relative"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="sm:max-w-[537px] max-w-full flex sm:block flex-col items-center justify-center sm:absolute p-5 sm:p-0 top-14 left-24"
        >
          <h1 className="font-inter font-bold text-xl sm:text-3xl text-center sm:text-left text-[#180A0A]">
            Safeguard your business logistics
          </h1>
          <p className="font-inter text-[#180A0A] text-center sm:text-left text-xs sm:text-base font-normal py-2 sm:py-3">
            Jump on the Pika waitlist today and be the first to know when we
            launch!{" "}
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 items-center w-full ">
            <input
              className="sm:rounded-tl-[10px] sm:w-auto w-full ring-0 rounded-tl-0 bg-white text-[#180A0A] px-4 py-2 font-poppins font-normal text-sm placeholder:text-[#180A0A] sm:rounded-bl-[10px] rounded-bl-0 sm:border border-[#180A0A]"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="bg-main sm:w-auto w-full text-white cursor-pointer sm:rounded-tr-[10px] py-2 px-4 sm:rounded-br-[10px] font-poppins font-normal text-sm sm:border border-[#180A0A]">
              Submit
            </button>
          </div>
        </motion.div>
      </div>

      {/* footer */}
      <div className="bg-white pt-10">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-8 px-5 sm:px-10 md:px-20 pb-10">
          <div className="flex-shrink-0">
            <Image
              priority
              src={pikaLogo}
              alt="pika-logo"
              className="w-[84px] h-[29px]"
            />
          </div>

          <div>
            <ul className="font-inter font-normal text-sm text-[#180A0A] space-y-2 *:cursor-pointer">
              <li>Track and monitor your delivery in real time</li>
              <li>How Pika works</li>
              <li>Earn as a Pika rider</li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-medium pb-2">Support</h4>
            <ul className="font-inter font-normal text-sm text-[#180A0A] space-y-2 *:cursor-pointer">
              <li>Help center</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-medium pb-2">Contact</h4>
            <ul className="font-inter font-normal text-sm text-[#180A0A] space-y-2 *:cursor-pointer">
              <li>info@abc.com</li>
              <li>+91 988778889</li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-medium pb-2">Follow Pika</h4>
            <ul className="font-inter font-normal text-sm text-[#180A0A] space-y-2 *:cursor-pointer">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="bg-main flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-5 sm:px-10 md:px-20 text-white font-inter text-xs font-normal">
          <p className="text-center sm:text-left">
            2023 De-Aelum LLC All Rights Reserved
          </p>
          <ul className="flex items-center gap-5 *:cursor-pointer">
            <li>Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
