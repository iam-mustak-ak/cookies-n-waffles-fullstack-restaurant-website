import ProductCard from "@/components/common/productCard";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <div className="container py-[75px]">
            <div className=" grid grid-cols-12 gap-[30px]">
                <div className="col-span-9 flex flex-col gap-[30px]">
                    <div className="flex items-stretch gap-[30px]">
                        <div className="flex flex-col gap-6">
                            <Image
                                src="/assets/cookie.png"
                                alt="cookie"
                                width={190}
                                height={135}
                                className="w-[190px] h-[135px] object-cover"
                            />
                            <Image
                                src="/assets/cookie.png"
                                alt="cookie"
                                width={190}
                                height={135}
                                className="w-[190px] h-[135px] object-cover"
                            />
                            <Image
                                src="/assets/cookie.png"
                                alt="cookie"
                                width={190}
                                height={135}
                                className="w-[190px] h-[135px] object-cover"
                            />
                        </div>
                        <Image
                            src="/assets/cookie.png"
                            alt="cookie"
                            width={740}
                            height={451}
                            className="w-full h-[451px] object-cover"
                        />
                    </div>
                    <div className="bg-primary/5 p-6 flex items-stretch h-full ">
                        <div className="flex-1 pr-[30px] border-r border-primary/5">
                            <h4 className="text-4xl leading-9 font-medium mb-4">
                                Ferro Cookie Dough
                            </h4>
                            <p className="font-dmSans text-xl leading-[26px]">
                                Our freshly made Belgian waffles are cooked to
                                order and can be customised with various
                                toppings. Each waffle is served with Gelato ice
                                cream. Each waffle is served with Gelato ice
                                cream.
                            </p>
                        </div>
                        <div className="pl-[15px] flex flex-col justify-between h-full">
                            <div className="font-dmSans text-4xl leading-9 pb-6">
                                <span className="text-xs text-primary/30">
                                    £10.45
                                </span>
                                <p>£7.45</p>
                            </div>

                            <div className="w-full">
                                <p className="font-dmSans text-base font-light text-primary mb-[10px]">
                                    Order with
                                </p>
                                <Link
                                    className="w-full py-[10px] bg-primary text-base text-white px-[45px]"
                                    href="/"
                                >
                                    Uber Eats
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <h4 className="text-4xl leading-[96%] mb-6">
                        Related Products
                    </h4>
                    <div className="flex flex-col gap-[30px]">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-4xl leading-[96%] mb-6 mt-[50px]">
                    More Products
                </h4>

                <div className="grid grid-cols-4 gap-[30px]">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Page;
