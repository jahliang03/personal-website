//components/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
//import { Helmet } from "react-helmet";


//main navigation bar, sets style, bg color, height, and where the links show up 
export const Nav = styled.nav`
	background: #DCDBFF;
	height: 75px;
	display: flex;
	justify-content: flex-end;
	padding: 0 20px;
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

//represents each link - home, portfolio, projects
//
export const NavLink = styled(Link)`
	color: #908EFF;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
  postition: relative;
	&.active {
		color: #6B68FF;
	}
  
  /* add circle border around each link - need to fix later cuz it doesnt work */
  &::before {
    content: '';
    position: absolute;
    width: 80px; /* Adjust the size of the circle */
    height: 30px; /* Adjust the size of the circle */
    background-color: #F9F8FF; /* Adjust the color of the circle */
    border-radius: 100%; /* Makes it a circle */
    top: 6%; /* Centers vertically */
    left: 810px; /* Adjust the distance from the link */
    transform: translateY(-50%); /* Centers vertically */
    z-index: -1;
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

// export const DynamicTitle = ({title}) => (
// 	<Helmet>
// 		<title>{title}</title>
// 	</Helmet>
// );