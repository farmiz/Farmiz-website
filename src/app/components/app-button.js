import Image from 'next/image'

const AppButton = ({ path, text }) => {
    return (
        <div className="h-[48px] bg-white bg-opacity-5  lg:mx-2 rounded-lg border border-white border-opacity-20 justify-center items-center inline-flex">
            <div className="px-4 py-[11px] justify-center items-center gap-2 flex">
                <div className="w-6 h-6 relative">
                    <Image
                        src={path}
                        alt="Picture of the author"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="text-white text-base font-bold font-['Cabinet Grotesk'] leading-normal">{text}</div>
            </div>
        </div>
    );
};

export default AppButton;