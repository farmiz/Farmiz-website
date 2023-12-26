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

const Card = ({ title, content, isOpen, onClick, bg, border, topValue }) => {
  return (
    <motion.div className={`w-2/3 h-96 px-20 py-11  top-[${topValue}px]  ${isOpen ? "open" : ""} cursor-pointer absolute ${bg} ${border} rounded-tl-3xl rounded-tr-3xl rounded-bl-2xl rounded-br-2xl border  border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex`}
      onClick={onClick}

      initial={{ marginTop: "-80px", }}
      animate={{ marginTop: isOpen ? "-130px" : "-50px", }}
      exit={{ marginTop: "-80px", }}

    >
      <div className="h-28 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch text-lime-950 text-3xl font-bold font-cabinet leading-10">{title}</div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="self-stretch text-neutral-800 text-md font-medium font-cabinet leading-[30px]">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
    // <motion.div
    //   className={`h-[120px] absolute to bottom-[${topValue}px] w-full cursor-pointer ${isOpen ? "open" : ""} ${bg} border-red-200 ${border} p-5 rounded-tl-[40px] rounded-tr-[40px] `}
    //   onClick={onClick}
    //   // initial={{ marginTop: "-80px", height: "150px" }}
    //   // animate={{ marginTop: isOpen ? "-100px" : "-50px", height: isOpen ? "200px" : "120px" }}
    //   // exit={{ marginTop: "-80px", height: "150px" }}
    //   initial={{ height: "120px" }}
    //   animate={{ height: isOpen ? "200px" : "120px" }}
    //   exit={{ height: "120px" }}
    // >
    //   <h3 className="self-stretch text-lime-950 text-[32px] font-bold font-cabinet leading-[44px]">
    //     {title}
    //     <AnimatePresence>
    //       {isOpen && (
    //         <motion.div
    //           key="content"
    //           initial={{ opacity: 0, height: 0 }}
    //           animate={{ opacity: 1, height: "auto" }}
    //           exit={{ opacity: 0, height: 0 }}
    //         >
    //           <p className="self-stretch text-neutral-800 text-xl font-medium font-cabinet leading-[30px]">
    //             {content}
    //           </p>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </h3>
    // </motion.div>
  );
};

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (clickedIndex) => {
    setExpandedIndex(clickedIndex === expandedIndex ? null : clickedIndex);
  };
  return (
    <div className="relative items-stretch flex flex-col mt-10 pt-11 max-md:max-w-full ">
    {sectionData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        content={card.content}
        isOpen={expandedIndex === index}
        onClick={() => handleCardClick(index)}
        bg={card.background}
        border={card.border}
        topValue={card.top}
      />
    ))}
  </div>
  
  );
};

export default OpenCards;
