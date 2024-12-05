"use client";

import useStore from "@/store/store";
import Image from "next/image";

const ShortMenuImage = () => {
    const { shortMenuImage } = useStore();
    return (
        <div className="image p-[30px] bg-primary/5">
            <Image
                src={shortMenuImage || null}
                alt="image"
                className="w-full h-full"
                width={570}
                height={570}
            />
        </div>
    );
};

export default ShortMenuImage;
