import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import ProductIntro from "@/components/productIntro";
import ShortMenu from "@/components/shortMenu";
import WorkingHours from "@/components/workingHours";

const data = [
    {
        id: 1,
        tagline: "our cookies",
        title: "Cookies of every taste",
        shortDes:
            "Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat.",
        link: "/cookies",
        label: "View Cookies",
        position: "right",
        image: "/assets/cookie.png",
    },
    {
        id: 2,
        tagline: "OUR WAFFLES",
        title: "Waffle that Crunches",
        shortDes:
            "Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat.",
        link: "/waffles",
        label: "View Waffles",
        position: "left",
        image: "/assets/waffle.png",
    },
];

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <section className="py-20">
                {data.map((product) => (
                    <ProductIntro
                        key={product.id}
                        position={product.position}
                        data={product}
                    />
                ))}
            </section>
            <ShortMenu />
            <WorkingHours />
        </>
    );
}
