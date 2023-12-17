import Image from "next/image";
import appleFill from '../../../public/apple-fill1.svg'
import playFill from '../../../public/play-fill1.svg'
import Selector from "./selector-button";

const AppPreview = () => {
    return (
        <div className="bg-slate-800 w-full px-[16px] gap-5 flex flex-col py-10 lg:py-[50px] lg:px-[80px]">
            <div className="w-[358px] lg:w-[842px]"><span className="text-white text-2xl font-extrabold font-cabinet lg:text-5xl">Investing in a<br /></span><span className="text-lime-300 text-2xl font-extrabold font-cabine lg:text-5xl">sustainable</span><span className="text-white text-2xl font-extrabold font-cabinet lg:text-5xl"> future</span></div>
            <div className="w-full flex justify-end">
                <p className="self-stretch lg:w-[400px] text-right text-lime-50 text-sm font-medium font-cabinet leading-tight">Farmiz helps you make the best agricultural-related investment decisions and achieve lasting financial success.</p>
            </div>
            <div className="w-full flex items-center justify-end">
                <div className="w-28 h-12 bg-lime-50 rounded-lg border border-white border-opacity-20 justify-center items-center inline-flex">
                    <div className="flex flex-1 justify-evenly">
                        <Image src={appleFill} alt="leaf" />
                        <div
                            className="inline-block  min-h-[1em] w-0.5 self-stretch bg-slate-800 opacity-100 dark:opacity-50"></div>
                        <Image src={playFill} alt="leaf" />
                    </div>
                </div>
            </div>
            <Selector />
        </div>
    );
}

export default AppPreview