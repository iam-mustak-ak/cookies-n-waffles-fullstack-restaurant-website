import Image from "next/image";

const CustomImage = ({ aspect = "square", src }) => {
    return (
        <Image
            src={src}
            width={410}
            height={aspect === "square" ? 410 : 250}
            alt="gallery Image"
            className={`${
                aspect === "square" ? "aspect-square" : "aspect-video"
            } object-cover w-full mb-[30px]`}
        />
    );
};

export default CustomImage;
