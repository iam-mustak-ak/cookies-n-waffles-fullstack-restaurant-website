const PageHero = ({ title }) => {
    return (
        <section className="h-[300px] md:h-[400px] max-md:pt-10  bg-pageHero relative bg-no-repeat bg-cover bg-center -z-20">
            <div className="inset-0 bg-black/40 backdrop-blur-sm h-full w-full absolute -z-10"></div>
            <div className="container z-50 h-full">
                <div className="flex items-center flex-col h-full justify-center z-50 ">
                    <h4 className="text-secondary text-2xl font-semibold">
                        Cookies & Waffles
                    </h4>
                    <h2 className="text-6xl md:text-8xl font-bold leading-[96px] text-secondary">
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default PageHero;
