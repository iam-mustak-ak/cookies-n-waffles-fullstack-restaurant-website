import { getGallery } from "@/data/homePageData";
import CustomImage from "./common/CustomImage";
import Heading from "./common/heading";

const Gallery = async ({ control }) => {
    const gallery = await getGallery();

    return (
        <section className="py-14 md:py-20">
            <div className="container">
                <div className="mb-6 md:mb-[60px]">
                    <Heading
                        data={{
                            tagline: "gallery",
                            title: "Our Cookies & Waffles",
                        }}
                        noMargin
                        right={control ? control : false}
                    />
                </div>

                <div className="columns-3 gap-2 md:gap-[30px] ">
                    {gallery?.map((gallery) => (
                        <CustomImage
                            key={gallery?.id}
                            src={gallery?.Pictures?.url}
                            aspect={gallery?.aspect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
