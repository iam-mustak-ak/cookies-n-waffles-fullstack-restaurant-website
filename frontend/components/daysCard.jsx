const DaysCard = ({ left }) => {
    const leftRight = {
        left: "justify-end",
        right: "justify-start",
    };

    return (
        <div className={`flex ${left ? leftRight.left : leftRight.right}`}>
            <div className="text-white">
                <h4 className="text-[32px] leading-[48px] font-bold mb-2">
                    Monday to Thursday
                </h4>
                <p className="text-[26px] leading-[26px] font-dmSans font-normal">
                    14 : 00 <span>-</span> 23 : 59
                </p>
            </div>
        </div>
    );
};

export default DaysCard;