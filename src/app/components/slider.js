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
    top: "108px",
    background: "bg-[#C4B5FD]",
    border: "border[#4C1D95]",
    title: "Which country can I invest from?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "216px",
    background: "bg-[#FDA4AF]",
    border: "border-[#881337]",
    title: "How do I invest with Farmiz?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "324px",
    background: "bg-[#B0E1E8]",
    border: "border-[#033239]",
    title: "Why should I use Farmiz?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "432px",
    background: "bg-[#FFDB4D]",
    border: "border-[#2D2503]",
    title: "Do I need the app to use these features?",
    content:
      "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
];

const Card = ({ title, content, isOpen, onClick, bg, border }) => {
  return (
    <motion.div
      className={`h-[300px] relative top-[-70] w-full cursor-pointer ${isOpen ? "open" : ""} ${bg} border-red-200 ${border} p-5 rounded-tl-[40px] rounded-tr-[40px]`}
      onClick={onClick}
      initial={{ translateY: 0 }}
      animate={{ translateY: isOpen ? -70 : 0 }}
      exit={{ translateY: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      <h3 className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">
        {title}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      </h3>
    </motion.div>
  );
};

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (clickedIndex) => {
    setExpandedIndex(clickedIndex === expandedIndex ? null : clickedIndex);
  };
  return (
    <div className="flex flex-col  m-auto h-[715px] ">
      {sectionData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          isOpen={expandedIndex === index}
          onClick={() => handleCardClick(index)}
          bg={card.background}
          border={card.border}
        />
      ))}
    </div>
  );
};

export default OpenCards;
