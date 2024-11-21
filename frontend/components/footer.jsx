import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container">
                <div className="py-20 grid grid-cols-3 items-start justify-center">
                    <div className="flex flex-col gap-[30px]">
                        <Image
                            src="/assets/logo-cookies.svg"
                            width={170}
                            height={60}
                            alt="logo"
                        />

                        <div className="flex items-center gap-[30px]">
                            {[...Array(4)].map((i, j) => (
                                <div
                                    key={j}
                                    className="w-[56px] h-[56px] p-4 bg-secondary"
                                >
                                    <Link href="#" target="_blank">
                                        <Image
                                            src="/assets/fb.svg"
                                            width={24}
                                            height={24}
                                            alt="facebook"
                                            className="w-6 h-6 object-contain"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-secondary justify-self-center">
                        <h4 className="text-[32px] leading-[96%] font-medium mb-[30px] text-secondary">
                            Useful
                        </h4>

                        <ul className="font-dmSans leading-[93%] text-white font-bold flex flex-col gap-[18px]">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About us</Link>
                            </li>
                            <li>
                                <Link href="/menu">Menu</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-secondary justify-self-end">
                        <h4 className="text-[32px] leading-[96%] font-medium mb-[30px] text-secondary">
                            Contact info
                        </h4>

                        <ul className="font-dmSans leading-[93%] text-base text-white font-bold flex flex-col gap-[18px]">
                            <li>
                                <p className="font-light">
                                    <span className="font-bold">Call :</span>{" "}
                                    +76 (094) 754 43 71
                                </p>
                            </li>
                            <li>
                                <p className="font-light">
                                    {" "}
                                    <span className="font-bold">
                                        Write :
                                    </span>{" "}
                                    your.email.inbox@here.com
                                </p>
                            </li>
                            <li>
                                <p className="font-light">
                                    <span className="font-bold">Find us :</span>{" "}
                                    Canada, Toronto, Avenue 31B,
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="h-[3px] w-full bg-secondary rounded-xl border-none" />
                <p className="font-dmSans text-base uppercase font-medium text-white text-center py-[30px]">
                    &copy; cookies n waffles 2024
                </p>
            </div>
        </footer>
    );
};

export default Footer;
