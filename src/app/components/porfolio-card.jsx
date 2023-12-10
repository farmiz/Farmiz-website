import Image from "next/image";
import noise from "../../../public/noise-logo.svg";

const PortfolioCard = ({ path, heading, subheading, color }) => {
  return (
    <div
      className={`${color} bg-blend-overlay h-[530px]  rounded-[18px] my-5 relative overflow-hidden `}
    >
      <Image
        src={noise}
        alt="Noise"
        className="object-cover bg-blend-overlay"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <div className="px-[16px] pt-8">
          <p className=" text-lime-950 text-xl font-bold leading-7 font-cabinet items-center pb-4">
            {heading}
          </p>
          <p className="text-neutral-800 text-base font-medium font-cabinet leading-normal item-center tracking-tight">
            {subheading}
          </p>
        </div>

        <Image src={path} alt="Crop" className="ml-auto w-11/12" />
      </div>
    </div>
  );
};

export default PortfolioCard;
