import { clients } from "../util/constans";
import { styles } from "../util/style";
import ClientCard from "./client-card";

const Clients = () => {
  return (
    <div className={` ${styles.flexCenter} flex-1 flex-wrap my-4`}>
      <h2 className={`text-gradeint  ${styles.heading2} pb-[20px]`}>Clients</h2>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((clients, idx) => (
          <ClientCard key={clients.id} logo={clients.logo} id x={idx} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
