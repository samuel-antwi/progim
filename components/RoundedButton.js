const RoundedButton = ({ label, medium }) => {
  return (
    <button
      className={`${
        medium ? 'py-3 w-40' : 'py-2 w-32'
      } bg-primary mt-5 text-sm rounded-full font-semibold tracking-wide uppercase  text-gray-100`}>
      {label}
    </button>
  );
};

export default RoundedButton;
