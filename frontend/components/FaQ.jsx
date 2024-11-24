const FaQ = () => {
    return (
        <div className="pt-[75px]">
            <div className="flex flex-col items-center">
                <div className={`flex items-center  gap-6`}>
                    <span className={`h-[3px] bg-primary  w-[100px] `}></span>

                    <h4
                        className={`font-dmSans text-2xl font-semibold uppercase leading-[93%] `}
                    >
                        FAQ
                    </h4>

                    <span className={`h-[3px] bg-primary  w-[100px]`}></span>
                </div>
                <h2
                    className={`text-6xl md:text-8xl leading-[96%] font-medium`}
                >
                    Frequently Ask Question
                </h2>
            </div>
        </div>
    );
};

export default FaQ;
