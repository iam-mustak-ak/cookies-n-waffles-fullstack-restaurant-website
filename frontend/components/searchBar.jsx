import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="bg-primary/5 flex items-center justify-between pr-5">
            <form action="" className="w-full">
                <input
                    type="text"
                    className="bg-none outline-none text-2xl p-5 font-medium bg-inherit placeholder:text-primary w-full"
                    placeholder="Search Menu"
                />
            </form>
            <Search className="w-6 h-6 font-bold" />
        </div>
    );
};

export default SearchBar;
