import { Link } from 'react-router-dom';
import Portfolio from '../assets/portfolio.svg';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';

const Footer = () => {
	return (
		<footer className="py-2 px-10 flex items-center justify-between text-sm bg-[#0A0E0D]">
			<div>
				<span className="text-gray-400">
					Akshat Gangi - &copy; All Rights Reserved
				</span>
			</div>
			<div className="flex gap-5">
				<Logo imgSrc={Portfolio} renderer={'https://my-pov-life.vercel.app/'} bgColor={'purple'} />
				<Logo imgSrc={Github} renderer={'https://github.com/Zero-max-ai'} bgColor={'blue'} />
				<Logo imgSrc={LinkedIn} renderer={'https://www.linkedin.com/in/akshat-gangi-b457a61ab/'} bgColor={'purple'} />

			</div>
		</footer>
	)
}

interface LogoProps {
	imgSrc: string;
	renderer: string;
	bgColor?: string;
}

const Logo = ({imgSrc, renderer, bgColor}: LogoProps) => {
	return <Link to={renderer} className="p-1 border border-slate-500 rounded-lg">
		<img src={imgSrc} className={`bg-${bgColor ? bgColor: "red"}-400`} />
	</Link>
}

export default Footer;
