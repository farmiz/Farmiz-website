import Image from 'next/image'
import logo from '../../../public/logo.svg'
import menu from '../../../public/menu.svg'
import apple from '../../../public/apple.svg'
import play from '../../../public/play.svg'
import holdingFruit from '../../../public/holding-fruit.png'
import holdingPhone from '../../../public/holding-phone.png'
import holdingPhoneBig from '../../../public/holding-phone-big.png'
import busket from '../../../public/busket.png'
import sitting from '../../../public/sitting.png'
import sittingBig from '../../../public/sitting-big.png'
import AppButton from '../components/app-button'
import textClip from '../../../public/text-clip.svg'
import Link from 'next/link'

const AppHeader = () => {
    return (
        <div className='w-full bg-custom-lime flex items-center justify-between flex-col py-6'>
            <div className='w-full bg-custom-lime flex items-center justify-between pb-3 px-[16px] lg:px-[80px] border-b-white border-opacity-20 border-b-[1px]'>
                <Image
                    src={logo}
                    alt="Picture of the author"
                />
                <div className="w-[236px] h-[25px] justify-start items-start gap-10 hidden lg:inline-flex">
                    <Link href={'/'} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">About</Link>
                    <Link href={'/'} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">Features</Link>
                    <Link href={'/'} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">FAQs</Link>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-5 rounded-full border border-white border-opacity-20 justify-center items-center gap-7 inline-flex lg:hidden">
                    <Image
                        src={menu}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className='w-full justify-center items-center lg:justify-between flex lg:px-[80px] px-[16px] pt-[25px] md:pt-[60px]'>
                <div className='flex flex-col py-5 '>
                    <strong className="text-white text-4xl md:w-[600px] md:text-[68px]  font-extrabold font-cabinet leading-[45px] md:leading-[70px]">Financial succes is not an occurrence.</strong>
                    <div className="relative">
                        <Image
                            className='w-[223px] h-[55.93px] lg:w-[345px] lg:h-[90px]'

                            src={textClip}
                            alt="Picture of the author"
                        />
                        <div className="absolute inset-0 flex left-2 items-center justify-start">
                            <strong className="text-lime-950 text-4xl lg:text-6xl font-extrabold font-cabinet  tracking-wide">It&apos;s a habit.</strong>
                        </div>
                    </div>
                </div>
                <div className=" h-[359px] justify-start items-start gap-6 lg:flex hidden">
                    <Image className=" h-[320px] rounded-2xl border border-white border-opacity-20 w-[270px]" src={holdingPhoneBig} />
                    <Image className=" h-[250px] rounded-2xl border border-white border-opacity-20 w-[193px]" src={busket} />
                </div>
            </div>

            <div className='flex items-center justify-center lg:justify-between w-full lg:px-[80px] flex-row'>
                <div className="h-[359px] justify-start items-end gap-6 lg:inline-flex hidden">
                    <Image className="w-[302px] h-[250px] rounded-2xl border border-white border-opacity-20" src={holdingFruit} />
                    <Image className="w-[270px] h-[320px] rounded-2xl border border-white border-opacity-20 object-cover" src={sittingBig} />
                </div>
                <div>
                    <div className='mt-[30px] w-full items-end justify-end flex px-[16px]'>
                        <p className="w-[296px] lg:w-[510px] text-right text-lime-50 text-base lg:text-xl font-semibold font-cabinet leading-normal">Farmiz helps you make the best agricultural-related investment decisions and achieve lasting financial success.</p>
                    </div>
                    <div className='flex lg:justify-end justify-between py-6 px-[16px] gap-2'>
                        <AppButton path={apple} text="Apple App Store" />
                        <AppButton path={play} text="Google Play Store" />
                    </div>
                </div>
            </div>

            <div className="mt-[30px] lg:hidden w-[359] h-[464px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[358px] justify-start items-start gap-4 inline-flex">
                    <Image className="w-[358px] h-[243px] rounded-[10.81px] border border-white border-opacity-20" src={holdingPhone} />
                </div>
                <div className="w-[359.16px] justify-start items-end gap-4 inline-flex">
                    <Image className="grow shrink basis-0 h-[205px] rounded-[9.12px] border border-white border-opacity-20" src={holdingFruit} />
                    <Image className="w-[138px] h-[205px] rounded-[9.12px] border border-white border-opacity-20" src={sitting} />
                </div>
            </div>
        </div>
    );
};

export default AppHeader;