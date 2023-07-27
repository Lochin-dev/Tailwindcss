import { feedback } from "../util/constans";
import { styles } from "../util/style";
import FeedbackCard from "./feedback-card";

const Testimonials = () => {
  return (
    <div
      className={` ${styles.flexCenter} flex-col relative sm:py-10 pt-5  sm:pb-0`}
    >
      <div className="absolute z-[0] w-[600px] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-[16] mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Odamlar biz haqimizda qanday fikirda
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.pargraph} text-left max-W-[550px]`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            recusandae ullam corrupti quas, officia nisi quia?
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {feedback.map((feedback, idx) => (
          <FeedbackCard key={feedback.id} {...feedback} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
