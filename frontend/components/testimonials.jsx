import Image from "next/image";
import Heading from "./common/heading";
import TestimonialsCard from "./common/testimonialsCard";

const Testimonials = () => {
    return (
        <section className="pb-20">
            <div className="container">
                <div className="flex items-end justify-between mb-[60px]">
                    <div>
                        <Heading
                            data={{
                                tagline: "TESTIMONIALS",
                                title: "Our Happy Customer",
                            }}
                            noMargin
                        />
                    </div>
                    <div className="sliderBtns flex items-center gap-10">
                        <button className="bg-primary p-[14px]">
                            <Image
                                src="/assets/left-arrow.svg"
                                width={32}
                                height={32}
                                alt="arrow-left"
                            />
                        </button>
                        <button className="bg-primary p-[14px]">
                            <Image
                                src="/assets/right-arrow.svg"
                                width={32}
                                height={32}
                                alt="arrow-right"
                            />
                        </button>
                    </div>
                </div>

                <div className="testimonial-wrapper flex items-center gap-[30px] justify-center">
                    <TestimonialsCard />
                    <TestimonialsCard />
                    <TestimonialsCard />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
