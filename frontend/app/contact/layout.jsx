import PageHero from "@/components/pageHero";

const Layout = ({ children }) => {
    return (
        <>
            <PageHero title="Contact Us" />
            {children}
        </>
    );
};

export default Layout;
