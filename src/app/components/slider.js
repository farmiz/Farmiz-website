import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionData = [
  {
    top: "0",
    background: "lime-300",
    border: "lime-950",
    title: "What is Farmiz?",
    content: "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "108px",
    background: "violet-300",
    border: "violet-900",
    title: "Which country can I invest from?",
    content: "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "216px",
    background: "rose-300",
    border: "rose-900",
    title: "How do I invest with Farmiz?",
    content: "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "324px",
    background: "sky-200",
    border: "teal-950",
    title: "Why should I use Farmiz?",
    content: "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
  {
    top: "432px",
    background: "yellow-300",
    border: "lime-950",
    title: "Do I need the app to use these features?",
    content: "Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.",
  },
];

const FeatureSection = ({ top, bgColor, borderColor, title, description, length, index }) => (
  <div
    className={`mb-[${Math.max(length, 1)}em] m-[86px]  h-[803px] px-[85px] py-11 top-[${top}] absolute bg-${bgColor} rounded-tl-[40px] rounded-tr-[40px] rounded-bl-2xl rounded-br-2xl border border-${borderColor} border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex`}
  >
    <div key={index} className="h-[120px] flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">{title}</div>
      <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">{description}</div>
    </div>
  </div>
);


const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (clickedIndex) => {
    console.log(clickedIndex);
    console.log(expandedIndex);
    setExpandedIndex(clickedIndex === expandedIndex ? null : clickedIndex);
  };
  const cardVariants = {
    expanded: {
      transform: 'translateY(-8%)',
    },
    collapsed: {
      transform: 'translateY(0%)',
    },
  };



  return (
    <div className=' flex flex-col  w-[90%] relative h-[900px] '>
      {sectionData.map(({ top, background, title, content, border }, index) => (
        <motion.div
          key={index}
          className={`duration-500 ease-in-out w-full transition cursor-pointer bg-${background} px-10  top-[${top}] ${index === expandedIndex ? 'expanded' : ''} h-[900px] px-[85px] py-11  absolute rounded-tl-[40px] rounded-tr-[40px] rounded-bl-2xl rounded-br-2xl border ${border} 0 flex-col justify-start items-start inline-flex`}
          variants={cardVariants}
          initial='collapsed'
          animate={index === expandedIndex ? 'expanded' : 'collapsed'}
          transition={{ duration: 0.5 }}
          onClick={() => handleCardClick(index)}
        >
          <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">{title}</div>
            {
              expandedIndex === index ? (
                <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">
                  {content}
                </div>
              ): null
            } 
           
          </div>
          {/* <div className=" h-[803px] px-[85px] py-11 left-0 top-[108px] absolute bg-violet-300 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-2xl rounded-br-2xl border border-violet-900 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex">
          
          </div> */}
        </motion.div>
      ))}
    </div>
  );
};

export default OpenCards;