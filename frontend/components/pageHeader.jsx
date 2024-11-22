const PageHeader = ({ title, count }) => {
    return (
        <div>
            <div className="flex flex-col gap-[14px]">
                <h2 className="text-4xl font-medium leading-[96%] uppercase">
                    {title}
                </h2>
                <div className="flex items-center gap-6">
                    <p className="font-dmSans font-light text-xl leading-[93%]">
                        Showing all {count} results{" "}
                    </p>
                    <span className={`h-[3px] bg-primary  w-[100px]`}></span>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
