import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useStateConsumer} from './store/StateProvider';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import './app.css';

export default function App() {
	const [{trim}, dispatch] = useStateConsumer()
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<SearchPage />} />
				</Routes>
			</Router>
		</div>
	)
}