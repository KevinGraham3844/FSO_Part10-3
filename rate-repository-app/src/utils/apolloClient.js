import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const apolloUri = Constants.expoConfig.extra.env
console.log(apolloUri);

const httpLink = createHttpLink({
    uri: apolloUri
});

const createApolloClient = (authStorage) => {
    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
            };
        }
    });
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    })
}


/*
const createApolloClient = () => {
    return new ApolloClient({
        uri: Constants.expoConfig.extra.env,
        cache: new InMemoryCache(),
    });
};
*/
export default createApolloClient;