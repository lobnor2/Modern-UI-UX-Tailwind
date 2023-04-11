import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* left side */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 border border-white`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full border border-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> <br />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 text-white">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[55px] ss:leading-[100px] leading-[75px] w-full border border-white mt-1">
          Payment Method.
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 border border-white`}
        >
          Our team of experts uses a methodology to identitfy the credit cards
          most likely to fit yor needs. We examine annual percentage rated,
          annual fees.
        </p>
      </div>
      {/* right side */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative  border border-white`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5px]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* getstarted components show only in mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
