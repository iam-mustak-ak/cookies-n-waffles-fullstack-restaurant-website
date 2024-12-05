import { GraphQLClient } from "graphql-request";

const getClient = () => {
    const client = new GraphQLClient(process.env.SERVER_URL);

    return client;
};

export default getClient;
