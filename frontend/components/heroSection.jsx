"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import HeroSectionText from "./heroSectionText";

const HeroSection = () => {
    return (
        <section>
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={
                    [
                        // Autoplay({
                        //     delay: 4000,
                        // }),
                    ]
                }
                className="absolute w-full"
            >
                <CarouselContent className="h-screen">
                    <CarouselItem>
                        <Image
                            src="/assets/carouselImg-1.png"
                            layout="fill"
                            alt="img 1"
                            objectFit="cover"
                        />
                    </CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
            </Carousel>
            <HeroSectionText />
        </section>
    );
};

export default HeroSection;
