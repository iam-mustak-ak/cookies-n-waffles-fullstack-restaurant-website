import Image from "next/image";
import Link from "next/link";
import CustomButton from "./common/customButton";
import Heading from "./common/heading";

const ProductIntro = ({ position, data }) => {
    return (
        <div className="container grid md:grid-cols-2">
            <div
                className={`${
                    position == "left" && "order-2"
                } bg-primary/5 p-5 md:p-20 h-full flex flex-col justify-between`}
            >
                <div>
                    <Heading data={data} />
                    <p className="font-dmSans text-lg leading-[26px] font-light mb-16">
                        {data.shortDes}
                    </p>
                </div>
                <Link href={data.link} className="btn">
                    <CustomButton
                        option={{
                            filled: true,
                            primary: true,
                            text: "primary",
                        }}
                    >
                        {data.label}
                    </CustomButton>
                </Link>
            </div>
            <div className={`h-full w-full ${position == "left" && "order-1"}`}>
                <Image
                    src={data.image}
                    sizes="100vw"
                    className="w-full h-auto"
                    alt="cookie"
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
};

export default ProductIntro;
