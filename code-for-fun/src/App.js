import React from 'react';
import './App.css';
import Navbar from './components/NavBar/index1';
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import About from './pages/about';


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/pages/about' element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
