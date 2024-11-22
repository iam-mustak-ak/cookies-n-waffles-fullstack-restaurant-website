"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./common/customButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const styels = {
        left: "max-md:-left-2/3",
        right: "max-md:left-0",
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                onClick={handleClose}
                className={`max-md:fixed ${
                    !isOpen && "max-md:hidden"
                } max-md:w-full max-md:bg-black/50 max-md:h-screen z-50`}
            ></div>
            <nav className="fixed top-0 h-[100px] flex  z-50 items-center backdrop-blur-md bg-black/50 w-full">
                <div className="container">
                    <div className=" w-full flex items-center justify-between">
                        <Link
                            href="/"
                            className="w-full max-w-[170px] h-[60px]"
                        >
                            <Image
                                alt="logo"
                                src="/assets/logo-cookies.svg"
                                width={170}
                                height={60}
                            />
                        </Link>

                        <div
                            className={`max-md:fixed ${
                                isOpen ? styels.right : styels.left
                            } transition-all max-md:w-2/3 max-md:bg-secondary  max-md:top-0 max-md:bottom-0 max-md:h-screen z-50`}
                        >
                            <ul className="flex max-md:flex-col max-md:justify-center max-md:h-screen items-center text-white font-dmSans text-lg uppercase font-normal gap-[30px] ">
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

                        <div className={`md:hidden `}>
                            <button
                                onClick={() =>
                                    setIsOpen((prevState) => !prevState)
                                }
                                className="bg-secondary p-5"
                            >
                                {isOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
