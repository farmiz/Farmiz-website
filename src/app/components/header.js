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
        <div className='w-screen bg-custom-lime flex items-center justify-between flex-col py-6 '>
            <div className='w-screen flex items-center justify-between pb-3 px-[16px] lg:px-[80px] border-b-white border-opacity-20 border-b-[1px]'>
                <Image src={logo} alt="Picture of the author" />
                <Navigation />

                <div className="w-12 h-12 bg-white bg-opacity-5 rounded-full border border-white border-opacity-20 justify-center items-center gap-7 inline-flex lg:hidden">
                    <Image src={menu} alt="Picture of the author" />
                </div>
            </div>
            <div className='w-full justify-center items-start lg:justify-between flex lg:px-[80px] px-[16px] pt-[25px] md:pt-[60px]'>
                <div className='flex flex-col w-full'>
                    <h1 className="text-white text-4xl md:max-w-[35rem] md:text-[60px] font-bold font-cabinet leading-[45px] md:leading-[58px] md:mt-[20px] ">
                        Financial success is not an occurrence.
                    </h1>
                    <div className="flex  justify-start items-start w-full h-auto">
                        <svg width="250" viewBox="0 0 383 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.67975 78.2719L1.15524 11.9522C1.07001 9.71326 2.84019 7.84098 5.08036 7.80067L377.974 1.09044C380.546 1.04417 382.492 3.40158 381.96 5.9177L368.69 68.6395C368.308 70.4464 366.738 71.7567 364.892 71.81L7.79227 82.1181C5.59838 82.1814 3.76323 80.4651 3.67975 78.2719Z" fill="#A8E06C" stroke="black" strokeWidth="0.808717" />
                            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="text-lime-950 text-6xl lg:text-6xl font-extrabold font-cabinet  tracking-wide" fill="black">It&apos;s a habit.</text>
                        </svg>
                    </div>
                </div>
                <div className="h-[359px] justify-start items-start gap-6 lg:flex hidden">
                    <Image className=" min-h-[320px] rounded-2xl border border-white border-opacity-20 max-w-[270px]" alt='Holding Phone' src={holdingPhoneBig} />
                    <Image className=" min-h-[250px] rounded-2xl border border-white border-opacity-20 max-w-[193px]" alt='Busket' src={busket} />
                </div>
            </div>

            <div className='flex items-center justify-center lg:justify-between w-full lg:px-[80px] flex-row'>
                <div className="min-h-[359px] justify-start items-end gap-6 lg:inline-flex hidden">
                    <Image className="max-w-[302px] min-h-[250px] rounded-2xl border border-white border-opacity-20" src={holdingFruit} />
                    <Image className="max-w-[270px] min-h-[320px] rounded-2xl border border-white border-opacity-20 object-cover" src={sittingBig} />
                </div>
                <div className='w-full'>
                    <div className='mt-[30px] w-full items-end justify-end flex px-[16px]'>
                        <p className="w-[296px] lg:w-[510px] text-right text-lime-50 text-base lg:text-xl font-semibold font-cabinet leading-normal">Farmiz helps you make the best agricultural-related investment decisions and achieve lasting financial success.</p>
                    </div>
                    <div className='flex lg:justify-end justify-evenly py-6 px-[16px] gap-2  w-full'>
                        <AppButton path={apple} text="Apple App Store" />
                        <AppButton path={play} text="Google Play Store" />
                    </div>
                </div>
            </div>
            <div className="mt-[20px] lg:hidden  h-auto flex-col justify-center items-center gap-4 flex w-screen">
                <div className="max-w-[358px] flex justify-center items-start gap-4x">
                    <img height={243} width="100%"  style={{ maxWidth: "358px" }} className="max-w-[358px] h-[243px] rounded-[10.81px] border border-white border-opacity-20" src={holdingPhone.src} />
                </div>
                <div className=" grid-flow-col-dense grid grid-cols-2 max-w-[359px] justify-center gap-4 item-center  w-full">
                    <img width="100%"  className="col-span-2 grow shrink basis-0 h-[205px] rounded-[9.12px] border border-white border-opacity-20" src={holdingFruit.src} />
                    <img width="100%" className="max-w-[138px] h-[205px] rounded-[9.12px] border border-white border-opacity-20" src={sitting.src} />
                </div>
            </div>
        </div>
    );
};

export default AppHeader;


const Navigation = () => {
    const navItems = [
        ['Home', '/'],
        ['Features', '/features'],
        ['FAQs', '/faqs'],
    ];

    return (
        <nav className="w-[236px] h-[25px] justify-start items-start gap-10 hidden lg:inline-flex">
            {navItems.map(([title, url]) => (
                <Link key={title} href={url} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">
                    {title}
                </Link>
            ))}
        </nav>
    );
};

