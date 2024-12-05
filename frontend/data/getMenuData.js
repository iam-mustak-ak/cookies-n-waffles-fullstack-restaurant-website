import getClient from "@/services/graphQLClient";
import { gql } from "graphql-request";

const getShortMenu = async () => {
    const client = getClient();

    const productIntro = await client.request(
        gql`
            query Menus($pagination: PaginationArg) {
                menus(pagination: $pagination) {
                    documentId
                    currentPrice
                    itemName
                    picture {
                        url
                    }
                    tags {
                        id
                        tag
                    }
                }
            }
        `
    );

    return productIntro?.homepage?.productIntro || [];
};

export { getShortMenu };
