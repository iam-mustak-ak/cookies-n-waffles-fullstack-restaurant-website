import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ category }) => {
    return (
        <div className="bg-primary/5">
            <Image
                src="/assets/cookie.png"
                alt="cookie"
                width={300}
                height={183}
                className="w-full h-[183px] object-cover"
            />
            <div className="flex flex-col gap-[10px] text-xl font-medium leading-5 p-4">
                <h4>Ferro Cookie Dough</h4>
                <span className={`h-[1px] bg-primary  w-[100px]`}></span>
                <div className="font-dmSans text-[32px] leading-9 flex items-end gap-[10px]">
                    <p>£7.45</p>
                    <span className="text-sm text-primary/30 font-normal line-through">
                        / £10.45{" "}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href={`/product/${category}`}
                        className="text-base text-primary py-[10px] px-[23px] ring-1 ring-inset ring-primary hover:bg-primary hover:text-white transition-colors"
                    >
                        Show more
                    </Link>
                    <Link
                        href={`/product/${category}`}
                        className="text-base text-white py-[10px] px-[23px] bg-primary hover:bg-white hover:text-primary hover:ring-1 hover:ring-inset hover:ring-primary transition-colors"
                    >
                        Order now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
