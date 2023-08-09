import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Details from './components/pages/Details/Details';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/details/:artId'
						element={<Details />}
					/>
				</Routes>
				<Navbar />
			</BrowserRouter>
		</>
	);
}

export default App;
