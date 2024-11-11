import Link from "next/link";
import CustomButton from "./common/customButton";
import Heading from "./common/heading";

const ShortMenu = () => {
    return (
        <section>
            <div className="container">
                <div className="flex items-end justify-between">
                    <div>
                        <Heading
                            data={{
                                tagline: "OUR MENU",
                                title: "Our top Snacks",
                            }}
                            noMargin
                        />
                    </div>
                    <Link href="/menu">
                        <CustomButton
                            option={{
                                primary: true,
                                filled: true,
                                text: "primary",
                            }}
                        >
                            View all
                        </CustomButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ShortMenu;
