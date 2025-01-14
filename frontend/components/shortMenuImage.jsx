"use client";

import useStore from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";

const ShortMenuImage = ({ firstItem }) => {
    const { shortMenuItem, setShortMenuImage } = useStore();

    useEffect(() => {
        setShortMenuImage({
            url: firstItem[0]?.picture[0]?.url,
            id: firstItem[0]?.documentId,
        });
    }, []);

    console.log(shortMenuItem);
    return (
        <div className="image p-[30px] bg-primary/5">
            {shortMenuItem?.url ? (
                <Image
                    src={shortMenuItem?.url}
                    alt="image"
                    className="w-full h-full"
                    width={570}
                    height={570}
                />
            ) : (
                <p>No Image Found</p>
            )}
        </div>
    );
};

export default ShortMenuImage;
