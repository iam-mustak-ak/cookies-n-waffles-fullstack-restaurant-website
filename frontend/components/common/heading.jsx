const Heading = ({ data, noMargin, secondary, right }) => {
    return (
        <>
            <div
                className={`flex items-center ${right && "justify-end"} gap-6 ${
                    secondary && "text-secondary"
                }`}
            >
                {right && (
                    <span
                        className={`h-[3px] bg-primary  w-[100px] ${
                            secondary && "bg-secondary"
                        }`}
                    ></span>
                )}
                <h4
                    className={`font-dmSans text-2xl font-semibold uppercase leading-[93%] `}
                >
                    {data.tagline}
                </h4>
                {!right && (
                    <span
                        className={`h-[3px] bg-primary  w-[100px] ${
                            secondary && "bg-secondary"
                        }`}
                    ></span>
                )}
            </div>
            <h2
                className={`text-8xl leading-[96%] ${
                    right && "text-right"
                } font-medium ${secondary && "text-secondary"} ${
                    !noMargin && "mb-6"
                }`}
            >
                {data.title}
            </h2>
        </>
    );
};

export default Heading;
