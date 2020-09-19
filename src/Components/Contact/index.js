import React from 'react';
import * as emailjs from 'emailjs-com';
import Jumbotron from '../Jumbotron';

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then(
				(res) => {
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
	};

	return (
		<>
			<Jumbotron />
			<div className='container'>
				<div className='container inner'>
					<h1 className='text-center'>Contact Us</h1>
					<hr />
					<form id='contact-form' onSubmit={sendEmail} method='POST'>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<input type='text' className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='Email'>Email address</label>
							<input
								type='email'
								className='form-control'
								aria-describedby='emailHelp'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='name'>Subject</label>
							<input type='text' className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='message'>Message</label>
							<textarea className='form-control' rows='5'></textarea>
						</div>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
