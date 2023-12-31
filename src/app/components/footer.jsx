import logo from "../../../public/footer-logo.png";
import Image from "next/image";
import appleFill from "../../../public/apple-fill.svg";
import playFill from "../../../public/play-fill.svg";

const Footer = () => {
  return (
    <div className="bg-custom-lime w-full">
      <div className="w-full bg-lime-300 py-10  ¸rounded-tl-3xl rounded-tr-3x">
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
                    <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-[#4C7B0F] opacity-100 dark:opacity-50"></div>
                    <Image src={playFill} alt="leaf" color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-10">
            <svg
              width="1268"
              // height="294"
              viewBox="0 0 1268 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M102.675 289H26.1748V136.85H0.674805V79.05H26.1748C27.8748 33.575 54.6498 -3.03984e-06 109.9 -3.03984e-06C134.55 -3.03984e-06 155.375 8.07499 166 13.6L145.175 68.425C137.95 62.05 128.6 56.95 118.825 56.95C107.775 56.95 102.675 63.325 102.675 73.525V79.05H145.175V136.85H102.675V289ZM213.314 293.675C182.714 293.675 158.489 278.375 158.489 240.55C158.489 206.55 177.614 187.85 224.364 173.4L280.889 155.975C278.764 144.075 272.389 138.975 255.389 138.975C231.164 138.975 203.964 152.15 186.539 171.7L152.539 115.6C178.889 91.8 215.864 74.8 259.639 74.8C313.614 74.8 346.764 101.15 346.764 155.125V218.45C346.764 227.8 349.314 230.775 356.964 230.775H369.289V289H325.939C302.139 289 278.764 278.8 278.764 249.05V232.9C272.389 260.1 256.239 293.675 213.314 293.675ZM226.489 229.925C226.489 236.725 231.589 240.55 242.639 240.55C267.714 240.55 278.764 230.775 278.764 209.1V202.725L244.339 215.05C229.889 220.15 226.489 224.4 226.489 229.925ZM465.12 289H388.62V79.05H465.12V150.025C471.495 113.9 491.47 74.8 534.395 74.8C570.945 74.8 584.545 97.75 584.545 132.6C584.545 158.1 576.045 179.775 570.095 190.4H499.97C507.62 181.475 516.12 165.325 516.12 152.575C516.12 140.675 511.02 132.6 498.695 132.6C481.27 132.6 465.12 149.175 465.12 183.175V289ZM677.62 289H601.12V79.05H677.62V141.1C683.145 106.25 700.145 74.8 746.47 74.8C783.02 74.8 805.12 99.025 805.12 141.1C810.645 106.25 827.645 74.8 873.97 74.8C910.52 74.8 932.62 99.025 932.62 141.95V289H856.12V171.7C856.12 146.2 851.445 132.6 830.62 132.6C810.645 132.6 805.12 140.675 805.12 174.675V289H728.62V171.7C728.62 146.2 723.945 132.6 703.12 132.6C683.145 132.6 677.62 140.675 677.62 174.675V289ZM1042.02 59.925H965.524V4.24999H1042.02V59.925ZM1042.02 289H965.524V79.05H1042.02V289ZM1267.17 289H1067.42V235.45L1114.6 185.725L1175.8 135.15L1098.87 138.975H1071.67V79.05H1262.92V132.6L1213.2 177.65L1148.17 232.475L1225.95 229.075H1267.17V289Z"
                fill="#173400"
              />
            </svg>
          </div>
          <div className="items-start gap-2 block lg:flex pt-10">
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
