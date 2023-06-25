const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-montserrat font-medium text-[18px] button-gradient rounded-[10px] outline-none ${styles}`}
    >
      Boshlash
    </button>
  );
};

export default Button;
