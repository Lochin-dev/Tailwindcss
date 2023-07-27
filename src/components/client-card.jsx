import React from "react";
import { styles } from "../util/style";

const ClientCard = ({ logo }) => {
  return (
    <div
      className={`flex-1 ${styles.flexCenter} sm:min-w-[120px] min-w-[80px] m-5`}
    >
      <img
        src={logo}
        alt="logo"
        className="ms:w-[192px] w-[100px] object-contain"
      />
    </div>
  );
};

export default ClientCard;
