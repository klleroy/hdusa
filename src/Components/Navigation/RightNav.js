import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 18px 10px;
	}

	li a {
		color: #fff;
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #0d2538;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		li {
			color: #fff;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>
				<Link to='/'>About Us</Link>
			</li>
			<li>
				<Link to='/coaches'>Coaches</Link>
			</li>
			{/* <li>
				<Link to='/contact-us'>Contact Us</Link>
			</li> */}
		</Ul>
	);
};

export default RightNav;
