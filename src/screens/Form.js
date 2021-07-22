import React from 'react'

import './Form.css'

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

	return (
		<main className="max-h-screen">
			<section id="appType" className="page-section pipes1 relative">
				{/* Draw Pipes */}
				<img
					id="package"
					className="object-fill absolute max-w-screen max-h-screen animate-package"
					style={{ top: 5, right: 58, zIndex: 100 }}
					src={packageImg}
					alt=""
				/>
				<div
					className="absolute bg-gray-300 p-10"
					style={{ right: 50, top: 0, bottom: 50, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-300 p-10"
					style={{ left: 0, bottom: 50, right: 50, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-300 p-10"
					style={{ left: 0, bottom: 0, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-500 py-3 px-12"
					style={{ right: 40, top: 100, zIndex: -100 }}
				/>
				{/* End Pipes */}

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
				{/* Draw Pipes */}
				<img
					id="package"
					className="object-fill absolute max-w-screen max-h-screen animate-package"
					style={{ top: 20, left: 8, zIndex: 100 }}
					src={packageImg}
					alt=""
				/>
				<div
					className="absolute bg-gray-300 p-10"
					style={{ left: 0, top: 0, bottom: 0, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-500 py-3 px-12"
					style={{ left: -10, top: 100, zIndex: -100 }}
				/>
				{/* End Pipes */}

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
				{/* Draw Pipes */}
				<div
					className="absolute bg-gray-300 p-10"
					style={{ left: 0, top: 0, bottom: 0, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-500 py-3 px-12"
					style={{ left: -10, top: 100, zIndex: -100 }}
				/>
				{/* End Pipes */}
			</section>

			<section id="section4" className="page-section relative">
				{/* Draw Pipes */}
				<div
					className="absolute bg-gray-300 p-10"
					style={{ left: 0, top: 0, bottom: 0, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-500 py-3 px-12"
					style={{ left: -10, top: 100, zIndex: -100 }}
				/>
				{/* End Pipes */}
			</section>

			<section id="section5" className="page-section relative">
				{/* Draw Pipes */}
				<div
					className="absolute bg-gray-300 p-10"
					style={{ left: 0, top: 0, bottom: 0, zIndex: -100 }}
				/>
				<div
					className="absolute bg-gray-500 py-3 px-12"
					style={{ left: -10, top: 100, zIndex: -100 }}
				/>
				{/* End Pipes */}
			</section>
		</main>
	)
}

export default Form
