import { ApolloClient, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Project } from './pages/Project';
import { cache } from './utils/cache';

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	cache,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects/:id' element={<Project />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</ApolloProvider>
	);
};

export default App;
