import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import { ClientInfo } from '../components/ClientInfo';
import { DeleteProjectButton } from '../components/DeleteProjectButton';

export const Project = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_PROJECT, {
		variables: { id },
	});

	if (loading) return <Spinner />;
	if (error) return <p>Something went wrong</p>;

	const { name, description, status, client } = data.project;

	return (
		<>
			{!loading && !error && (
				<div className='mx-auto w-75 card p-5'>
					<Link className='btn btn-light btn-sm w-25 d-inline ms-auto' to='/'>
						Back
					</Link>
					<h1>{name}</h1>
					<p>{description}</p>
					<h5 className='mt-3'>Project Status</h5>
					<p className='lead'>{status}</p>

					<ClientInfo client={client} />

					<DeleteProjectButton projectId={id} />
				</div>
			)}
		</>
	);
};
