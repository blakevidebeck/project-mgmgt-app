import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECT } from '../queries/projectQueries';

export const EditProjectForm = ({ project }) => {
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);
	const [status, setStatus] = useState('new');

	const [updateProject] = useMutation(UPDATE_PROJECT, {
		variables: { id: project.id, name, description, status },
		refetchQueries: [{ query: GET_PROJECT }],
		// update(cache, { data: { deleteClient } }) {
		// 	const { clients } = cache.readQuery({ query: GET_CLIENTS });
		// 	cache.writeQuery({
		// 		query: GET_CLIENTS,
		// 		data: { clients: clients.filter(client => client.id !== deleteClient.id) },
		// 	});
		// },
	});

	const onSubmit = e => {
		e.preventDefault();

		if (!name || !description || !status) {
			return alert('Please fill out all fields');
		}

		updateProject(name, description, status);
	};

	return (
		<div className='mt-5'>
			<h3>Update Project Details</h3>
			<form onSubmit={onSubmit}>
				{/* Name */}
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>

				{/* Description */}
				<div className='mb-3'>
					<label htmlFor='text' className='form-label'>
						Description
					</label>
					<textarea
						className='form-control'
						id='email'
						value={description}
						onChange={e => setDescription(e.target.value)}
					></textarea>
				</div>

				{/* Status */}
				<div className='mb-3'>
					<label htmlFor='phone' className='form-label'>
						Status
					</label>
					<select
						id='status'
						className='form-select'
						value={status}
						onChange={e => setStatus(e.target.value)}
					>
						<option value='new'>Not Started</option>
						<option value='progress'>In Progress</option>
						<option value='completed'>Completed</option>
					</select>
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};
