import { apple, bill, google } from "../assets";
import { layout, styles } from "../util/style";
import Button from "./button";

const Billing = () => {
  return (
    <section className={layout.sectionRevers}>
      <div className={layout.sectionImgReversa}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%]" />

        {/* Gradent backgraund */}
        <div className="absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full top-0 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink_gradient "></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Xisob kitob va faktarialni <br className="sm:block hidden" /> osongina
          boshqaring
        </h2>
        <p className={`${styles.pargraph} max-w-[550px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          maxime debitis nisi expedita iste sit harum, dolor nesciunt quisquam
          numquam?
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={google}
            alt="google"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt="apple"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>

        <Button styles={"mt-10"} />
      </div>
    </section>
  );
};

export default Billing;
