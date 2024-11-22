import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHero from "@/components/pageHero";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <PageHero title="Contact Us" />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
