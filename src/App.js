// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Homepage";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/Homepage" element={<Home />} />
				<Route path="/Projects" element={<Projects />} />
        <Route path="/Portfolio" element={<Portfolio />} />
			</Routes>
		</Router>
	);
}

export default App;
