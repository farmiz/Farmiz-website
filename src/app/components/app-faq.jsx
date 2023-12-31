"use client";
const { default: OpenCards } = require("./slider");

const AppFAQ = () => {
  return (
    <div className="  bg-lime-50 h-auto pt-12 px-20 max-md:px-5">
        <p className="text-lime-950 text-5xl font-extrabold leading-[68px] tracking-[2.4px] capitalize mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Answers to most Asked Questions
        </p>
        <OpenCards />
    </div>
  );
};

export default AppFAQ;
