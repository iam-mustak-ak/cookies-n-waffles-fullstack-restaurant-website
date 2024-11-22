import Accordion from "@/components/common/accordion";
import Heading from "@/components/common/heading";
import DaysCard from "@/components/daysCard";
import FaQ from "@/components/FaQ";
import { Mail, MapPin, Phone } from "lucide-react";

const Page = () => {
    return (
        <div className="container py-[75px]">
            <div className="grid md:grid-cols-2 gap-[30px]">
                <div className="bg-primary/5 p-12">
                    <h4 className="font-bold text-5xl leading-[48px] text-primary text-center mb-8">
                        Working Hour
                    </h4>
                    <DaysCard primary />
                    <DaysCard left primary />
                    <DaysCard primary />
                    <DaysCard left primary />
                </div>
                <div>
                    <Heading
                        data={{
                            tagline: "GET IN TOUCH",
                            title: "Contact us for any inquie",
                        }}
                    />
                    <p className="font-dmSans text-lg leading-[26px] font-light mb-10">
                        Repudiandae dignissimos fugiat sit nam. Tempore
                        aspernatur quae repudiandae dolorem, beatae dolorum,
                        praesentium itaque et quam quaerat. quae repudiandae
                        dolorem, beatae dolorum, praesentium itaque et quam
                        quaerat.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-6 h-6" />
                            <p className="font-medium text-2xl leading-[96%]">
                                Address: 148 martha street, London
                                Postcode: E1 2PG
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6" />
                            <p className="font-medium text-2xl leading-[96%]">
                                0127557 16686
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6" />
                            <p className="font-medium text-2xl leading-[96%]">
                                waffleshsj@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FaQ />

            <div className="pt-14">
                <Accordion />
            </div>
        </div>
    );
};

export default Page;
