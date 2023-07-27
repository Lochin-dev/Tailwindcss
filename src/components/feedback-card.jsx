// import { feedback } from "../util/constans";
import { quotes } from "../assets";
import { feedback } from "../util/constans";

const FeedbackCard = ({ content, name, title, idx }) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[350px] md:mr-3 sm:mr-1 my-5 cursor-pointer feedback-card ${
        idx !== feedback.length - 1 ? "mr-0" : "md:mr-0 sm:mr-0"
      }`}
    >
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain "
      />
      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <div className=" w-[50px] h-[50px] flex justify-center items-center bg-dark-gradient rounded-e-full ">
          <p className="text-gradeint text-[20px] font-montserrat font-semibold">
            {name
              .split(" ")
              .map((c) => c[0])
              .join(".")
              .toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] text-white">
            {name}
          </h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
