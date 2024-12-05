import getClient from "@/services/graphQLClient";
import { gql } from "graphql-request";

const getProductIntro = async () => {
    const client = getClient();

    const productIntro = await client.request(
        gql`
            query ProductIntro {
                homepage {
                    productIntro {
                        id
                        link
                        position
                        productImage {
                            url
                        }
                        shortDescription
                        tagline
                        title
                        label
                    }
                }
            }
        `
    );

    return productIntro?.homepage?.productIntro || [];
};

const getWorkingHours = async () => {
    const client = getClient();
    const wrokigingHours = await client.request(
        gql`
            query WorkingTime {
                homepage {
                    workingTime {
                        DayToDay
                        TimeFrom
                        TimeTo
                        id
                        position
                    }
                }
            }
        `
    );

    return wrokigingHours?.homepage?.workingTime || [];
};

const getGallery = async () => {
    const client = getClient();
    const gallery = await client.request(
        gql`
            query ItemsGallery {
                homepage {
                    ItemsGallery {
                        Pictures {
                            url
                        }
                        aspect
                        id
                    }
                }
            }
        `
    );
    return gallery?.homepage?.ItemsGallery || [];
};

const getBannerImages = async () => {
    const client = getClient();
    const bannernerImages = await client.request(
        gql`
            query BannerImages {
                homepage {
                    BannerImages {
                        url
                    }
                }
            }
        `
    );

    return bannernerImages?.homepage?.BannerImages || [];
};
const getShortMenu = async (pagination) => {
    const client = getClient();
    const shortMenu = await client.request(
        gql`
            query Menus($pagination: PaginationArg) {
                menus(pagination: $pagination) {
                    itemName
                    picture {
                        url
                    }
                    tags {
                        tag
                    }
                    currentPrice
                    documentId
                }
            }
        `,
        {
            pagination: pagination,
        }
    );

    return shortMenu?.menus || [];
};

export {
    getBannerImages,
    getGallery,
    getProductIntro,
    getShortMenu,
    getWorkingHours,
};
