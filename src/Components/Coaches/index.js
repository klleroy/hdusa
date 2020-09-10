import React from 'react';
import data from './data';
import Jumbotron from '../Jumbotron';

const Coaches = () => {
	return (
		<>
			<Jumbotron />
			<div className='container'>
				<h1 className='text-center'>Coaches</h1>
				<hr />
				<div className='row coaches'>
					{data.coaches.map((coach) => (
						<div className='col-4' key={coach.image}>
							<img src={coach.image} alt={coach.altText} />
							<p>{coach.bio}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Coaches;
