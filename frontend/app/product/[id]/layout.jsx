import PageHero from "@/components/pageHero";

const ProductLayout = ({ children }) => {
    return (
        <>
            <PageHero title="Product" />
            {children}
        </>
    );
};

export default ProductLayout;
