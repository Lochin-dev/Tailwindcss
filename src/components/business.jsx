import { features } from "../util/constans";
import { layout, styles } from "../util/style";
import Button from "./button";
import FeatureCard from "./feature-card";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantring, <br className="sm:block hidden" /> pulni hal
          qilamiz.
        </h2>
        <p className={`${styles.pargraph} max-w-[550px] mt-5 `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          accusamus sint excepturi doloremque totam aspernatur asperiores itaque
          maiores esse eum.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg} flex-col pt-2`}>
        {features.map((features, idx) => (
          <FeatureCard key={features.id} {...features} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
