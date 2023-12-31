import AppButton from "./app-button"
import apple from "../../../public/apple.svg"
import play from "../../../public/play.svg"
import file from "../../../public/file.png"
import Image from "next/image"
import noise from "../../../public/noise-logo.svg";

const Scan = () => {
    return (
        <div className="bg-custom-lime w-full h-[270vw] lg:h-[1024px] absolute bottom-0">
            <div className="h-[90%] scan block lg:flex p-5 lg:p-14 items-center justify-between gap-20">
                <div className="flex flex-col justify-center flex-1 lg:h-[70%] my-10">
                    {/* TEXT CONTENT */}
                    <div className="flex lg:gap-60  gap-24 flex-col justify-between h-full w-full items-center lg:items-start text-center lg:text-start">
                        <div className="flex gap-5 flex-col lg:justify-start lg:items-start items-center justify-center">
                            <div className="w-[411px] text-lime-50 text-[32px] font-bold  font-cabinet leading-[44px]">
                                Ready to put your
                                <br />
                                funds to work?
                            </div>
                            <div className="flex gap-5">
                                <AppButton path={apple} text="Apple App Store" />
                                <AppButton path={play} text="Google Play Store" />
                            </div>
                        </div>

                        <div className="flex-col justify-start items-start gap-6 inline-flex">
                            <div className="text-lime-50 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                                Scan to download mobile app.
                            </div>
                            <div className="h-[183.58px] p-[17.46px] bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-20 flex-col justify-start items-start gap-[6.98px] flex">
                                <div className="w-[168.54px] h-[148.65px] relative" />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex items-center justify-center">
                    <Image src={file} alt="Picture of the author" height={600} className="lg:h-full" />
                </div>
            </div>
        </div>
    )
}

export default Scan