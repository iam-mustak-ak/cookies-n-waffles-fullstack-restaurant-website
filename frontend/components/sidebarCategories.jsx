import { getCategories } from "@/data/getMenuData";
import Link from "next/link";

const SidebarCategories = async () => {
    const categories = await getCategories();

    const totolItems = categories.reduce(
        (acc, category) => acc + category?.menus?.length,
        0
    );
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
                        <span className="font-light">{totolItems}</span>
                    </Link>
                </li>
                {categories?.map((category, i) => (
                    <li key={category?.documentId} className="leading-[93%]">
                        <Link
                            href={`/menu/${encodeURIComponent(
                                decodeURIComponent(category?.categoryName)
                                    .replace(/\s+/g, "-")
                                    .toLocaleLowerCase()
                            )}?id=${category?.documentId}`}
                            className="flex items-center justify-between py-2"
                        >
                            <span className="font-semibold">
                                {category?.categoryName}
                            </span>
                            <span className="font-light">
                                {category?.menus?.length}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarCategories;
