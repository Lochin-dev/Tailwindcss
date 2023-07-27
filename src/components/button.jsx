const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 px-5 font-montserrat font-semibold text-[18px] button-gradient rounded-[10px] text-slate-200 outline-none ${styles}`}
    >
      Boshlash
    </button>
  );
};

export default Button;
