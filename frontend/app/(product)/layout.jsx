import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageHero from "@/components/pageHero";
import Testimonials from "@/components/testimonials";

const ProductLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <PageHero />
            {children}
            <Testimonials />
            <Footer />
        </>
    );
};

export default ProductLayout;
