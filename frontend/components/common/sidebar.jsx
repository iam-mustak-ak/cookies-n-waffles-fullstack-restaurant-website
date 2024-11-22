import Offer from "../offer";
import SearchBar from "../searchBar";
import SidebarCategories from "../sidebarCategories";

const Sidebar = ({ category }) => {
    return (
        <aside className="w-full max-w-[300px]">
            <SearchBar />
            <SidebarCategories category={category} />
            <Offer />
        </aside>
    );
};

export default Sidebar;
