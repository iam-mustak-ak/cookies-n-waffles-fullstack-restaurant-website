import ProductCard from "@/components/common/productCard";
import PageHeader from "@/components/pageHeader";
import Image from "next/image";

const Page = async ({ params }) => {
    const category = (await params).category;
    console.log(category);
    return (
        <>
            <PageHeader title="All Menu" count={64} />
            <div className="py-6 grid grid-cols-3 gap-[30px]">
                {[...Array(6)].map((item, i) => (
                    <ProductCard category={category} key={i} />
                ))}
            </div>
            <div className="flex items-center gap-4 justify-end">
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
        </>
    );
};

export default Page;
