import atob from 'atob';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import config from '../config';

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${atob(config.githubConvertedToken)}`,
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(
		createHttpLink({
			uri: `https://api.github.com/graphql`,
		})
	),
	cache: new InMemoryCache(),
});
