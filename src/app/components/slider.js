import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionData = [
  {
    top: "0",
    background: "bg-[#BEF263]",
    border: "border-#152108",
    title: "What is Farmiz?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "108",
    background: "bg-[#C4B5FD]",
    border: "border[#4C1D95]",
    title: "Which country can I invest from?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "216",
    background: "bg-[#FDA4AF]",
    border: "border-[#881337]",
    title: "How do I invest with Farmiz?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "324",
    background: "bg-[#B0E1E8]",
    border: "border-[#033239]",
    title: "Why should I use Farmiz?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "432",
    background: "bg-[#FFDB4D]",
    border: "border-[#2D2503]",
    title: "Do I need the app to use these features?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
];

const Card = () => {
  return (
    <motion.div className={`w-full h-[1300px] relative bg-red-800`}
      // onClick={onClick}

      // initial={{ marginTop: "-80px", }}
      // animate={{ marginTop: isOpen ? "-130px" : "-50px", }}
      // exit={{ marginTop: "-80px", }}

    >
      <div className="h-28 flex-col justify-center items-center my-20  gap-4 flex">
        <div className="w-[1280px] h-[1235px] relative">
          <div className="w-[1280px] h-[803px] px-[85px] py-11 left-0 top-0 absolute bg-lime-300 rounded-tl-[40px] rounded-tr-[40px]  border border-lime-950 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">What is Farmiz?</div>
              <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</div>
            </div>
          </div>
          <div className="w-[1280px] h-[803px] px-[85px] py-11 left-0 top-[108px] absolute bg-violet-300 rounded-tl-[40px] rounded-tr-[40px]  border border-violet-900 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">Which country can I invest from?</div>
              <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</div>
            </div>
          </div>
          <div className="w-[1280px] h-[803px] px-[85px] py-11 left-0 top-[216px] absolute bg-rose-300 rounded-tl-[40px] rounded-tr-[40px]  border border-rose-900 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">How do I invest with Farmiz??</div>
              <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</div>
            </div>
          </div>
          <div className="w-[1280px] h-[803px] px-[85px] py-11 left-0 top-[324px] absolute bg-sky-200 rounded-tl-[40px] rounded-tr-[40px]  border border-teal-950 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">Why should I use Farmiz?</div>
              <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</div>
            </div>
          </div>
          <div className="w-[1280px] h-[803px] px-[85px] py-11 left-0 top-[432px] absolute bg-yellow-300 rounded-tl-[40px] rounded-tr-[40px]  border border-lime-950 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">Do I need the app to use these features?</div>
              <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

  );
};

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (clickedIndex) => {
    setExpandedIndex(clickedIndex === expandedIndex ? null : clickedIndex);
  };
  return (
   
    <Card />

  );
};

export default OpenCards;
