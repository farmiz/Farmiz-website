import AppButton from "./app-button"
import apple from "../../../public/apple.svg"
import play from "../../../public/play.svg"
import file from "../../../public/file.png"
import Image from "next/image"

const Scan = () => {
    return (
        <div className="w-full lg:h-[1024px] bg-custom-lime p-5 lg:p-14">
            <div className="block lg:flex h-full bg-custom-lime items-center justify-between gap-20">
                <div className="flex flex-col justify-center flex-1 lg:h-[60%] my-10">
                    {/* TEXT CONTENT */}
                    <div className="flex flex-col justify-between h-full w-full items-center lg:items-start text-center lg:text-start">
                        <div className="app lg:my-0 my-5">
                            <div className="w-[411px] text-lime-50 text-[32px] font-bold  font-cabinet leading-[44px]">
                                Ready to put your
                                <br />
                                funds to work?
                            </div>
                            <div className="lg:my-0 my-10">
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

                <div className="lg:h-[60%] flex items-center justify-center">
                    <Image src={file} alt="Picture of the author" height={600} className="lg:h-full" />
                </div>
            </div>
        </div>
    )
}

export default Scan