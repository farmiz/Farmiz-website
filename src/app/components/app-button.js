import Image from 'next/image'

const AppButton = ({ path, text }) => {
    return (
        <button className="h-[48px] bg-white bg-opacity-5  rounded-lg border border-white border-opacity-20 justify-center items-center inline-flex">
            <div className="px-4 py-[11px] justify-center items-center gap-2 flex">
                <Image
                    src={path}
                    alt="Picture of the author"
                    width={24}
                    height={24}
                />
                <div className="text-white text-sm font-bold font-cabinet leading-normal">{text}</div>
            </div>
        </button>
    );
};

export default AppButton;