import lock from "../../../public/lock.svg";
import noise from "../../../public/noise-logo.svg";
import Image from "next/image";
// import chat from "../../public/chat.svg";

const PromiseCard = ({image, title, subTitle}) => {
    return (
        <div
        className={`bg-[#FFE4E6] bg-blend-overlay rounded-[18px] my-5 relative overflow-hidden h-[450px] max-w-full`}
    >
        <Image
            src={noise}
            alt="Noise"
            className="object-cover bg-blend-overlay w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between  p-[20px]">

            <div className="flex justify-evenly flex-col h-full items-center lg:p-[20px]">
                <Image
                    src={image}
                    alt="Lock"
                    className="bg-blend-overlay object-cover"
                />
                <p className=" text-lime-950 mr-auto text-xl font-bold leading-7 font-cabinet items-center pb-4">
                    {title}
                </p>
                <p className="text-neutral-800 text-base font-medium font-cabinet leading-normal item-center tracking-tight">
                    {subTitle}
                </p>
            </div>
        </div>
    </div>
    )
}

export default PromiseCard;