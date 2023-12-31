import { default as PromiseCard } from "./promise-card";
import lock from '../../../public/lock.svg'
import chat from '../../../public/chat.svg'




const AppPromise = () => {
    return (
        <div className="flex bg-violet-300 flex-col px-[16px] justify-center  items-center py-10 ">
            <strong className="text-center mb-5 text-lime-950 text-2xl font-extrabold font-cabinet lg:text-5xl lg:leading-[60px] tracking-wide">
                The Farmiz promise
            </strong>
            <p className="text-center text-neutral-800 text-base font-medium font-cabinet mb-7 lg:w-[45%] items-center">
                Simply put, our goal is to make your money work harder. As a result, we will
                take all reasonable steps to maximize and safeguard it.
            </p>

            <div className="lg:flex-row flex lg:gap-4 justify-center items-center  lg:px-[80px] flex-col w-full">
                <PromiseCard image={chat} title='Your questions answered in no time' subTitle="Our 400,000+ customers' reviews and ratings speak for themselves when it comes to customer service. We respond to consumers five days a week in five different languages." />
                <PromiseCard image={lock} title='Your account is secure and safe' subTitle='Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies' />
            </div>

        </div>
    );
}

export default AppPromise;