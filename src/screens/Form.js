import React from 'react'

import './Form.css'

import initialPipes from '../assets/pipes1.svg'
import linePipe from '../assets/pipes2.svg'
import packageImg from '../assets/package.svg'
import globe from '../assets/globe.png'
import game from '../assets/game.png'
import mobile from '../assets/mobile.png'
import backend from '../assets/backend.png'

const APPLICATION_TYPES = [
	{
		id: 'website',
		name: 'Website',
		image: globe
	},
	{
		id: 'backend',
		name: 'Backend',
		image: backend
	},
	{
		id: 'mobile',
		name: 'Mobile App',
		image: mobile
	},
	{
		id: 'game',
		name: 'Game',
		image: game
	},
]

function Form () {
	const [packageX, setPackageX] = React.useState(1440 - 1280 - 77)
	const [appType, setAppType] = React.useState('')

	const scrollTo = (elementId) => {
		document.getElementById(elementId).scrollIntoView({
			behavior: 'smooth'
		})
	}

	const OptionButton = ({ data, onSelect, selected }) => {
		return (
			<button
				className={`clickable hover:border-black ${selected ? 'border-green-500' : ''}`}
				onClick={() => onSelect(data.id)}
			>
				<img src={data.image} width="120" height="120" alt="" />
			</button>
		);
	}

	const InitialPipe = () => <img id="pipe" src={initialPipes} className="object-fill absolute max-w-screen max-h-screen" alt="" style={{ zIndex: -50 }} />;
	const LinePipe = () => <img src={linePipe} className="object-fill absolute max-w-screen max-h-screen" alt="" style={{ zIndex: -50 }} />;

	return (
		<main className="max-h-screen relative">
			<img
				className="object-fill absolute max-w-screen max-h-screen z-10"
				style={{ top: 5, right: packageX }}
				src={packageImg}
				alt=""
			/>
			<section id="appType" className="page-section relative">
				<InitialPipe />
				<div className="container p-40">
					<h1 className="text-5xl font-bold pb-4">Start a NoOps Boilerplate</h1>
					<h2 className="text-3xl font-light">Choose the application type you want to build</h2>

					<div className="flex flex-row flex-wrap gap-4 py-20 ml-20">
						{APPLICATION_TYPES.map((data) => (
							<OptionButton
								key={data.id}
								selected={data.id === appType}
								data={data}
								onSelect={(id) => {
									setAppType(id)
									scrollTo("language")
								}}
							/>
						))}
					</div>
				</div>
			</section>

			<section id="language" className="page-section relative">
				<LinePipe />

				<div className="absolute right-1/2 top-10">
					<button className="text-2xl" onClick={() => scrollTo("appType")}>
						<h3>Go back</h3>
					</button>
				</div>

				<div className="container ml-40 p-40">
					<h1 className="text-5xl font-bold pb-4">Choose the programming language</h1>
					<h2 className="text-3xl font-light">Or the framework/tool yo want to use</h2>

					{/* https://devicon.dev/ */}
					<div className="flex flex-row flex-wrap gap-8 py-20 ml-20 max-w-md">
						<i className="devicon-html5-plain-wordmark colored text-9xl"></i>
						<i className="devicon-android-plain-wordmark colored colored text-9xl"></i>
						<i className="devicon-html5-plain colored text-9xl"></i>
						<i className="devicon-html5-plain colored text-9xl"></i>
						<i className="devicon-html5-plain colored text-9xl"></i>
						<i className="devicon-html5-plain colored text-9xl"></i>
					</div>
				</div>
			</section>

			<section id="section3" className="page-section relative">
				<LinePipe />
				Section 3
			</section>

			<section id="section4" className="page-section relative">
				<LinePipe />
				Section 4
			</section>

			<section id="section5" className="page-section relative">
				<LinePipe />
				Section 5
			</section>
		</main>
	)
}

export default Form
