import Image from "next/image";

const TestimonialsCard = () => {
    return (
        <div className="p-[30px] flex flex-col gap-[30px] ring-[3px] bg-primary/5 ring-inset ring-primary">
            <div className="flex gap-[10px]">
                {[...Array(5)].map((i, j) => (
                    <Image
                        key={j}
                        src="/assets/star.svg"
                        width={24}
                        height={24}
                        alt="star"
                    />
                ))}
            </div>
            <p className="text-textColor font-dmSans text-lg leading-[33.3px]">
                Your company is truly upstanding and is behind its product 100%.
                It's the perfect solution for for our business.
            </p>
            <div className="userInfo flex items-center justify-between">
                <div>
                    <h5 className="text-secondaryTextColor font-medium text-[26px] leading-[35.5px] mb-2">
                        Brooklyn Simmons
                    </h5>
                    <p className="font-dmSans text-secondaryTextColor text-xl leading-[31px]">
                        CEO of Asana
                    </p>
                </div>
                <Image
                    src="/assets/user.png"
                    width={60}
                    height={60}
                    alt="customer"
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default TestimonialsCard;
