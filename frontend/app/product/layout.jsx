import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHero from "@/components/pageHero";
import Testimonials from "@/components/testimonials";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <PageHero title="Main product" />
            {children}
            <Testimonials />

            <Footer />
        </>
    );
};

export default Layout;
