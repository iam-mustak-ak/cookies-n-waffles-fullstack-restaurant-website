import Offer from "../offer";
import SearchBar from "../searchBar";
import SidebarCategories from "../sidebarCategories";

const Sidebar = () => {
    return (
        <aside className="w-full max-w-[300px]">
            <SearchBar />
            <SidebarCategories />
            <Offer />
        </aside>
    );
};

export default Sidebar;
