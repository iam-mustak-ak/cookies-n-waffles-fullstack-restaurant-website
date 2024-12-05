const DaysCard = ({ position, primary, data }) => {
    const leftRight = {
        left: "justify-end",
        right: "justify-start",
        color: primary ? "text-primary" : "text-white",
    };

    const { DayToDay, TimeFrom, TimeTo } = data || {};

    return (
        <div
            className={`flex ${
                position === "left" ? leftRight.left : leftRight.right
            }`}
        >
            <div className={`${leftRight.color}`}>
                <h4 className="text-2xl md:text-[32px] leading-[48px] font-bold mb-2">
                    {DayToDay}
                </h4>
                <p className="text-xl md:text-[26px] leading-[26px] font-dmSans font-normal">
                    14 : 00 <span>-</span> 23 : 59
                </p>
            </div>
        </div>
    );
};

export default DaysCard;
