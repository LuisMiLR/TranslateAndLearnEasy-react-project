import React from "react";

const PulseButton = ({ children }) => {
  return (
    <button className="hover:bg-dblue-500 relative block w-32 h-12 uppercase text-center leading-16 text-white-1 border-none rounded-lg  bg-dblue-400 cursor-pointer animate-pulse">
      {children}
    </button>
  );
};

export default PulseButton;
