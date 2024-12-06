import getClient from "@/services/graphQLClient";
import { gql } from "graphql-request";

const getCategories = async () => {
    const client = getClient();
    const category = await client.request(
        gql`
            query Categories {
                categories {
                    categoryName
                    documentId
                    menus {
                        itemName
                    }
                }
            }
        `
    );

    return category?.categories || [];
};

const getCategoryMenu = async (documentId) => {
    const client = getClient();
    const menu = await client.request(
        gql`
            query Category($documentId: ID!) {
                category(documentId: $documentId) {
                    documentId
                    menus {
                        itemName
                        itemDescription
                        documentId
                        currentPrice
                        picture {
                            url
                        }
                        previousPrice
                    }
                }
            }
        `,
        {
            documentId: documentId,
        }
    );
    return menu?.category?.menus || [];
};

const getAllMenus = async (pagination) => {
    const client = getClient();
    const menus = await client.request(
        gql`
            query Menus($pagination: PaginationArg) {
                menus(pagination: $pagination) {
                    category {
                        categoryName
                        documentId
                    }
                    documentId
                    itemDescription
                    itemName
                    picture {
                        url
                    }
                    previousPrice
                    publishedAt
                    currentPrice
                }
            }
        `,
        {
            pagination: pagination,
        }
    );
    return menus?.menus || [];
};

const getSingleMenu = async (documentId) => {
    const client = getClient();
    const menu = await client.request(
        gql`
            query Menu($documentId: ID!) {
                menu(documentId: $documentId) {
                    currentPrice
                    documentId
                    itemDescription
                    itemName
                    picture {
                        url
                    }
                    previousPrice
                    buyLink
                }
            }
        `,
        {
            documentId: documentId,
        }
    );
    return menu?.menu || {};
};

export { getAllMenus, getCategories, getCategoryMenu, getSingleMenu };
