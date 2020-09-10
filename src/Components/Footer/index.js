import React from 'react';
import ijru from './images/ijru.png';
import amjrf from './images/amjrf.png';

const Footer = () => {
	return (
		<footer className='footer text-center mt-auto py-3'>
			<div className='container'>
				<div className='row'>
					<div className='col-3'>
						<a
							href='https://ijru.sport'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img className='ijruLogo float-right' src={ijru} alt='ijru' />
						</a>
					</div>
					<div className='col-6'>
						<span className='text-center'>
							&copy;2020 CrashLabs All Rights Reserved
						</span>
					</div>
					<div className='col-3'>
						<a
							href='https://amjrf.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img className='amjrfLogo float-left' src={amjrf} alt='amjrf' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
