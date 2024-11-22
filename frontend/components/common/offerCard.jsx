import Image from "next/image";

const OfferCard = () => {
    return (
        <div className="flex items-start bg-primary/5">
            <Image
                src="/assets/cookie.png"
                alt="cookie"
                width={110}
                height={67}
                className="object-cover w-[110px] h-[67px]"
            />
            <div className="p-2  flex-1">
                <h6 className="text-base font-medium leading-[15px] mb-[5px]">
                    Kinder Bueno Cookie Dough
                </h6>
                <p className="font-dmSans text-sm leading-[15px]">
                    £7.45 /{" "}
                    <span className="text-[10px] leading-[14px] line-through">
                        £10.45
                    </span>
                </p>
            </div>
        </div>
    );
};

export default OfferCard;
