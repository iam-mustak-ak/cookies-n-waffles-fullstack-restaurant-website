import CustomImage from "./common/CustomImage";
import Heading from "./common/heading";

const Gallery = ({ control }) => {
    return (
        <section className="py-20">
            <div className="container">
                <div className="mb-[60px]">
                    <Heading
                        data={{
                            tagline: "gallery",
                            title: "Our Cookies & Waffles",
                        }}
                        noMargin
                        right={control ? control : false}
                    />
                </div>

                <div className="columns-3 gap-[30px] ">
                    <CustomImage src="/assets/cookie.png" aspect="" />
                    <CustomImage src="/assets/cookie.png" />
                    <CustomImage src="/assets/cookie.png" />
                    <CustomImage src="/assets/cookie.png" aspect="" />
                    <CustomImage src="/assets/cookie.png" aspect="" />
                    <CustomImage src="/assets/cookie.png" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;