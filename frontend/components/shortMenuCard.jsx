const ShortMenuCard = () => {
    return (
        <div className="p-3 hover:bg-primary/5 ">
            <div className="border-b flex items-center justify-between pb-3 border-primary">
                <div className="info">
                    <h4 className="text-[32px] font-medium leading-[96%] mb-4">
                        Toaster Waffle
                    </h4>
                    <div className="tags">
                        <p className="font-dmSans uppercase font-light text-base leading-[93%]">
                            CRUNCHY | CRISPY | STWABERY FLAVOUR{" "}
                        </p>
                    </div>
                </div>
                <div className="price">
                    <p className="text-5xl font-medium">
                        <span className="text-base">$</span>12
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShortMenuCard;
