import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./common/customButton";

const Navbar = () => {
    return (
        <nav className="absolute top-0 h-[100px] flex items-center backdrop-blur-md bg-black/50 w-full z-50">
            <div className="container">
                <div className=" w-full flex items-center justify-between">
                    <Link href="/" className="w-full max-w-[170px] h-[60px]">
                        <Image
                            alt="logo"
                            src="/assets/logo-cookies.svg"
                            objectFit="contain"
                            width={170}
                            height={60}
                        />
                    </Link>

                    <ul className="flex items-center text-white font-dmSans text-lg uppercase font-normal gap-[30px]">
                        <li>
                            <Link href="/menu">Our menu</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <CustomButton
                                    option={{
                                        filled: true,
                                        primary: true,
                                        text: "primary",
                                    }}
                                    small
                                    className="py-4 px-6"
                                >
                                    <div className="flex items-center gap-5">
                                        <Phone className="w-5 h-5" />

                                        <span>+44 037837 73</span>
                                    </div>
                                </CustomButton>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
