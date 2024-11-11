import CustomButton from "./common/customButton";

const HeroSectionText = () => {
    return (
        <div className="w-auto h-screen container relative">
            <div className="heroTextsWrapper  left-auto absolute w-1/2 top-1/2 -translate-y-1/2">
                <div className="heroTexts">
                    <h4 className="text-2xl text-secondary font-semibold">
                        Cookies & Waffles
                    </h4>
                    <h1 className="text-8xl text-secondary font-bold leading-[96px]">
                        Best food for your taste
                    </h1>

                    <div className="buttons mt-11 flex items-center gap-[30px]">
                        <CustomButton
                            option={{
                                filled: true,
                                primary: false,
                                text: "primary",
                            }}
                        >
                            Order now
                        </CustomButton>
                        <CustomButton
                            option={{
                                filled: false,
                                ring_primary: false,
                                seconadryBg: true,
                            }}
                        >
                            View menu
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionText;
