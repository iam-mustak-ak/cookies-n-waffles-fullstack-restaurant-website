import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ category, data }) => {
    return (
        <div className="bg-primary/5">
            {data?.picture[0]?.url ? (
                <Image
                    src={data?.picture[0]?.url}
                    alt="cookie"
                    width={300}
                    height={183}
                    className="w-full h-[183px] object-cover"
                />
            ) : (
                <p>No picture Found</p>
            )}
            <div className="flex flex-col gap-[10px] text-xl font-medium leading-5 p-4">
                <h4>{data?.itemName}</h4>
                <span className={`h-[1px] bg-primary  w-[100px]`}></span>
                <div className="font-dmSans text-[32px] leading-9 flex items-end gap-[10px]">
                    <p>£{data?.currentPrice}</p>
                    <span className="text-sm text-primary/30 font-normal line-through">
                        / £{data?.previousPrice}{" "}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href={`/product/${encodeURIComponent(
                            decodeURIComponent(data?.itemName)
                                .replace(/\s+/g, "-")
                                .toLocaleLowerCase()
                        )}?item=${data?.documentId}`}
                        className="text-base text-primary py-[10px] px-[23px] ring-1 ring-inset ring-primary hover:bg-primary hover:text-white transition-colors"
                    >
                        Show more
                    </Link>
                    <Link
                        href={`/product/${encodeURIComponent(
                            decodeURIComponent(data?.itemName)
                                .replace(/\s+/g, "-")
                                .toLocaleLowerCase()
                        )}?item=${data?.documentId}`}
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
