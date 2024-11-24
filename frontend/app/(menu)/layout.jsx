import Sidebar from "@/components/common/sidebar";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import PageHero from "@/components/pageHero";

const MenuLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <PageHero title="Our menu’s" />

            <div className="container py-[60px] flex gap-[30px]">
                <Sidebar />
                <main>{children}</main>
            </div>
            <Gallery control={false} />
        </>
    );
};

export default MenuLayout;
