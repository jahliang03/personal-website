// components/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	// NavBtn,
	// NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/Homepage" >
						Home
					</NavLink>
					<NavLink to="/Portfolio" activeStyle>
						Portfolio
					</NavLink>
					<NavLink to="/Projects" activeStyle>
						Projects
					</NavLink>
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;
