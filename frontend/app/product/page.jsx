import Heading from "@/components/common/heading";
import ProductCard from "@/components/common/productCard";
import Image from "next/image";

const Page = () => {
    return (
        <div className="container py-[75px]">
            <Heading
                data={{
                    tagline: "Products",
                    title: "All Products",
                }}
            />
            <div className="grid grid-cols-4 gap-[30px]">
                {[...Array(8)].map((c, i) => (
                    <ProductCard key={i} category="Hello" />
                ))}
            </div>

            <div className="flex items-center gap-4 justify-end mt-6">
                <p className="text-xl leading-[93%] font-dmSans font-light">
                    Showing 1st Page of 23{" "}
                </p>
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
        </div>
    );
};

export default Page;
