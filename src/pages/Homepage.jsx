import React from "react";

export default function Homepage() {
	return (
		<div className="bg-gray-100">
			{/* Header */}
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
					<div className="text-3xl font-bold text-gray-900">
						<img src="logo.png" alt="Pantip" className="h-8" />
					</div>
					<nav className="space-x-4">
						<a href="#" className="text-gray-500 hover:text-gray-900">
							Home
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900">
							Topics
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900">
							Login
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900">
							Sign Up
						</a>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
				<div className="text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block xl:inline">Welcome to</span>{" "}
						<span className="block text-indigo-600 xl:inline">Pantip</span>
					</h1>
					<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
						A vibrant community where you can discuss a wide range of topics,
						from technology to lifestyle.
					</p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
						<div className="rounded-md shadow">
							<a
								href="#"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</main>

			{/* Categories */}
			<section className="bg-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex overflow-x-scroll py-4 space-x-4">
						{[
							"Icons",
							"Beachfront",
							"Rooms",
							"Amazing views",
							"Design",
							"Castles",
							"OMG!",
							"Cabins",
						].map((category) => (
							<div key={category} className="flex-shrink-0">
								<div className="text-center px-4">
									<img
										className="h-12 w-12 rounded-full mx-auto"
										src={`/${category.toLowerCase().replace(/ /g, "-")}.png`}
										alt={category}
									/>
									<p className="mt-2 text-gray-600">{category}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Experiences */}
			<section className="py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-extrabold text-gray-900 mb-6">
						Experiences
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "Go VIP with Kevin Hart",
								host: "Kevin Hart",
								date: "Coming July",
								image: "kevin-hart.jpg",
							},
							{
								title: "Join a living room session with Doja",
								host: "Doja Cat",
								date: "Coming October",
								image: "doja-cat.jpg",
							},
							{
								title: "Stay in Prince’s Purple Rain house",
								host: "Wendy and Lisa",
								date: "Coming October",
								image: "purple-rain.jpg",
							},
							{
								title: "Train at the X-Mansion",
								host: "Jubilee",
								date: "Booking closed",
								image: "x-mansion.jpg",
							},
							{
								title: "Open the Olympic Games at Musée d’Orsay",
								host: "Mathieu Lehanneur",
								date: "Sold out",
								image: "olympic-games.jpg",
							},
							{
								title: "Wake up in the Musée d’Orsay",
								host: "Mathieu Lehanneur",
								date: "Sold out",
								image: "musee-dorsay.jpg",
							},
						].map((exp) => (
							<div
								key={exp.title}
								className="bg-white shadow-lg rounded-lg overflow-hidden"
							>
								<img
									src={exp.image}
									alt={exp.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-lg font-semibold">{exp.title}</h3>
									<p className="text-gray-600">Hosted by {exp.host}</p>
									<p className="text-gray-500">{exp.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
