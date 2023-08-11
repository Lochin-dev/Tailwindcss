import React from "react";
import { styles } from "../util/style";
import { discount, home } from "../assets";
import Button from "./button";

export default function Home() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      {/* Animation image */}
      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-[10.5px]  `}>
        <img
          src={home}
          alt="robt"
          className="w-[100%] h-[100%] z-10 relative rounded-lg"
        />
      </div>

      {/* Information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col  md:px-16 px-0 relative`}
      >
        {/* Discount infotmation */}
        <div
          className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient`}
        >
          <img src={discount} alt="discount" />
          <p className={`${styles.pargraph} ml-2`}>
            <span className="text-white">20% </span> Chegirma{" "}
            <span className="text-white">1 Oylik</span> Xisob Uchun
          </p>
        </div>
        {/* Title */}
        <div className={`w-full`}>
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />
            <span className="text-gradeint">To'lov Usuli</span>
          </h1>
        </div>
        {/* Discription */}
        <p className={`${styles.pargraph} mt-5 max-w-[550px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          impedit, commodi sunt esse totam eius excepturi nostrum qui ad
          consequuntur?
        </p>

        {/* Getting starting */}

        <Button styles={"mt-3"} />

        {/* Gradent backgraund */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
}
