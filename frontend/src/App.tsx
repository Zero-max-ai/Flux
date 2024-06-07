import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
	return (
		<Routes>
			<Route path={'/'} element={
				<div>
					<Navbar />
					<span>yaho</span>
					<Footer/>
				</div>
				} />
		</Routes>
	)
}

export default App;
