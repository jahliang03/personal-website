//components/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

//main navigation bar 
export const Nav = styled.nav`
	background: #DCDBFF;
	height: 75px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((240vw - 1000px) / 2);
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

//each link - home, portfolio,
export const NavLink = styled(Link)`
	color: #908EFF;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #6B68FF;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #BDBCFF;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

// export const NavBtn = styled.nav`
// 	display: flex;
// 	align-items: center;
// 	margin-right: 24px;
// 	/* Third Nav */
// 	/* justify-content: flex-end;
// width: 100vw; */
// 	@media screen and (max-width: 768px) {
// 		display: none;
// 	}
// `;

// export const NavBtnLink = styled(Link)`
// 	border-radius: 4px;
// 	background: #808080;
// 	padding: 10px 22px;
// 	color: #000000;
// 	outline: none;
// 	border: none;
// 	cursor: pointer;
// 	transition: all 0.2s ease-in-out;
// 	text-decoration: none;
// 	/* Second Nav */
// 	margin-left: 24px;
// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: #F5F5F5;
// 		color: #808080;
// 	}
//`;
