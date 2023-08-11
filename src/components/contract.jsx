import { card } from "../assets";
import { layout, styles } from "../util/style";
import Button from "./button";
const Contract = () => {
  return (
    <section id="praduct" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Bir necha oson qadamda <br className="sm:block hidden" /> kantrakt
          tuzish
        </h2>
        <p className={`${styles.pargraph} max-w-[550px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          maxime debitis nisi expedita iste sit harum, dolor nesciunt quisquam
          numquam?
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Contract;
