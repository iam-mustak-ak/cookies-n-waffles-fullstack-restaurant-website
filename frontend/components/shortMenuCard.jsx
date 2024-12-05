"use client";

import useStore from "@/store/store";
import { useCallback } from "react";

const ShortMenuCard = ({ menu }) => {
    const { shortMenuItem, setShortMenuImage } = useStore();
    const tagString = menu?.tags?.map((tag) => tag?.tag)?.join(" | ");

    const handleImageClick = useCallback(() => {
        setShortMenuImage({
            url: menu?.picture[0]?.url,
            id: menu?.documentId,
        });
    }, []);

    return (
        <div
            onClick={handleImageClick}
            onMouseOver={handleImageClick}
            className={`p-3 ${
                shortMenuItem?.id === menu?.documentId && "bg-primary/5"
            } hover:bg-primary/5`}
        >
            <div className="border-b flex items-center justify-between pb-3 border-primary">
                <div className="info">
                    <h4 className="text-[32px] font-medium leading-[96%] mb-4">
                        {menu?.itemName}
                    </h4>
                    <div className="tags">
                        <p className="font-dmSans uppercase font-light text-base leading-[93%]">
                            {tagString}
                        </p>
                    </div>
                </div>
                <div className="price">
                    <p className="text-5xl font-medium">
                        <span className="text-base">$</span>
                        {menu?.currentPrice}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShortMenuCard;
