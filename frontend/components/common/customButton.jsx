import { cn } from "@/lib/utils";

const CustomButton = ({
    children,
    option = {
        filled: true,
        primary: true,
        ring_primary: true,
        seconadryBg: false,
        text: "primary",
    },
    small,
    className,
    ...rest
}) => {
    return (
        <button
            className={cn(
                `text-lg ${
                    small
                        ? "py-[10px] px-[22px] text-base "
                        : "py-[26px] px-[46px] text-base"
                } uppercase ${
                    option?.filled
                        ? option?.primary
                            ? "bg-primary "
                            : "bg-secondary"
                        : option?.ring_primary
                        ? "ring-[3px] ring-inset ring-primary"
                        : "ring-[3px] ring-inset ring-secondary"
                } ${option.seconadryBg && "bg-black/80"} ${
                    option.text === "primary" ? "text-white" : "text-secondary"
                } ${className}`
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default CustomButton;
