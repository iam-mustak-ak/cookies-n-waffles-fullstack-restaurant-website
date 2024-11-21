import Link from "next/link";

const SidebarCategories = () => {
    return (
        <div>
            <h4 className="uppercase text-[32px] font-medium leading-[96%] my-6">
                CATEGORIES
            </h4>
            <ul className="font-dmSans text-xl flex flex-col gap-6">
                {[...Array(5)].map((category, i) => (
                    <li key={i} className="leading-[93%]">
                        <Link
                            href="/menu/:categories"
                            className="flex items-center justify-between"
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
