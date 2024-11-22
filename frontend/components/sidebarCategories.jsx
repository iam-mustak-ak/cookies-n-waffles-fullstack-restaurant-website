import Link from "next/link";

const SidebarCategories = () => {
    return (
        <div>
            <h4 className="uppercase text-[32px] font-medium leading-[96%] my-6">
                CATEGORIES
            </h4>
            <ul className="font-dmSans text-xl flex flex-col gap-4">
                <li className="leading-[93%]">
                    <Link
                        href={`/menu`}
                        className="flex items-center justify-between py-2"
                    >
                        <span className="font-semibold">All Menu</span>
                        <span className="font-light">32</span>
                    </Link>
                </li>
                {[...Array(5)].map((category, i) => (
                    <li key={i} className="leading-[93%]">
                        <Link
                            href={`/menu/${i}`}
                            className="flex items-center justify-between py-2"
                        >
                            <span className="font-semibold">Cookies</span>
                            <span className="font-light">32</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarCategories;
