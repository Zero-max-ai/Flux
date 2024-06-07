import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="w-full dark:bg-[#0A0E0D] text-white py-2">
			<nav className="flex items-center justify-between w-10/12 mx-auto">
				<Link to={'/'} className="text-2xl font-semibold">Flux</Link>
				<div className="flex items-center gap-8">
					<Link to={'/icons'} className="font-thin hover:underline underline-offset-2">Icons</Link>
					<Link to={'/components'} className="font-thin hover:underline underline-offset-2">Components</Link>
					<GetStarted />
				</div>
			</nav>
		</header>
	)
}

const GetStarted = () => {
	return <button className="font-thin bg-[#ABC2BE] text-black hover:underline px-3 rounded">Get Started</button>
}

export default Navbar;
