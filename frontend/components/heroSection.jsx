"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="w-full h-screen">
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
        </section>
    );
};

export default HeroSection;
