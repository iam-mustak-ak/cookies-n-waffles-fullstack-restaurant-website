import CustomButton from "./common/customButton";
import Heading from "./common/heading";
import DaysCard from "./daysCard";

const WorkingHours = () => {
    return (
        <section className="bg-hours bg-cover bg-center bg-no-repeat ">
            <div className="container">
                <div className="py-[121px] px-[75px]">
                    <div className="grid grid-cols-2 items-center justify-between gap-[100px]">
                        <div className="flex flex-col  gap-4">
                            <Heading
                                data={{
                                    tagline: "RESERVATION",
                                    title: "Working hours",
                                }}
                                noMargin
                                secondary
                            />
                            <p className="font-dmSans text-base font-light leading-[26px] text-white">
                                Repudiandae dignissimos fugiat sit nam. Tempore
                                aspernatur quae repudiandae dolorem, beatae
                                dolorum, praesentium itaque et quam quaerat.
                                quae repudiandae dolorem, beatae dolorum,
                                praesentium itaque et quam quaerat.
                            </p>
                            <div className="hoursBtn">
                                <CustomButton>Contact us</CustomButton>
                            </div>
                        </div>

                        <div className="bg-primary p-10 flex flex-col gap-4">
                            <DaysCard />
                            <DaysCard left />
                            <DaysCard />
                            <DaysCard left />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingHours;
