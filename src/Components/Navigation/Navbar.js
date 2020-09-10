import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
	width: 100%;
	height: 55px;
	background-color: #06467d;
	box-shadow: 0 2px 4px -1px #00000080, 0 4px 5px 0 #00000029,
		0 1px 10px 0 #0000002e;
	color: #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;

	.logo {
      padding: 15px 0;
      font-size: 20px;
      font-weight: 600;
   }
   font-family: 'Raleway', sans-serif;
}
   }
`;

const Navbar = () => {
	return (
		<Nav className='sticky-top'>
			<div className='logo'>Hot Dog USA</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
