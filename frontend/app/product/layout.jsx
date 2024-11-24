import PageHero from "@/components/pageHero";

const Layout = ({ children }) => {
    return (
        <>
            <PageHero title="Main product" />
            {children}
        </>
    );
};

export default Layout;
