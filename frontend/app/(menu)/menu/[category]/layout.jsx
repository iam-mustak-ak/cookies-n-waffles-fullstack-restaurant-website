import PageHeader from "@/components/pageHeader";

const CategoryLayout = async ({ params, children }) => {
    const category = (await params).category;

    return (
        <>
            <PageHeader count={category} title={category} />
            {children}
        </>
    );
};

export default CategoryLayout;
