"use client";

import { useState } from "react";
import AccordionCard from "./accordionCard";

const Accordion = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(null);

    const handleOnclick = (index) => {
        setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="columns-1 md:columns-2 gap-[30px]">
            {[...Array(8)].map((accordionCard, index) => (
                <AccordionCard
                    key={index}
                    onPress={() => handleOnclick(index)}
                    index={index}
                    isAccordionOpen={isAccordionOpen}
                />
            ))}
        </div>
    );
};

export default Accordion;
