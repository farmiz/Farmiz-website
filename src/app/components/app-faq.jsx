"use client";
const { default: OpenCards } = require("./slider");

const AppFAQ = () => {
  return (
    <div className=" bg-lime-50 py-[16px] w-full flex flex-col">
      <div className="w-[80%] m-auto">
        <p className="mt-10 mb-[40px] text-lime-950 text-lg font-extrabold font-cabinet lg:text-4xl lg:leading-[60px] tracking-wide">
          Answers to most Asked Questions
        </p>
        <OpenCards />
      </div>
    </div>
  );
};

export default AppFAQ;
