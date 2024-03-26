import React from "react";

const PulseButton = ({ children }) => {
  return (
    <button className="hover:bg-yellow-200 hover:text-gray-700 relative block w-32 h-12 uppercase text-center leading-16 text-slate-100 border-none rounded-lg  bg-yellow-60 cursor-pointer animate-pulse">
      {children}
    </button>
  );
};

export default PulseButton;
