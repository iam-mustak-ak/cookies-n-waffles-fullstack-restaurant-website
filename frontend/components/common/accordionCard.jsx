import { ChevronDown } from "lucide-react";

const AccordionCard = ({ onPress, index, isAccordionOpen }) => {
    return (
        <div onClick={onPress} className="mb-4 md:mb-[30px] cursor-pointer">
            <div className="py-8 px-[30px] bg-primary/5">
                <div className="flex  items-center justify-between">
                    <span className="text-xl leading-5">
                        Biscoff Cookie Dough
                    </span>
                    <div
                        className={`transition-all ${
                            isAccordionOpen === index && "rotate-180"
                        }`}
                    >
                        <ChevronDown />
                    </div>
                </div>

                <div
                    className={`text-base leading-[96%] font-dmSans transition-all ${
                        isAccordionOpen === index
                            ? " grid grid-rows-[1fr] mt-8 opacity-100"
                            : " grid grid-rows-[0] opacity-0"
                    }`}
                >
                    <p className="overflow-hidden">Accordion Content</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionCard;
