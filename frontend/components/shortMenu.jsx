import Image from "next/image";
import Link from "next/link";
import CustomButton from "./common/customButton";
import Heading from "./common/heading";
import ShortMenuCard from "./shortMenuCard";

const ShortMenu = () => {
    return (
        <section className="pb-20 max-md:pt-14">
            <div className="container">
                <div className="flex max-md:flex-col items-start md:items-end justify-between pb-6 md:mb-20">
                    <div className="max-md:mb-5">
                        <Heading
                            data={{
                                tagline: "OUR MENU",
                                title: "Our top Snacks",
                            }}
                            noMargin
                        />
                    </div>
                    <Link href="/menu">
                        <CustomButton
                            option={{
                                primary: true,
                                filled: true,
                                text: "primary",
                            }}
                        >
                            View all
                        </CustomButton>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-[30px]">
                    <div className="menus flex flex-col gap-[10px]">
                        <ShortMenuCard />
                        <ShortMenuCard />
                        <ShortMenuCard />
                        <ShortMenuCard />
                        <ShortMenuCard />
                        <ShortMenuCard />
                        <ShortMenuCard />
                    </div>
                    <div className="image p-[30px] bg-primary/5">
                        <Image
                            src="/assets/cookie.png"
                            alt="image"
                            className="w-full h-full"
                            width={570}
                            height={570}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShortMenu;
