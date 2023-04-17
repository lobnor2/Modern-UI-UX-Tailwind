import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button "
      className={`py-4 px-6 bg-blue-gradient text-black mt-2 font-poppins font-semibold text-[18px] outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
