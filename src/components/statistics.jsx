import { statistica } from "../util/constans";
import { styles } from "../util/style";

const Statistics = () => {
  return (
    <div className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistica.map((stat, idx) => (
        <div
          key={stat.id}
          className={` flex items-center flex-wrap m-3 justify-start`}
        >
          <h4 className="font-montserrat font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradeint uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
