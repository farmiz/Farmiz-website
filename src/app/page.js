import Image from 'next/image'
import logo from '../../public/logo.svg'
import menu from '../../public/menu.svg'
import apple from '../../public/apple.svg'
import AppButton from './components/app-button'
import textClip from '../../public/text-clip.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full">
      <div className='w-full bg-custom-lime flex items-center justify-between flex-col py-6'>
        <div className='w-full bg-custom-lime flex items-center justify-between pb-3 px-[16px] border-b-white border-opacity-20 border-b-[1px]'>
          <Image
            src={logo}
            alt="Picture of the author"
          />
          <div className="w-[236px] h-[25px] justify-start items-start gap-10 sm:hidden lg:inline-flex">
            <Link href={'/about'} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">About</Link>
            <Link href={'/about'} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">Features</Link>
            <Link href={'/about'} className="text-white text-[17px] font-medium font-cabinet leading-[25px] tracking-tight">FAQs</Link>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-5 rounded-full border border-white border-opacity-20 justify-center items-center gap-7 inline-flex md:hidden">
            <Image
              src={menu}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className='w-full justify-evenly flex px-[16px] py-4'>
          <div className='flex flex-col py-5 '>
            <p className="text-white text-[68px] font-extrabold font-cabinet leading-[72px]">Financial succes is <br /> not an occurrence.</p>
            <div className="relative">
              <Image
                width={330}
                src={textClip}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 top-3 left-2 items-center justify-center">
                <p className="text-lime-950 text-6xl font-extrabold font-cabinet leading-[48px] tracking-wide">It's a habit.</p>
              </div>
            </div>
          </div>
          <div className=" h-[359px] justify-start items-start gap-6 flex">
            <img className=" h-[359px] rounded-2xl border border-white border-opacity-20" src="https://via.placeholder.com/302x359" />
            <img className=" h-[250px] rounded-2xl border border-white border-opacity-20" src="https://via.placeholder.com/193x250" />
          </div>
        </div>

        <div className='flex justify-evenly flex-row'>
        <div className="w-[628px] h-[359px] justify-start items-end gap-6 inline-flex">
            <img className="w-[302px] h-[266px] rounded-2xl border border-white border-opacity-20" src="https://via.placeholder.com/302x266" />
            <img className="w-[302px] h-[359px] rounded-2xl border border-white border-opacity-20" src="https://via.placeholder.com/302x359" />
          </div>
          <div>
            <div className='w-full items-end justify-end flex px-[16px] py-10'>
              <p className="md:w-[296px] lg:w-[510px] text-right text-lime-50 text-base font-bold font-cabinet">Farmiz helps you make the best agricultural-related investment decisions and achieve lasting financial success.</p>
            </div>
            <div className='flex lg:justify-end justify-between py-6 px-[16px]'>
              <AppButton path={apple} text="Apple App Store"/>
              <AppButton path={apple} text="Google Play Store" />
            </div>
          </div>
        </div>

        <div className=" md:hidden w-[359] h-[464px] flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[358px] justify-start items-start gap-4 inline-flex">
            <img className="w-[358px] h-[243px] rounded-[10.81px] border border-white border-opacity-20" src="https://via.placeholder.com/358x243" />
          </div>
          <div className="w-[359.16px] justify-start items-end gap-4 inline-flex">
            <img className="grow shrink basis-0 h-[205px] rounded-[9.12px] border border-white border-opacity-20" src="https://via.placeholder.com/205x205" />
            <img className="w-[138px] h-[205px] rounded-[9.12px] border border-white border-opacity-20" src="https://via.placeholder.com/138x205" />
          </div>
        </div>
      </div>
    </main>
  )
}
