import logo from "../../../public/footer-logo.png";
import Image from "next/image";
import appleFill from "../../../public/apple-fill.svg";
import playFill from "../../../public/play-fill.svg";

const Footer = () => {
  return (
    <div className="bg-custom-lime w-full">
      <div className="w-full bg-lime-300 py-10 rounded-tl-3xl rounded-tr-3xl">
        <div className="w-[95%] m-auto">
          <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="logo mb-10">
              <Image src={logo} alt="Logo" width={100} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
              <div className="pt-1 flex-col justify-start items-start gap-8 flex">
                <div className="text-lime-950 text-xl font-bold font-cabinet leading-[30px]">
                  Farmiz
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    About us
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Features
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Help
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    FAQs
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Resources
                  </div>
                </div>
              </div>
              <div className="pt-1 flex-col justify-start items-start gap-8 flex">
                <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">
                  Legal
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    License Overview
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Terms and condition
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Privacy
                  </div>
                </div>
              </div>
              <div className="pt-1 flex-col justify-start items-start gap-8 flex">
                <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">
                  Follow Us
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Instagram
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Twitter
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    LinkedIn
                  </div>
                  <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                    Facebook
                  </div>
                </div>
              </div>
              <div className="pt-1 flex-col justify-start items-end gap-8 flex">
                <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">
                  Get The App
                </div>
                <div className="w-28 h-12 bg-lime-950 rounded-lg border border-lime-800 border-opacity-20  justify-center items-center flex">
                  <div className="flex flex-1 justify-evenly">
                    <Image src={appleFill} alt="leaf" />
                    <Image src={playFill} alt="leaf" color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center text-lime-950 lg:text-9xl md:text-3xl text-2xl font-black font-cabinet">
            farmiz
          </div>
          <div className="items-start gap-2 block lg:flex">
            <div className="grow shrink basis-0 text-neutral-800 lg:text-xl font-medium font-cabinet">
              Farmiz is a financial technology company, not a bank. Banking
              services provided by partner banks, members FDIC.
            </div>
            <div className="">
              <span className="text-lime-950 lg:text-[22px] font-medium font-cabinet">
                ©
              </span>
              <span className="text-lime-950 lg:text-xl font-medium font-cabinet">
                2023 Farmiz HQ
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-auto px-4 py-12 bg-lime-300 rounded-tl-3xl rounded-tr-3xl border border-lime-950 border-opacity-20 flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch h-96 flex-col justify-start items-start gap-10 flex">
     
          <div className="w-full  h-96 flex-row justify-between items-start gap-6 flex">
            <div className="logo mb-10">
              <Image src={logo} alt="Logo" width={100} />
            </div>
            <div className="self-stretch grid grid-cols-4 grid-flow-row-dense flex-wrap justify-start items-start gap-28">
              <div className="pt-1 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-lime-950 text-lg font-bold font-['Cabinet Grotesk'] leading-relaxed">
                  Farmiz
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    About us
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Features
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Help
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    FAQs
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Resources
                  </div>
                </div>
              </div>
              <div className="pt-1 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-lime-950 text-lg font-bold font-['Cabinet Grotesk'] leading-relaxed">
                  Legal
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    License Overview
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Terms and condition
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Privacy
                  </div>
                </div>
              </div>
              <div className="pt-1 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-lime-950 text-lg font-bold font-['Cabinet Grotesk'] leading-relaxed">
                  Follow Us
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Instagram
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Twitter
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    LinkedIn
                  </div>
                  <div className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
                    Facebook
                  </div>
                </div>
              </div>
              <div className="pt-1 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-lime-950 text-lg font-bold font-['Cabinet Grotesk'] leading-relaxed">
                  Get The App
                </div>
                <div className="h-12 bg-lime-950 rounded-lg border border-lime-800 border-opacity-20 justify-center items-center inline-flex">
                  <div className="px-4 py-2.5 justify-center items-center gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-px origin-top-left rotate-90 border border-lime-700"></div>
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 left-0 top-0 absolute"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-center text-lime-950 text-9xl font-black font-['Cabinet Grotesk'] lowercase">
          FARMIZ
        </div>
        <div className="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-neutral-800 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
            Farmiz is a financial technology company, not a bank. Banking
            services provided by partner banks, members FDIC.
          </div>
          <div>
            <span className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
              ©
            </span>
            <span className="text-lime-950 text-base font-medium font-['Cabinet Grotesk'] leading-normal">
              {" "}
              2023 Farmiz HQ
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
