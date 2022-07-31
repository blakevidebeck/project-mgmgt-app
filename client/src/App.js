import Header from './components/Header';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { Clients } from './components/Clients';
import { cache } from './utils/cache';
import { AddClientModal } from './components/AddClientModal';

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	cache,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Header />
			<div className='container'>
				<AddClientModal />
				<Clients />
			</div>
		</ApolloProvider>
	);
};

export default App;
