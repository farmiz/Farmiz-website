const { default: OpenCards } = require("./slider")


const AppFAQ = () => {
    return (
        <div className=" bg-lime-50 h-200 py-[16px] w-full flex items-center  flex-col">
            <strong className="mr-auto mt-10 mb-[40px] w-[60%] text-center  text-lime-950 text-lg font-extrabold font-cabinet lg:text-4xl lg:leading-[60px] tracking-wide">
                Answers to most Asked Questions
            </strong>
            <OpenCards />
        </div>

    )
}

export default AppFAQ;