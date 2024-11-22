import Sidebar from "@/components/common/sidebar";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import PageHero from "@/components/pageHero";
import Testimonials from "@/components/testimonials";

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
            <Testimonials />
            <Footer />
        </>
    );
};

export default MenuLayout;
